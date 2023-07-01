import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <h2>Floreria</h2>
      <p>Todos los derechos reservados</p>
      <div>redes sociales (linkedin, twiter, github)</div>
    </footer>
  );
}

export default Footer;
