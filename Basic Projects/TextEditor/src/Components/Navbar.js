import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: "black",
  // });

  // const [btnText, setText] = useState("Light Mode");

  // const toggleStyle = () => {
  //   if (myStyle.backgroundColor === "black") {
  //     setMyStyle({
  //       backgroundColor: "white",
  //     });
  //     setText("Dark Mode");
  //   } else {
  //     setMyStyle({
  //       backgroundColor: "black",
  //     });
  //     setText("Light Mode");
  //   }
  // };

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {props.option1}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/textEditor">
              Editor
            </Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/" onClick={toggleStyle}>
              {btnText}
            </a>
          </li> */}
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.ProTypes = {
  title: PropTypes.string.isRequired,
  option1: PropTypes.string,
};

// default props if not passed
Navbar.defaultProps = { title: "Set title here" };
