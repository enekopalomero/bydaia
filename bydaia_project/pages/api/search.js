export default function handler(req, res) {
  res.status(200).json([
    { price: "€399", stars: 3, rating: "7.8" },
    { price: "€499", stars: 4, rating: "8.5" },
    { price: "€599", stars: 5, rating: "9.1" },
  ]);
}