import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LinkButton({ to, value }: { to: string; value: string }) {
  return (
    <Link to={to}>
      <button className="linkButton" type="button">
        {value}
      </button>
    </Link>
  );
}

function Header() {
  const [isShowMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!isShowMenu);
  };
  return (
    <div className="container">
      <section className="header">
        <h1>CodeQuiz</h1>
        <button type="button" onClick={handleClick}>-</button>
      </section>
      <article className={`navContainer ${isShowMenu ? '' : 'hidden'}`}>
        <LinkButton to="/" value="Home" />
        <LinkButton to="/play" value="Play" />
        <LinkButton to="/login" value="Login" />
        <LinkButton to="/register" value="Register" />
      </article>
    </div>
  );
}

export default Header;
