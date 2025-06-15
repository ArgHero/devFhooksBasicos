
import './Tacometro.css';

const Tacometro = ({ value }) => {
  const rotation = (value / 100) * 180 - 90;

  return (
    <div className="gauge-container">
        <h2>Nivel de gasolina</h2>
      <svg className="gauge" viewBox="0 0 100 50">
        <path d="M10 50 A40 40 0 0 1 90 50" className="arc" />
        <line
          className="needle"
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          transform={`rotate(${rotation}, 50, 50)`}
        />
      </svg>
      <div className="value">{value}%</div>
    </div>
  );
};

export default Tacometro;
