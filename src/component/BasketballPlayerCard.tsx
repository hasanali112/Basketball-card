import "../BasketballPlayerCard.css";

type TProps = {
  name: string;
  image: string;
  position: string;
  stats?: {
    pointsPerGame: number;
    assistsPerGame: number;
    reboundsPerGame: number;
  };
};

const BasketballPlayerCard = ({ name, image, position, stats }: TProps) => {
  return (
    <div className="card-parent">
      <div className="card">
        <div>
          <img src={image} alt="" className="card-image" />
        </div>
        <div>
          <h1 className="card-title">{name}</h1>
          <p className="card-subtitle">Position : {position}</p>
          <div className="stats">
            <h1 className="stats-title">Total Stats </h1>
            <h1 className="stats-title1">
              Point Per Game : {stats?.pointsPerGame}
            </h1>
            <h1 className="stats-title2">
              Assists Per Game : {stats?.assistsPerGame}
            </h1>
            <h1 className="stats-title3">
              Rebounds Per Game : {stats?.reboundsPerGame}
            </h1>
          </div>
        </div>
      </div>
      <div className="card-child"></div>
      <div className="card-child1"></div>
    </div>
  );
};

export default BasketballPlayerCard;
