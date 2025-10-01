import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [messages, setMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("messages");
    if (saved) {
      try {
        const parsedMessages = JSON.parse(saved);
        setMessages(parsedMessages);
      } catch (error) {
        console.error("Error loading messages:", error);
        setMessages([]);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("messages", JSON.stringify(messages));
      console.log("Saved to localStorage:", messages);
    }
  }, [messages, isLoaded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      ...form,
      id: Date.now() + Math.random(),
      timestamp: new Date().toISOString(),
    };

    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, newMessage];
      console.log("Adding message:", updatedMessages);
      return updatedMessages;
    });

    setForm({ name: "", email: "", message: "" });
  };

  const deleteMessage = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.filter((pm) => pm.id !== messageId)
    );
  };

  const clearAllMessages = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <div className="max-w-2xl w-full">
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-gray-700">Name</span>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-gray-700">
              Email
            </span>
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-gray-700">
              Message
            </span>
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border rounded"
              rows="4"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            Save Message
          </button>
        </form>

        {messages.length > 0 && (
          <div>
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Messages ({messages.length})
              </h2>
              <button
                onClick={clearAllMessages}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
                  onClick={() => deleteMessage(msg.id)}
                  className="bg-red-400 text-white px-2 py-1 rounded text-xs mt-2 hover:bg-red-500"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {messages.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No messages yet! 📝</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
