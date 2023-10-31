import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Travels and Tales</h1>
          <p>Search your favourite destinations</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>project</h3>
          <a href="/">a</a>
          <a href="/">b</a>
          <a href="/">c</a>
        </div>
        <div>
          <h3>comunity</h3>
          <a href="/">d</a>
          <a href="/">e</a>
          <a href="/">f</a>
        </div>
        <div>
          <h3>help</h3>
          <a href="/">g</a>
          <a href="/">h</a>
          <a href="/">i</a>
        </div>
        <div>
          <h3>others</h3>
          <a href="/">j</a>
          <a href="/">k</a>
          <a href="/">l</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
