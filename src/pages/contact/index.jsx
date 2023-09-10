import React from "react";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";

export default function Contact() {
  const slideLeftEffect = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <Layout>
      <motion.section
        className="section contact"
        variants={slideLeftEffect}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="contact__container grid">
          <form action="" className="contact__form">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="mail" placeholder="Email" className="contact__input" />
            <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
            <input type="button" value="Send" className="contact__button button" />
          </form>
        </div>
      </motion.section>
    </Layout>
  );
}
