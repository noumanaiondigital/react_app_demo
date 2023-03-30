import i18next from "i18next";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
function Navbar() {
  const [date, setDate] = useState({
    hour: "",
    minute: "",
    second: "",
    date: "",
    day: "",
    year: "",
  });
  const [scrolledTop, setScrolledTop] = React.useState(false);
  const handleScroll = (e) => {
    if (window.scrollY > 675 && !scrolledTop) {
      setScrolledTop(true);
    } else if (scrolledTop && window.scrollY < 700) {
      setScrolledTop(false);
    }
  };
  const handleTime = () => {
    let timeElapsed = Date.now();
    let date = new Date(timeElapsed);
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    setDate({
      date: date.getUTCDate(),
      day: date.getDay(),
      year: date.getUTCFullYear(),
      hour,
      minute,
      second,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    let timerInterval = setInterval(handleTime, 1000);
    return () => {
      return clearInterval(timerInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <>
      <div className="  tw--transition-all tw--z-10 tw--ease-in-out tw--duration-300  tw--w-full tw--bg-primaryColor  ">


        <div class="container-fluid tw--flex tw--items-center tw--p-4">
          <a class="navbar-brand" href="#">
            <img
              src="/assets/images/logo.png"
              className="tw--w-[220px] tw--ml-3"
              alt=""
            />
          </a>

          <div className="tw--w-full tw--p-3 tw--flex  tw--items-center tw--justify-between">
            <div className="tw--flex tw--space-x-4">
              <span className="tw--h-[35px] tw--cursor-pointer tw--flex tw--justify-center tw--items-center tw--w-[35px] tw--px-2 tw--py-2 tw--border-[2px] tw--border-secondaryLight tw--rounded-full">
                <img
                  src="/assets/images/navimg1.png"
                  className=" tw--h-[24px] tw--object-cover "
                />
              </span>
              <span className="tw--h-[35px] tw--cursor-pointer tw--flex tw--justify-center tw--items-center tw--w-[35px] tw--px-2 tw--py-2  tw--border-[2px] tw--border-secondaryLight tw--rounded-full">
                <img
                  src="/assets/images/navimg2.png"
                  className=" tw--h-[24px] tw--object-cover"
                />
              </span>
            </div>

            <div className="tw--text-secondaryLight">
              {date.hour}:{date.minute}:{date.second}{" "}
              <span className="tw--ml-4">
                {date.date}-{date.day}-{date.year}
              </span>
            </div>
          </div>
          <label htmlFor="dark-toggle" className="tw--flex tw--items-center tw--cursor-pointer">
            <div className="text-white tw--mr-3 tw--ml-4">EN</div>
            <div className="tw--relative">
              <input type="checkbox" onChange={(e) => i18next.changeLanguage(e.target.checked ? "ar" : "en")} name="dark-mode" id="dark-toggle" className="checkbox tw--hidden" />
              <div className="tw--block tw--border-[1px] tw--dark:border-white tw--border-white tw--w-10 tw--h-6 tw--rounded-full" />
              <div className="dot tw--absolute tw--left-1 tw--top-1 dark:bg-white tw--bg-white tw--w-4 tw--h-4 tw--rounded-full tw--transition" />
            </div>
            <div className="text-white tw--ml-3">AR</div>
          </label>


        </div>

      </div>

    </>
  );
}

export default Navbar;
