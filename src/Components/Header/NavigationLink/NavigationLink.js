import { NavLink } from "react-router-dom";
import classes from "./NavigationLink.module.css";

const NavigationLink = (props) => {
  return (
    <div className={classes.Link}>
      <NavLink
        to={props.toLink}
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.boardLink
        }
        end
      >
        {props.innerText}
      </NavLink>
    </div>
  );
};

export default NavigationLink;
