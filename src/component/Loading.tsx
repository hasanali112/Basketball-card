import "@/BasketballPlayerCard.css";
import logo from "@/assets/basketball.png";

const Loading = () => {
  return (
    <div className="main">
      <div className="loading">
        <div className="glass"></div>
        <div className="box">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
