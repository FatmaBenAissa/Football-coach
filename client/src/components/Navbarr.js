import React from "react";
import {
  Dropdown,
  ButtonGroup,
  NavDropdown,
  Nav,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";

function Navbarr() {
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      {user ? (
        <div className="smallnav">
          <p>Welcome {user?.name}</p>
          <li style={{ marginTop: 20, listStyle: "none" }}>
            <Dropdown as={ButtonGroup}>
              <img
                style={{
                  backgroundSize: "32px 32px",
                  borderRadius: "21%",
                  height: "54px",
                  width: "55px",
                  marginRight: "2px",
                }}
                src={user?.img}
                // src="https://avatars.githubusercontent.com/u/114486214?v=4"
                alt=""
                aria-hidden="true"
                data-noaft=""
              />

              <Dropdown.Toggle
                split
                variant="light"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item>
                  {" "}
                  <Link to="/profil">
                    <svg
                      style={{ marginRight: 8 }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-gear-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                    Mon compte
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    {" "}
                    <svg
                      style={{ marginRight: 8 }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-box-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                      />
                    </svg>{" "}
                    Déconnexion
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </div>
      ) : null}
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <div className="row m-auto">
            <div className="col-12 w-100 text-center">
              <a className="navbar-brand2 w-100" href="index.html">
                Mon Coach
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="oi oi-menu" /> Menu
              </button>
            </div>
            <div className="col-12 w-100 text-center">
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item active">
                    <a href="" className="nav-link">
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Home
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <Link
                        to="/about"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        About
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <Link
                        to="/services"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Services
                      </Link>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <Link
                        to="/shop"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Shop
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <Link
                        to="/contact"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Contact
                      </Link>
                    </a>
                  </li>
                  {/* user subscribed */}
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <Link
                        to="/schedule"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Schedule
                      </Link>
                    </a>
                  </li>

                  {user ? (
                    <li className="nav-item">
                      <a href="">
                        <Link
                          to="/pannier"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Shopping_Cart_Flat_Icon_Vector.svg/1200px-Shopping_Cart_Flat_Icon_Vector.svg.png"
                            width="50"
                            height="50"
                            style={{ marginTop: "15px", marginRight: "15px" }}
                          ></img>
                        </Link>
                      </a>
                    </li>
                  ) : (
                    <div className="smallnav">
                      <Link to="/login">
                        <svg
                          style={{
                            width: "25px",
                            height: "25px",
                            marginTop: "29px",
                          }}
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="right-to-bracket"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="initial-icon svg-inline--fa fa-right-to-bracket fa-xl"
                        >
                          <path
                            fill="currentColor"
                            d="M192 365.8L302 256 192 146.2l0 53.8c0 13.3-10.7 24-24 24L48 224l0 64 120 0c13.3 0 24 10.7 24 24l0 53.8zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6c-25.6 0-46.4-20.8-46.4-46.4l0-33.6-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l96 0 0-33.6c0-25.6 20.8-46.4 46.4-46.4c12.3 0 24.1 4.9 32.8 13.6L339.3 225.4c8.1 8.1 12.7 19.1 12.7 30.6zm-8 176l80 0c22.1 0 40-17.9 40-40l0-272c0-22.1-17.9-40-40-40l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                            class=""
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  )}
                  {user ? (
                    <Link
                      to="/dashbord"
                      style={{ marginTop: "15px", marginRight: "15px" }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/263/263074.png"
                        width="30"
                        height={30}
                        style={{ marginTop: "8px" }}
                      />
                    </Link>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarr;
