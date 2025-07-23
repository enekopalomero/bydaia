export default function PackageCard({ price, stars, rating }) {
  return (
    <div className="package-card">
      <h3>Paquete desde {price}</h3>
      <p>Estrellas: {stars}</p>
      <p>Valoración: {rating}/10</p>
    </div>
  );
}