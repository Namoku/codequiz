import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './style.module.css';

function LinkButton({ to, value }: { to: string; value: string }) {
  return (
    <Link to={to} className={styles.linkContainer}>
      <button className={styles.linkButton} type="button">
        {value}
      </button>
    </Link>
  );
}

function Header() {
  const [isShowMenu, setShowMenu] = useState<Boolean>(false);
  const handleClick = () => {
    setShowMenu(!isShowMenu);
  };
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>CodeQuiz</h1>
        <button type="button" onClick={handleClick}>
          -
        </button>
      </section>
      <article className={`${styles.navContainer} ${isShowMenu ? '' : styles.hidden}`}>
        <LinkButton to="/" value="Home" />
        <LinkButton to="/play" value="Play" />
        <LinkButton to="/login" value="Login" />
        <LinkButton to="/register" value="Register" />
      </article>
    </div>
  );
}

export default Header;
