import React from "react";
import Layout from "../components/layout/Layout";
import imagesPath from "../images/images";
import { Link } from "gatsby";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="section home grid">
          <div className="home__data">
            <h1 className="home__title">
              Trust
              <br />
              the best
              <br /> <span className="home__title-color">Frontend Developer</span>
            </h1>

            <Link to="/contact" className="button">
              Contact
            </Link>
          </div>

          <div class="home__social">
            <Link to="/" className="home__social-icon">
              <img src={imagesPath.linkedin} alt="" />
            </Link>
            <Link to="/" className="home__social-icon">
              <img src={imagesPath.twitter} alt="" />
            </Link>
            <Link to="/" className="home__social-icon">
              <img src={imagesPath.youtube} alt="" />
            </Link>
          </div>

          <div className="home__img">
            <svg
              classname="home__blob"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                <image class="home__blob-img" x="50" y="60" href={imagesPath.man} />
              </g>
            </svg>
          </div>
        </section>
      </Layout>
    </>
  );
}
