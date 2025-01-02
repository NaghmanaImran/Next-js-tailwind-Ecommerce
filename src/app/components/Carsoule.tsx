import Image from "next/image";
import React from "react";

const Carsoule = () => {
  return (
    <div>
      <section className="bg-black pt-20 md:pt-24 h-auto">
        <div className="py-4 px-2 mx-auto max-w-7xl sm:py-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { imgSrc: "/images/prwens.jpg", alt: "Prawns", title: "PRAWNS" },
              { imgSrc: "/images/chawomin.jpeg", alt: "Chawmin", title: "CHAWOMIN" },
              { imgSrc: "/images/menchurian.jpg", alt: "Menchurian", title: "MENCHURIAN" },
              { imgSrc: "/images/stock.webp", alt: "Stock", title: "STOCK" },
              { imgSrc: "/images/chwomin 2.jpg", alt: "Chawmin", title: "CHAWOMIN" },
              { imgSrc: "/images/chainagrill.jpg", alt: "Grilled Chinese Dish", title: "CHAINAGRILL" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden group"
              >
                <a href="#" title={item.title} className="block w-full h-full">
                  <Image
                    src={item.imgSrc}
                    width={500}
                    height={500}
                    alt={item.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                  <h3 className="absolute bottom-4 left-4 z-10 text-xl md:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carsoule;
