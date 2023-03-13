import { Fragment } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.footerBox}>
        <section className="container-fluid p-0 m-0">
          <div className="d-flex align-items-center">
            <div className="col-2">
              <img
                className={classes.logoBox}
                src="/images/Logo.png"
                alt="Logo"
              ></img>
            </div>
            <div className="col-4">
              <h1>New</h1>
              <h1>Path</h1>
              <h1>Health</h1>
            </div>
            <div className="col-6">
              <div className={classes.contactBox}>
                Contact
                <p className={classes.contactInfo}>123456789</p>
              </div>
              <div className={classes.contactBox}>
                Address
                <p className={classes.contactInfo}>
                  950 Adams Road Massapequa Park, NY 11762
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Footer;
