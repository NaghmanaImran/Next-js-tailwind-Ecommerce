import Image from 'next/image';
import React from 'react';

const FlotingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      {/* Content Section */}
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burgers</h2>
        <p className="text-white mb-4">
          Developed expertise in crafting authentic Chinese dishes including dumplings stir-fry and noodles with a focus on traditional techniques.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-amber-400 transition duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          Coming Soon: Our New Launches
        </h3>
        <ul className="text-white space-y-2">
          <li>
            <strong>Appetizers and Street Food:</strong>
            <ul className="ml-4 list-disc">
              <li>1. Xiao Long Bao (Soup Dumplings)</li>
              <li>2. Jian Bing (Chinese Crepes)</li>
              <li>3. Rou Jia Mo (Chinese Burger)</li>
              <li>4. Sheng Jian Bao (Pan-Fried Pork Buns)</li>
              <li>5. Zha Liang (Fried Dough Rice Rolls)</li>
            </ul>
          </li>
          <li>
            <strong>Main Dishes:</strong>
            <ul className="ml-4 list-disc">
              <li>1. Mapo Tofu</li>
              <li>2. Kung Pao Chicken</li>
              <li>3. Peking Duck</li>
              <li>4. Sweet and Sour Pork</li>
              <li>5. General Tso Chicken</li>
            </ul>
          </li>
          <li>
            <strong>Noodles and Rice:</strong>
            <ul className="ml-4 list-disc">
              <li>1. Dan Dan Noodles</li>
              <li>2. Chow Mein (Stir-Fried Noodles)</li>
              <li>3. Yangzhou Fried Rice</li>
              <li>4. Biang Biang Noodles</li>
              <li>5. Clay Pot Rice</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <div className="relative w-full h-full">
          <Image
            src="/flotingimage.png"
            alt="Delicious food"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default FlotingImageContentBlock;
