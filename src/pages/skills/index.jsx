import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import ProgressBar from "../../components/progress-bar/ProgressBar";

export default function Skills() {
  const [progressBarValue, setProgressBarValue] = useState([
    {
      id: "html",
      title:"HTML5",
      percent: 0,
      targetPercent: 85,
      img: "/images/file-html-fill.svg",
    },
    {
      id: "css",
      title:"CSS3",
      percent: 0,
      targetPercent: 93,
      img: "/images/file-css-fill.svg",
    },
    {
      id: "js",
      title:"JavaScript",
      percent: 0,
      targetPercent: 95,
      img: "/images/file-js-fill.svg",
    },
    {
      id: "ui",
      title:"UI",
      percent: 0,
      targetPercent: 90,
      img: "/images/pen-fill.svg",
    },
  ]);
  useEffect(() => {
    const intervals = progressBarValue.map((pbv) => {
      return setInterval(() => {
        if (pbv.percent < pbv.targetPercent) {
          setProgressBarValue((prevValues) =>
            prevValues.map((pv) => (pv.id === pbv.id ? { ...pv, percent: pv.percent + 1 } : pv))
          );
        }
      });
    }, 100);
    return () => {
      intervals.forEach((int) => clearInterval(int));
    };
  }, [progressBarValue]);

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
            {progressBarValue.map((progressBar) => (
              <ProgressBar key={progressBar.id} {...progressBar} />
            ))}
          </div>
          <div>
            <img src="/images/skill.jpg" alt="" className="skills__img" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
