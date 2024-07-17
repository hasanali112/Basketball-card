import "@/BasketballPlayerCard.css";
import navImage from "@/assets/basketball.png";

const Navbar = () => {
  return (
    <header className="navbar fixed top-0 w-full z-20">
      <nav className="nav-child">
        <div className="nav-parent">
          <img src={navImage} alt="" className="nav-image" />
          <div className="logo-container">
            <h1 className="logo-name">BasketBall</h1>
            <h1 className="animate-name">BasketBall</h1>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
