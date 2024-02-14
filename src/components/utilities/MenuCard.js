import "../css/menucard.css";

const MenuCard = (props) => {
  return (
    <>
      <div
        className={`card ${
          props.title === "MOMOS"
            ? "momo-card"
            : props.title === "PIZZAS"
            ? "pizza-card"
            : "bites-card"
        }`}
      >
        <div className="content">
          <p className="context-text">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
