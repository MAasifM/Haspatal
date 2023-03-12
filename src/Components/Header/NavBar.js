import classes from "./NavBar.module.css";
import NavigationLink from "./NavigationLink/NavigationLink";

const NavBar = () => {
  return (
    <div className={classes.navBar}>
      <nav class="navbar navbar-expand-lg p-0 m-0">
        <div class="container-fluid p-0 m-0">
          <a href="http://localhost:3000/">
            <img
              className={classes.Logo}
              src="/images/Logo.png"
              alt="Logo"
            ></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <NavigationLink
              innerText="Services"
              toLink="/services"
            ></NavigationLink>
            <NavigationLink
              innerText="Contact Us"
              toLink="/contact"
            ></NavigationLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
