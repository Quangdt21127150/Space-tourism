import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="left">
          <h1>
            <span>So, you want to travel to</span>Space
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right">
          <button className="explore">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
