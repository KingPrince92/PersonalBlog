import "./Main.css";

const Main = () => {
  console.log(window.innerWidth);
  return (
    <div className="Main">
      <div className="about-box">
        <div className="main-text">
          {" "}
          <p>
            Hello!
            <br />
            My name is Milo Prince, and I've created this page to keep track of
            my progress through the daily
            <a href="https://www.100daysofcode.com/"> #100daysofcoding</a>{" "}
            challenge!
            <br />
            Watch this space for daily updates. Pages and links to completed
            projects, works in progress and other repos will be added as we go.
          </p>
        </div>
      </div>
      <div className="twitter-box">
        <a
          className="twitter-timeline"
          data-width="500"
          data-height="460"
          data-theme="dark"
          href="https://twitter.com/CatsKingPrince?ref_src=twsrc%5Etfw"
        >
          Tweets by CatsKingPrince
        </a>
      </div>
    </div>
  );
};

export default Main;
