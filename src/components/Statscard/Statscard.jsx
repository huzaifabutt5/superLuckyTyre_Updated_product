import "./Statscard.css";



export default function StatsCard() {
  const cards = [
{
      title: "Net Sale",
      amount: "Rs. 90,875,363",
      icon: "bi-cart",
      color: "blue",
      background: "linear-gradient(135deg, #4b79f5, #283eaf)",
    },
    {
      title: "Total COG - Sale",
      amount: "Rs. 62,418,509",
      icon: "bi-cart",
      color: "sky",
      background: "linear-gradient(135deg, #00c6ff, #0072ff)",
    },
    {
      title: "Net Purchase",
      amount: "Rs. 45,732,186",
      icon: "bi-cart",
      color: "purple",
    },
    {
      title: "Overall Expenses",
      amount: "Rs. 18,294,675",
      icon: "bi-cart",
      color: "orange",
    },
    {
      title: "Net Profit",
      amount: "Rs. 27,156,482",
      icon: "bi-cart",
      color: "green",
    },
  ];

  return (
    <div className="summary-grid">
      {cards.map((card, index) => (
        <div className={`summary-card ${card.color}`} key={index}>

<div>
            <p className="card-title">{card.title}</p>
            <h5>
              <span className="amount-currency">Rs:</span>
              <span className="amount-value">{card.amount.replace("Rs. ", "").replace(/,/g, "")}</span>
            </h5>
          </div>

          <div className="icon-box">
            <i className={`bi ${card.icon}`}></i>
          </div>

        </div>
      ))}
    </div>
  );
}