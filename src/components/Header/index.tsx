import './style.css';
import { Link } from 'react-router-dom';

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
  return (
    <div className="container">
      <h1>CodeQuiz</h1>
      <div className="navContainer">
        <LinkButton to="/" value="Home" />
        <LinkButton to="/play" value="Play" />
        <LinkButton to="/login" value="Login" />
        <LinkButton to="/register" value="Register" />
      </div>
    </div>
  );
}

export default Header;
