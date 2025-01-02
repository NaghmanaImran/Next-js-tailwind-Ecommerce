export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Schezwan Noodles",
      price: 10, // Numeric value
      image: "/images/chainagrill.jpg", // Local image path
    },
    {
      id: 2,
      name: "Gong Bao Chicken",
      price: 30, // Numeric value
      image: "/images/chawomin.jpeg", // Local image path
    },
    {
      id: 3,
      name: "Kung Pao Chicken",
      price: 150, // Numeric value
      image: "/images/Kungpu2.jpeg", // Local image path
    },
    {
      id: 4,
      name: "Manchurian",
      price: 10, // Numeric value
      image: "/images/menchurian.jpg", // Local image path
    },
    {
      id: 5,
      name: "Kung Pao 2",
      price: 100, // Numeric value
      image: "/images/GongBao.webp", // Local image path
    },
    {
      id: 6,
      name: "Schezwan Noodles",
      price: 80, // Numeric value
      image: "/images/schezwan-noodles.webp", // Local image path
    },
  ];

  res.status(200).json(products);
}
