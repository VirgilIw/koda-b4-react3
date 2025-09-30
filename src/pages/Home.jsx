import Navbar from "../components/Navbar";

const Home = () => {
  const dataCustomers = [
    {
      title: "1k",
      content: "Customers",
    },
    {
      title: "500+",
      content: "Products",
    },
    {
      title: "50+",
      content: "Brands",
    },
    {
      title: "99%",
      content: "Satisfaction",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            Find The Best
            <span className="text-pink-500"> Fashion Style</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Discover your perfect style with our curated fashion collection.
          </p>

          <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600">
            Start Shopping
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8 text-center">
          {dataCustomers.map((dataCustomer, id) => {
            return (
              <div key={id}>
                <div>
                  <div>{dataCustomer.title}</div>
                  <div>{dataCustomer.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
