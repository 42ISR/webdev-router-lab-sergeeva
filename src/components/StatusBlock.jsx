export default function StatusBlock({ title, text, buttonText, onClick }) {
  return (
    <div className="status">
      <div className="status-code">404</div>
      <h2>{title}</h2>
      <p>{text}</p>
      <button className="primary-btn" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}