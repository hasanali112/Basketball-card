import BasketballPlayerCard from "./BasketballPlayerCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./../BasketballPlayerCard.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoading = () => {
      setInterval(() => {
        setLoading(false);
      }, 4000);
    };
    fetchLoading();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="home">
      <Navbar />
      <div className="home-child">
        <BasketballPlayerCard
          name="LeBron James"
          image="https://img.freepik.com/free-photo/happy-young-african-american-street-basketball-player-camouflage-jacket-isolated-dark-background_613910-19521.jpg?t=st=1721233342~exp=1721236942~hmac=c7dc3d9defa686fffc62d52426d15c0a8a58c55d7e1bc0477b731b99258060da&w=740"
          position="Forward"
          stats={{
            pointsPerGame: 25.4,
            assistsPerGame: 7.1,
            reboundsPerGame: 10.5,
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
