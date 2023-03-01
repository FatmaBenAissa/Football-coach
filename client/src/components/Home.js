import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "3d-react-carousal";

function Home() {
  let slides = [
    <img src="images/555.jpg" alt="1" width="800" height="400" />,
    <img src="images/111.jpg" alt="2" width="800" height="400" />,
    <img src="images/222.jpg" alt="3" width="800" height="400" />,
    <img src="images/333.jpg" alt="4" width="800" height="400" />,
    <img src="images/444.jpg" alt="5" width="800" height="400" />,
  ];
  return (
    <div>
      {/* carousel */}
      <section>
        <Carousel slides={slides} autoplay={true} interval={5000} />
        <div className="caption_carousel">
          <h3 className="mb-4">Tout se passe dans votre zone de confort</h3>
        </div>
      </section>
      {/* services */}

      <section className="services">
        <div className="header">
          <h2>Services</h2>
        </div>
        <div className="service">
          <div>
            <img src="images/regime alimentaire.jpg" />
            <h3 class="mb-4">Regime Alimentaire</h3>
          </div>
          <div>
            <img src="images/exercice physique.jpg" />
            <h3 class="mb-4">Exercices Physiques</h3>
          </div>
          <div>
            <img src="images/Suivi d'un Coach.jpg" />
            <h3 class="mb-4">Suivi d'un Coach</h3>
          </div>
          <div>
            <img src="images/Docteur.jpg" />
            <h3 class="mb-4">Suivi d'un Docteur</h3>
          </div>
        </div>
      </section>
      {/* importance */}
      <section className="importance">
        <div className="header">
          <h2>l'expérience de notre programme</h2>
        </div>
        <div className="bigbox">
          <div className="box1">
            <span className="b1">
              <h3>Balance Body &amp; Mind</h3>
              <div className="icon d-flex justify-content-center align-items-center order-md-last">
                <span className="flaticon-meditation"></span>
              </div>
            </span>
            <span className="b1">
              <h3 style={{ marginRight: "35px" }}>Healthy Daily Life </h3>
              <div className="icon d-flex justify-content-center align-items-center order-md-last">
                <span className="flaticon-meditation"></span>
              </div>
            </span>
            <span className="b1">
              <h3 style={{ width: "234px" }}>Improves your flexibility</h3>
              <div className="icon d-flex justify-content-center align-items-center order-md-last">
                <span className="flaticon-meditation"></span>
              </div>
            </span>
            <span className="b1">
              <h3 style={{ marginRight: "20px" }}>Protects your spine</h3>
              <div className="icon d-flex justify-content-center align-items-center order-md-last">
                <span className="flaticon-meditation"></span>
              </div>
            </span>
          </div>
          <div className="col-md-4 d-flex">
            <div
              className="img img-services w-100"
              style={{ backgroundImage: "url(images/bg_1.jpg)" }}
            ></div>
          </div>
          <div className="box3">
            <span className="b1">
              <div class="icon d-flex justify-content-center align-items-center\">
                <span class="flaticon-meditation"></span>
              </div>
              <div class="text text-left pl-4">
                <h3>Betters your bone health</h3>
              </div>
            </span>
            <span className="b1">
              <div
                style={{ marginRight: " -11px" }}
                class="icon d-flex justify-content-center align-items-center\"
              >
                <span class="flaticon-meditation"></span>
              </div>
              <div class="text text-left pl-4">
                <h3>Increases your blood flow</h3>
              </div>
            </span>
            <span className="b1">
              <div
                style={{ marginRight: " 9px" }}
                class="icon d-flex justify-content-center align-items-center\"
              >
                <span class="flaticon-meditation"></span>
              </div>
              <div class="text text-left pl-4">
                <h3>Keep a practice journal</h3>
              </div>
            </span>
            <span className="b1">
              <div class="icon d-flex justify-content-center align-items-center\">
                <span class="flaticon-meditation"></span>
              </div>
              <div class="text text-left pl-4">
                <h3>Builds muscle strength</h3>
              </div>
            </span>
          </div>
        </div>
      </section>

      {/* about us */}
      <section className="about">
        <img src="https://images01.nicepage.com/7e/4b/7e4b59e75d01eab8becee0e2a836b6ab.png" />
        <div className="abt header">
          <h2>L'Importance du Sport pour le bien-être</h2>
          <p className="u-text u-text-2">
            Si le sport sur ordonnance est entré dans la loi française, ce n’est
            pas pour rien. Le sport présente réellement des bénéfices pour notre
            santé. Ces bénéfices sont autant physiques que mentaux. Le sport ne
            permet pas uniquement de perdre du poids mais aussi par exemple de
            récupérer une certaine mobilité articulaire ou encore de
            l’autonomie.
          </p>
          <a href="#" className="btn">
            join today
          </a>
        </div>
      </section>

      {/* who we are */}
      <section className="whoweare">
        <div className="abt header">
          <h2>l'Importance de Nourriture Saine</h2>
          <p className="u-text u-text-2">
            Des habitudes alimentaires saines commencent dès le plus jeune âge :
            l’allaitement au sein favorise une croissance en bonne santé et
            améliore le développement cognitif. Il pourrait aussi avoir des
            bénéfices à long terme, par exemple une réduction du risque de
            surpoids, d’obésité ou de maladies non transmissibles au cours de la
            vie.
          </p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
        <img src="https://images01.nicepage.com/ad/81/ad815d915b24bdd1faad0edabb816315.jpeg" />
      </section>
      {/* Where We’ve Been */}
      <section className="about">
        <img src="https://images01.nicepage.com/95/e6/95e669bd78785ce060e641faa3dbca65.jpeg" />
        <div className="abt header">
          <h2>Pourquoi nous ?</h2>
          <p className="u-text u-text-2">
            C'est une question qui se pose à la majorité de nos clients. Tout
            simplement nous vous donnent un programme d’entrainement bien précis
            selon votre but et selon l’état et les besoins de votre corps. Tout
            ça en un seul clic chez vous, c’est-à-dire vous allez trouver un
            coach privé quand et où vous voulez autre m’a dit c’est vous qui
            gérez le temps et l’espace d’entrainement. Vous avez trouvé aussi
            des images et vidéos expliquent chaque exercice.
          </p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
      </section>
      {/* gallery */}
      <section className="gallery">
        <div className="tg">
          <h2 className="mb-1 header">See the latest photos</h2>
        </div>
        <div className="body">
          <div className="wrapper">
            <img
              className="imgg"
              src="images/gal1.jpg"
              alt=""
            />
            <img
              className="imgg"
              src="images/gal2.jpg"
              alt=""
            />
            <img
              className="imgg"
              src="images/gal3.jpg"
              alt=""
            />
            <img
              className="imgg"
              src="images/gal4.jpg"
              alt=""
            />
            <img
              className="imgg"
              src="images/gal5.jpg"
              alt=""
            />
            <img
              className="imgg"
              src="images/gal6.jpg"
              alt=""
            />
            <img
              className="imgg"
              src="images/gal7.jpg"
              alt=""
            />
            <img
              className="imgg"
              src="images/gal8.jpg"
              alt=""
            />
            <img
              className="imgg"
              src="images/gal9.jpg"
              alt=""
            />
            <img
              className="imgg"
              src="images/gal10.jpg"
              alt=""
            />
          </div>
        </div>{" "}
      </section>
    </div>
  );
}

export default Home;
