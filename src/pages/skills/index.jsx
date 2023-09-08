import React from "react";
import Layout from "../../components/layout/Layout";

export default function Skills() {
  return (
    <Layout>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills__container grid">
          <div>
            <h2 className="skills__subtitle">Profesional Skills</h2>
            <p className="skills__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias
              architecto consectetur error eum eaque sit.
            </p>
            <div className="skills__data">
              <div className="skills__names">
                <img src="/images/file-html-fill.svg" alt="" />
                <span className="skills__name">HTML5</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img src="/images/file-css-fill.svg" alt="" />
                <span className="skills__name">CSS3</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">93%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img src="/images/file-js-fill.svg" alt="" />
                <span className="skills__name">JAVASCRIPT</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">95%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img src="/images/pen-fill.svg" alt="" />
                <span className="skills__name">UI</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/skill.jpg" alt="" className="skills__img" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
