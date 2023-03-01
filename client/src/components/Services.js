import React, { useState } from "react";

function Services() {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [show, setshow] = useState(false);
  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = require("../assets/underweight.png");
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require("../assets/healthy.png");
    } else {
      imgSrc = require("../assets/overweight.png");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <h1 className="serv-services">Our Services</h1>
        <p className="serv-p">
          <span>Home</span>
          <span>Trainer</span>
        </p>
      </section>
      <section className="bmu">
        <div className="app-bmu">
          <div className="container-bmu">
            <h2 className="center-bmu">BMI Calculator</h2>
            <form onSubmit={calcBmi}>
              <div>
                <label>Weight (lbs)</label>
                <input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label>Height (in)</label>
                <input
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                />
              </div>
              <div>
                <button
                  className="btn-bmu"
                  type="submit"
                  onClick={() => setshow(!show)}
                >
                  Submit
                </button>
                <button
                  className="btn-bmu btn-outline"
                  onClick={reload}
                  type="submit"
                >
                  Reload
                </button>
              </div>
            </form>

            <div className="center-bmu">
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </div>

            <div className="img-container">
              <img src={imgSrc} alt=""></img>
            </div>
          </div>
        </div>
        {show ? (
          <div className="result">
            <div
              className="blog-entry blog-entry-2 justify-content-center d-md-flex w-100"
              style={{ marginTop: "20px" }}
            >
              <a
                href="blog-single.html"
                className="block-20"
                style={{
                  borderRadius: "50%",
                  backgroundImage:
                    'url("data:image/jpeg;base64,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")',
                }}
              ></a>
              <div className="text pl-md-4 ml-md-2 ">
                <div className="meta">
                  <div>
                    <a href="#">De Sept. 28, 2019 à Sept. 28, 2019</a>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <a href="#">Régime alimentaire</a>
                </h3>
                <p>
                  Un bon régime alimentaire est un régime varié, équilibré et
                  sain.
                </p>
              </div>
            </div>
            <div className="blog-entry blog-entry-2 justify-content-center d-md-flex w-100">
              <a
                href="blog-single.html"
                className="block-20"
                style={{
                  borderRadius: "50%",
                  backgroundImage:
                    'url("https://www.pourquoidocteur.fr/media/article/COPY_istock-1198638574-1606664356.jpg")',
                  borderRadius: "50%",
                }}
              ></a>
              <div className="text pl-md-4 ml-md-2 ">
                <h3 className="heading mt-2">
                  <a href="#">Exercices Physiques</a>
                </h3>
                <p>
                  Un bon régime alimentaire est un régime varié, équilibré et
                  sain.{" "}
                </p>
              </div>
            </div>
            <div className="blog-entry blog-entry-2 justify-content-center d-md-flex w-100">
              <a
                href="blog-single.html"
                className="block-20"
                style={{
                  borderRadius: "50%",
                  backgroundImage:
                    'url("https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_481085332.jpg")',
                }}
              ></a>
              <div className="text pl-md-4 ml-md-2 ">
                <h3 className="heading mt-2">
                  <a href="#">Suivi d'un Coach</a>
                </h3>
                <p>
                  Un bon régime alimentaire est un régime varié, équilibré et
                  sain.{" "}
                </p>
              </div>
            </div>
            <div className="blog-entry blog-entry-2 justify-content-center d-md-flex w-100">
              <a
                href="blog-single.html"
                className="block-20"
                style={{
                  borderRadius: "50%",
                  backgroundImage:
                    'url("https://demarchesadministratives.fr/images/actualites/2703/une-consultation-medicale-gratuite-pour-les-personnes-a-risque-face-au-covid-19-1.jpg")',
                }}
              ></a>
              <div className="text pl-md-4 ml-md-2 ">
                <h3 className="heading mt-2">
                  <a href="#">Suivi d'un Docteur</a>
                </h3>
                <p>
                  Un bon régime alimentaire est un régime varié, équilibré et
                  sain.{" "}
                </p>

                <p>
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    style={{ backgroundColor: "pink", color: "white" }}
                  >
                    Subscribe
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="result2">
            <img src="images/image_4.jpg" style={{ marginTop: "312px" }} />
            {/* <div
              style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
              data-stellar-background-ratio="0.5"
            ></div> */}
          </div>
        )}
      </section>
    </div>
  );
}

export default Services;
