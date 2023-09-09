import React from "react";
import Layout from "../../components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="section contact">
        <div className="contact__container grid">
          <form action="" className="contact__form">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="mail" placeholder="Email" className="contact__input" />
            <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
            <input type="button" value="Send" className="contact__button button" />
          </form>
        </div>
      </section>
    </Layout>
  );
}
