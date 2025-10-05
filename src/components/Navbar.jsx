import React from "react";
import "./navbar.css";
import logo from "/public/img/logo_inap_bonda_black.webp";
import { Button } from "./Button";
import { navigation } from "../constants";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center border-b">
        <nav className="flex items-center justify-between py-4 px-10  w-[100%] max-w-[1440px]">
          {/* Navbar Desktop */}
          <div className="hidden lg:block flex-1 justify-start ">
            <div className="nav-list gap-[2rem]">
              {navigation
                .filter((item) => ["0", "1", "2"].includes(item.id))
                .map((item) => (
                  <a key={item.id} href={item.url} className="nav-item">
                    {item.title}
                  </a>
                ))}
            </div>
          </div>
          {/*Mobile Left button */}
          <div className="flex items-center justify-center lg:hidden">
            <Button text="Tempah" width="160px" />
          </div>
          {/*Nav Logo*/}
          <div className="nav-logo ">
            <img
              src={logo}
              alt="Inap Bonda Rahimah"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className=" gap-[2rem] hidden lg:flex flex-1 justify-end ">
            <div className="nav-list gap-6">
              {navigation
                .filter((item) => ["3", "4"].includes(item.id))
                .map((item) => (
                  <a key={item.id} href={item.url} className="nav-item">
                    {item.title}
                  </a>
                ))}
            </div>
            <Button text="Tempah" width="160px" />
          </div>
          {/*Mobile right button */}
          <div className="flex items-center justify-center lg:hidden">
            <div className="nav-item">Tempah</div>
          </div>
        </nav>
      </div>
    </>
  );
}
