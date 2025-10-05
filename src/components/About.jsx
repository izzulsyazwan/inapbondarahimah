import React from "react";
import houseimg from "/public/img/inap_bonda_house.webp";
import { Button } from "./Button";
import { ImageSlider } from "./ImageSlider";
import image1 from "/public/img/image-2.png";
import image2 from "/public/img/image-2.png";
import image3 from "/public/img/image-2.png";
import image4 from "/public/img/image-2.png";
import image5 from "/public/img/image-2.png";
import image6 from "/public/img/image-2.png";
import image7 from "/public/img/image-2.png";

const IMAGES = [image1, image2, image3, image4, image5, image6, image7];

export default function About() {
  return (
    <>
      <div className="main-container ">
        <div className="relative w-full max-w-[1440px] overflow-hidden px-5">
          {/* Collage wrapper */}
          <div className="relative w-full aspect-[1/1] hidden md:block">
            {/* Image 1 */}
            <div
              className="absolute top-[2%] left-[5%] w-[18%] aspect-[3/4] bg-center bg-cover bg-no-repeat origin-center rotate-[8deg] transform-gpu"
              style={{ backgroundImage: `url(${image1})` }}
            ></div>
            {/* Image 2 */}
            <div
              className="absolute top-[7.667%] left-[75%] w-[16%] aspect-[3/4] bg-center bg-cover origin-center rotate-[-8deg] transform-gpu"
              style={{ backgroundImage: `url(${image2})` }}
            ></div>
            {/* Image 3 */}
            <div
              className="absolute top-[43%] left-[5%] w-[20%] aspect-[4/3] bg-center bg-cover origin-center rotate-[-10deg] transform-gpu"
              style={{ backgroundImage: `url(${image3})` }}
            ></div>
            {/* Image 4 */}
            <div
              className="absolute top-[38%] left-[77%] w-[16%] aspect-[3/4] bg-center bg-cover origin-center rotate-[2deg] transform-gpu"
              style={{ backgroundImage: `url(${image4})` }}
            ></div>
            {/* Image 5 */}
            <div
              className="absolute top-[70%] left-[70%] w-[20%] aspect-[4/3] bg-center bg-cover origin-center rotate-[-8deg] transform-gpu"
              style={{ backgroundImage: `url(${image5})` }}
            ></div>
            {/* Image 6 */}
            <div
              className="absolute top-[70%] left-[15%] w-[16%] aspect-[3/4] bg-center bg-cover origin-center rotate-[-8deg] transform-gpu"
              style={{ backgroundImage: `url(${image6})` }}
            ></div>
            {/* Image 7 */}
            <div
              className="absolute top-[60%] left-[40%] w-[22%] aspect-[4/3] bg-center bg-cover origin-center rotate-[4deg] transform-gpu hidden lg:block"
              style={{ backgroundImage: `url(${image7})` }}
            ></div>
          </div>
          {/* Header content*/}
          <div className="relative md:absolute left-1/2 top-1 -translate-x-1/2 mt-5 z-20 flex flex-col items-center gap-[2rem] w-[100%] md:w-[320px] lg:w-[460px] mb-10">
            <img
              src="/public/img/inap_bonda_house.webp"
              alt="Inap Bonda House"
              className="w-[70%] md:w-[30vw] h-auto"
            />
            <div className="flex flex-col justify-center items-center gap-[2rem] self-stretch">
              <h2 className="h2">Sejak 1984</h2>
              <p className="text-center font-noto-serif">
                Originally opened 1860, Stagecoach Inn is a Texas landmark.
                Known by other names in the past – Salado Hotel and Shady Villa
                Hotel – it is as Stagecoach Inn that it is most well-known. As
                the 2nd oldest, continuously running inn or hotel in the state,
                travelers have parked their wagon, horse or vehicle at this
                iconic inn for over 160 years.
              </p>
              <Button text="Lebih Lanjut" />
            </div>
          </div>
          <ImageSlider imageUrls={IMAGES} />
        </div>
      </div>
    </>
  );
}
