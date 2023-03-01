import React from "react";

function Footer() {
  return (
    <div style={{ marginTop: "435px" }}>
      {" "}
      <footer className="ftco-footer ftco-section bg-light">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Mon Coach</h2>
                <p>
                  Tous les exercices et les régimes alimentaires que vous allez trouver sont variées et très motivantes.
                </p>
                <ul className="ftco-footer-social list-unstyled float-lft mt-3">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Liens Populaires</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Sports for Beginners</a>
                  </li>
                  <li>
                    <a href="#">Sports for Pregnant</a>
                  </li>
                  <li>
                    <a href="#">Sports Barre</a>
                  </li>
                  <li>
                    <a href="#">Sports Advance</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Liens Rapides</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Vous avez des questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker" />
                      <span className="text">
                        Go My Code , thanks for Fatma and Talel
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone" />
                        <span className="text">+216 53 880 233</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope" />
                        <span className="text">zattalzattal7@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved {" "}
                <i className="icon-heart" aria-hidden="true" />
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
