import "../css/foodcard.css";
import "../css/mobile/mobile.css";

const Card = ({ food, addFood, removeFood }) => {
  // calling a parent function through props and passing selected food
  const addItem = () => {
    addFood(food);
  };

  const removeItem = () => {
    removeFood(food);
  };
  return (
    <>
      <div className="food-container">
        <img src={food.img} alt={food.name} />
        <div className="food-card  bg-primary">
          <i
            className="fa-solid fa-circle-stop"
            style={food.isVeg ? { color: "green" } : { color: "red" }}
          ></i>
          <span className="food-title"> {food.name}</span>
          <p>{food.description}</p>
          <p className="food-price">&#8377; {food.price}</p>
          <div>
            <button type="submit" className="btn btn-add" onClick={addItem}>
              Add &nbsp;<i className="fa-solid fa-plus"></i>
            </button>
            <button className="btn btn-remove" onClick={removeItem}>
              Remove &nbsp;<i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
