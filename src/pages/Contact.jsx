import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("messages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { ...form, id: Date.now() }]);
    setForm({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="flex flex-col items-center p-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <div className="max-w-2xl w-full">
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border rounded"
            required
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 border rounded"
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded"
          >
            Save Message
          </button>
        </form>

        {messages.length > 0 && (
          <div>
            <div className="flex justify-between mb-4">
              <h2>Messages ({messages.length})</h2>
              <button
                onClick={() => setMessages([])}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Clear All
              </button>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className="bg-gray-100 p-4 rounded mb-2">
                <h3 className="font-bold">{msg.name}</h3>
                <p className="text-sm text-gray-600">{msg.email}</p>
                <p className="mt-2">{msg.message}</p>
                <button
                  onClick={() =>
                    setMessages(messages.filter((m) => m.id !== msg.id))
                  }
                  className="bg-red-400 text-white px-2 py-1 rounded text-xs mt-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {messages.length === 0 && (
          <p className="text-center text-gray-500">No messages yet! 📝</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
