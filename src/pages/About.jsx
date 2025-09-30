import Navbar from "../components/Navbar";

const About = () => {
  const aboutContents = [
    {
      title: "5",
      content: "Years",
    },
    {
      title: "100+",
      content: "Clients",
    },
    {
      title: "24/7",
      content: "Support",
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 px-6">
      <Navbar />
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">About Us</h1>
        </div>

        <div className="bg-white rounded-lg shadow p-8 text-center">
          <div className="space-y-4 text-gray-700">
            <p>
              Welcome to our company! We create amazing experiences and deliver
              exceptional value to our customers.
            </p>

            <p>
              Our team is dedicated to innovation and excellence. We work hard
              to meet and exceed your expectations every day.
            </p>

            <p>
              We believe in building lasting relationships through trust,
              quality, and outstanding service.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t">
            {aboutContents.map((aboutContent, id) => {
              return (
                <div key={id}>
                  <div>{aboutContent.title}</div>
                  <div>{aboutContent.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
