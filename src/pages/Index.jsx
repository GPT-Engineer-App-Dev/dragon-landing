import React from "react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white">Welcome to China</h1>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">About China</h2>
        <p>
          China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion. China spans five geographical time zones and borders 14 different countries, the second most of any country in the world after Russia.
        </p>
      </section>

      {/* Culture Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Chinese Culture</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">Festivals</h3>
            <p>
              Chinese festivals are an integral part of the country's culture. The most famous is the Chinese New Year, also known as the Spring Festival, which is celebrated with fireworks, family gatherings, and feasts.
            </p>
            <img width="600" height="400" src="/placeholder.svg" alt="placeholder" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Traditional Clothing</h3>
            <p>
              Traditional Chinese clothing varies by region and ethnicity. The qipao, a form-fitting dress, is one of the most recognizable garments. It is often worn during formal occasions and festivals.
            </p>
            <img width="600" height="400" src="/placeholder.svg" alt="placeholder" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Cuisine</h3>
            <p>
              Chinese cuisine is diverse and flavorful, with regional specialties such as Peking duck, Sichuan hotpot, and Cantonese dim sum. It emphasizes fresh ingredients, balanced flavors, and artistic presentation.
            </p>
            <img width="600" height="400" src="/placeholder.svg" alt="placeholder" />
          </div>
        </div>
      </section>

      {/* Tourist Attractions Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Top Tourist Attractions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">Great Wall of China</h3>
            <p>
              The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials. It was built along the northern borders of China to protect against invasions.
            </p>
            <img width="600" height="400" src="/placeholder.svg" alt="placeholder" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Forbidden City</h3>
            <p>
              The Forbidden City is a palace complex in Beijing that served as the home of emperors and their households for almost 500 years. It is a UNESCO World Heritage Site and a symbol of China's cultural heritage.
            </p>
            <img width="600" height="400" src="/placeholder.svg" alt="placeholder" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Terracotta Army</h3>
            <p>
              The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE.
            </p>
            <img width="600" height="400" src="/placeholder.svg" alt="placeholder" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <ul className="space-y-2">
                <li>Email: info@china.com</li>
                <li>Phone: +86 123 456 7890</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            &copy; 2023 China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;