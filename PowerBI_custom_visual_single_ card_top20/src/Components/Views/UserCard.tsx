import { useContext } from "react";
import "./style.css";
import { Context } from "../Context/Context";
import userImg from "../../../assets/Ellipse 32.svg";

// const cardData = [
//   {
//     id: 1,
//     name: "Muhammad Babar Khan",
//     money: 10000.0,
//     URL: userImg,
//   },
//   {
//     id: 2,
//     name: "Muhammad Babar Khan",
//     money: 100000.0,
//     URL: userImg,
//   },
//   {
//     id: 3,
//     name: "Muhammad Babar Khan",
//     money: 1000000.0,
//     URL: userImg,
//   },
//   {
//     id: 4,
//     name: "Muhammad Babar Khan",
//     money: 20000.0,
//     URL: userImg,
//   },
//   {
//     id: 5,
//     name: "Muhammad Babar Khan",
//     money: 40000.0,
//     URL: userImg,
//   },
//   {
//     id: 6,
//     name: "Muhammad Babar Khan",
//     money: 30000.0,
//     URL: userImg,
//   },
//   {
//     id: 7,
//     name: "Muhammad Babar Khan",
//     money: 50000.0,
//     URL: userImg,
//   },
//   {
//     id: 8,
//     name: "Muhammad Babar Khan",
//     money: 60000.0,
//   },
//   {
//     id: 9,
//     name: "Muhammad Babar Khan",
//     money: 80000.0,
//     URL: userImg,
//   },
//   {
//     id: 10,
//     name: "Muhammad Babar Khan",
//     money: 70000.0,
//   },
// ];

const UserCard = () => {
  const context = useContext(Context);
  console.log("card-context", context);
  const { getState } = context;
  console.log("getState", getState);

  // const sortedCardData = [...cardData].sort((a, b) => b.money - a.money);

  // const topDonations = sortedCardData.slice(0, 10);

  const sortedCardData = [...getState].sort((a, b) => b.salary - a.salary);

  const topDonations = sortedCardData.slice(0, 10);

  console.log(topDonations);

  return (
    // <div className="container">
    <div className="card-wrapper">
      <div className="card-heading">
        <h3>
          TOP <span style={{ color: "#FBC406" }}>10 </span>DONATIONS BOARD
        </h3>
      </div>
      <div className="card-container">
        {getState.length === 0 ? (
          <div className="no-record">No Record Found</div>
        ) : (
          <div className="cards-grid">
            {topDonations.map((card) => (
              <div className="card" key={card.id}>
                {card.url ? (
                  <img src={card.url} alt="Img" className="card-image" />
                ) : (
                  <div className="card-image">{card.Name.slice(0, 2)}</div>
                )}
                <div className="card-details">
                  <div className="card-name">{card.Name}</div>
                  <div className="card-money">
                    ${card.salary?.toLocaleString()}
                  </div>
                  <div className="card-index">{card.id}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default UserCard;
