const Card = ({ title, value, color }) => {
  return (
    <div className={`p-6 rounded-lg shadow text-white ${color}`}>
      <h3 className="text-sm uppercase">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default Card;
