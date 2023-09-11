import React, { useRef } from "react";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const form = useRef();

  const slideLeftEffect = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  };

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      reset();
    } catch (error) {
      console.log(error);
    }
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
          <form ref={form} className="contact__form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              className={`${!errors.name ? "contact__input mar-bott" : "contact__input"}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="errorMsg">{`${errors.name.message}`}</p>}
            <input
              type="email"
              placeholder="Email"
              className={`${!errors.email ? "contact__input mar-bott" : "contact__input"}`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="errorMsg">{`${errors.email.message}`}</p>}
            <textarea
              name=""
              id=""
              cols="0"
              rows="10"
              className={`${!errors.message ? "contact__input mar-bott" : "contact__input"}`}
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && <p className="errorMsg">{`${errors.message.message}`}</p>}
            <button
              type="submit"
              className={`contact__button button ${isSubmitting ? "disabledOwn" : ""}`}
              disabled={isSubmitting}
            >
              Send
            </button>
          </form>
        </div>
      </motion.section>
    </Layout>
  );
}
