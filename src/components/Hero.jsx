import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./Button";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "center start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <>
      <div className="main-container" ref={container}>
        <div className="custom-container relative">
          <div className="flex flex-col items-center gap-2 self-stretch relative z-10">
            <div className="font-noto-serif uppercase text-xl text-center relative">
              Selamat datang ke Inap Bonda Rahimah Homestay
            </div>
            <div className="display-font text-[clamp(3rem,10vw,6rem)] relative">
              Di sini kita kumpul, <br />
              di sini kita kenang
            </div>
          </div>
          <motion.div className="img-container relative" style={{ y: imageY }}>
            <img src="public/img/image 1.png" alt="Hero" className="img" />
          </motion.div>
          <Button text="Tempah Sekarang" />
        </div>
      </div>
    </>
  );
}
