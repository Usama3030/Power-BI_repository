import { useContext } from "react";
import "./style.css";
import { Context } from "../Context/Context";
import userImg from "../../../assets/Ellipse 32.svg";

const UserCard = () => {
  const context = useContext(Context);
  console.log("card-context", context);
  const { getState } = context;
  console.log("getState", getState);

  const numberOfTopDonations = 10;

  const sortedCardData = [...getState].sort((a, b) => b.salary - a.salary);

  const topDonations = sortedCardData.slice(0, numberOfTopDonations);

  console.log(topDonations);

  const getInitials = (name: string) => {
    const nameParts = name.trim().split(" ");
    if (nameParts.length === 1) {
      return nameParts[0].slice(0, 2).toUpperCase();
    }
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  };

  return (
    // <div className="container">
    <div className="card-wrapper">
      <div className="card-heading">
        <h3>
          TOP <span style={{ color: "#FBC406" }}>{numberOfTopDonations} </span>
          DONATIONS BOARD
        </h3>
      </div>
      <div className="card-container">
        {getState.length === 0 ? (
          <div className="no-record">No Record Found</div>
        ) : (
          <div className="cards-grid">
            {topDonations.map((card, index) => (
              <div className="card" key={card.id}>
                {card.url ? (
                  <img
                    src={card.url}
                    alt={getInitials(card.name)}
                    className="card-image"
                  />
                ) : (
                  // <div className="card-image">{card.name.slice(0, 2)}</div>
                  <div className="card-image">{getInitials(card.name)}</div>
                )}
                <div className="card-details">
                  <div className="card-name">{card.name}</div>
                  <div className="card-money">
                    ${card.salary?.toLocaleString()}
                  </div>
                  <div className="card-index">{index + 1}</div>
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
