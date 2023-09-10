import React, { useEffect, useState, useCallback } from "react";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";

export default function Work() {
  const rotate = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
    exit: { rotate: 0 },
  };

  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  const loadImages = useCallback(() => {
    const imagesToLoad = [
      "//unsplash.it/1910",
      "//unsplash.it/1400",
      "//unsplash.it/1200",
      "//unsplash.it/1810",
      "//unsplash.it/1650",
      "//unsplash.it/1710",
    ];

    const loadedImages = [];
    const promises = [];

    imagesToLoad.forEach((imgSrc) => {
      const imgPromise = new Promise((resolve) => {
        const img = new Image();
        img.src = imgSrc;
        img.onload = () => {
          loadedImages.push(imgSrc);
          resolve();
        };
      });
      promises.push(imgPromise);
    });

    Promise.all(promises).then(() => {
      setImages(loadedImages);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const dummyInc = () => {
    let dummyid = 0;
    return () => {
      dummyid++;
      return dummyid;
    };
  };

  const dummyIDForKey = dummyInc();

  return (
    <Layout>
      {isLoading && <div className="skeleton-loader"></div>}
      <motion.section
        className="section work"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360, transition: { delay: 1.3 } }}
        exit={{ rotate: 0 }}
      >
        <div className="work__container grid">
          {images.map((img) => (
            <div className="work__img" key={dummyIDForKey()}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </motion.section>
    </Layout>
  );
}
