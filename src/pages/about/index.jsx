import React from "react";
import Layout from "../../components/layout/Layout";


export default function About() {
  return (
    <Layout>
      <section className="about section " id="about">
        <div className="about__container grid">
          <div className="about__img">
            <img src="/images/man.png" alt="" />
          </div>
          <div>
            <h2 className="about__subtitle">the best frontend devs</h2>
            <p className="about__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa
              tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque
              perferendis! Recusandae alias accusamus atque.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
