import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        Hey there - I'm Milo Prince <i className="fa-solid fa-cat"></i>
      </h1>
      <div className="header-info">
        I'm a Web Developer! | <i className="fa-solid fa-keyboard"></i> :
        <ul className="coding-languages">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript </li>
          <li>TypeScript</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Express</li>
        </ul>
        <p className="socials">
          <a href="https://www.linkedin.com/in/milo-prince/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/KingPrince92">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="mailto:miloprince92@gmail.com">
            <i className="fa-solid fa-square-envelope"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;

// colors to save: 9B5DE5  F15BB5 FEE440 00BBF9 00F5D4
