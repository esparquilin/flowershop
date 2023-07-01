import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={classes.navBar}>
      <div className={classes.links}>
        <p>Home</p>
        <p>About us</p>
      </div>
      <div>Logo</div>
      <div className={classes.links}>
        <p>Contact us</p>
        <p>Cart</p>
      </div>
    </nav>
  );
}

export default NavBar;
