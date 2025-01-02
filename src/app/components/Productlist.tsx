'use client';
import Image from "next/image";
import React from "react";

const Products = [
  {
    id: 1,
    title: "Kung Pao",
    category: "fixing",
    price: "500.00",
    imageUrl:
      "/images/chwomin 2.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Quick Noodles",
    category: "fixing",
    price: "800.00",
    imageUrl:
      "/images/chaineesrice.jpg",
    bgColor: "bg-cyan-500",
  },
  {
    id: 3,
    title: "Fish Chili",
    category: "spicy",
    price: "1000.00",
    imageUrl:
      "/images/chainagrill.jpg",
    bgColor: "bg-green-800",
  },
];

const ProductList = () => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {Products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-110 transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.40 175)"
              fill="white"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-64 h-64 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(circle, black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1.06, 1, 1)",
                opacity: 0.2,
              }}
            ></div>
            {/* Added width and height for Image */}
            <Image
              className="relative object-cover"
              src={product.imageUrl}
              alt={product.title}
              width={280} // Set width
              height={220} // Set height
            />
          </div>

          <div className="relative text-white px-8 pb-8 mt-4">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{product.title}</span>
              <span className="block bg-white rounded-full text-orange-500 text-xl font-bold px-3 py-2 leading-none items-center">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
