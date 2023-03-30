import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { BsMap } from "react-icons/bs";

import { withTranslation } from "react-i18next";
import { useEffect } from "react";
const CardGroup = ({ cards }) => {
  return (
    <>
      <div className="tw--flex tw--w-full tw--justify-center tw--flex-wrap mt-3">
        {cards.map((card, index) => (
          <>
            <div className="p-4 tw--mb-2 tw--cursor-pointer tw--transition-all tw--ease-in-out tw--duration-100 hover:tw--bg-secondaryColor/80 hover:tw--scale-105 tw--text-white tw--rounded-sm  tw--mr-3 tw--bg-secondaryColor">
              {card.title}
            </div>
          </>
        ))}
      </div>
    </>
  );
};
let cards = [
  {
    title: "Apply to the University",
  },
  {
    title: "University Annual work program",
  },
  {
    title: "Academic Publications",
  },
  {
    title: "Academic Calendar for the academic year (2022-2023)",
  },
];
const LatestCard = ({ imgPath, t }) => {
  return (
    <>
      <div className="tw--p-4 tw-mi  tw--relative  tw--rounded-r-lg tw--mr-4   main__Card  tw--bg-primaryColor">
        <span className="tw--text-white tw--font-semibold tw--text-2xl tw--my-2 tw--inline-block">
          {t("speakerPanel")}
        </span>
        <div className="tw--flex tw--justify-between tw--items-center   tw--flex-col ">
          <img
            src={imgPath}
            className=" tw--min-h-[399px] tw--max-h-[399px] tw--mb-3 tw--w-full tw--shadow-md tw--object-cover tw--object-center"
          />
          {/* header */}
          <div className="tw--bg-white/20 tw--w-full h-full tw--rounded-md tw--p-3 tw--text-white">
            <div className="tw--border-b-[1px] tw--border-primaryColor tw--pb-4  tw--mb-3">
              <div className=" hover:tw--underline tw--relative tw--text-3xl  tw--cursor-pointer">
                Dr. Josh Brunty
              </div>
            </div>
            <div className="tw--text-lg">
              Dr. Josh Brunty is an Associate Professor & Director of the Cyber
              Forensics & Security Graduate Program at Marshall University in
              Huntington, West Virginia, USA. Prior to joining Marshall
              University in 2012, he served 7 years as a Digital Forensics
              Examiner, Technical Leader, and Technical Assessor for both the
              United States state and federal government sectors.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AcademicCard = ({ title, imgPath, description }) => {
  return (
    <>
      <div className="tw--mb-8 tw--drop-shadow-lg">
        <span className="tw--bg-secondaryLight tw--p-3 tw--inline-block  tw--text-sm tw--text-white tw--font-semibold">
          {title}
        </span>
        <div className="tw--h-[680px] tw--relative tw--w-full tw--cursor-pointer">
          <img
            src={imgPath}
            className="tw--w-full tw--h-full tw--top-0 tw--absolute  tw--object-cover tw--object-center "
            alt=""
          />
          <div className="carousel-caption  tw--sticky  tw--p-3 md:tw--text-2xl tw--text-xl tw--bg-primaryColor/70">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
const WhyCard = ({ title, description, Icon }) => {
  return (
    <div className="tw--w-[300px] tw--mb-6 tw--flex tw--flex-col tw--items-center tw--space-y-4">
      <span className="tw--border-primaryColor tw--text-primaryColor tw--cursor-pointer tw--transition-all tw--ease-in-out tw--duration-100 hover:tw--bg-primaryColor hover:tw--text-white  tw--w-[100px] tw--h-[100px] tw--flex tw--justify-center tw--items-center tw--border-[2px] tw--rounded-full ">
        <Icon className="tw--text-4xl  " />
      </span>
      <div className="tw--text-primaryColor tw--capitalize tw--text-xl tw--font-semibold">
        {title}
      </div>
      <div className="tw--text-black/40 tw--capitalize tw--text-sm tw--font-semibold">
        {description}
      </div>
    </div>
  );
};
const CounterCard = ({ title, value }) => {
  return (
    <span className="tw--flex  tw--mx-4 tw--flex-col tw--items-center tw--mb-3 tw--text-white tw--pointer-events-none">
      <span className="tw--text-6xl tw--font-bold tw--bg-primaryColor tw--min-w-[150px] tw--min-h-[150px] tw--flex tw--items-center tw--justify-center tw--rounded-full">
        {" "}
        {value}
      </span>
      <span className="tw--opacity-80 tw--text-lg tw--mt-3 tw--text-secondaryColor">
        {title}
      </span>
    </span>
  );
};
function MainContent({ t }) {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = 2023,
      dayMonth = "12/05/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
        setCountDown({
          days: distance < -1 ? 0 : Math.floor(distance / day),
          hours: distance < -1 ? 0 : Math.floor((distance % day) / hour),
          minutes: distance < -1 ? 0 : Math.floor((distance % hour) / minute),
          seconds: distance < -1 ? 0 : Math.floor((distance % minute) / second),
        });
        //do something later when date is reached
        //seconds
      }, 0);
    return () => clearInterval(x);
  }, []);

  return (
    <>
      {/* <EventCards /> */}
      <div className="tw--flex tw--flex-col  tw--w-full px-4 tw--mt-6">
        <div className="tw--flex tw--flex-col-reverse md:tw--flex-row tw--my-4  tw--bg-white tw--p-4  tw--border-[2px] tw--rounded-lg tw--shadow-lg">
          <div className="md:tw--w-[60%]   tw--my-3 tw--w-full">
           
            <div className="tw--text-3xl tw--font-bold tw--text-primaryColor">
              {t("anniversaryConference")} {t("anniversaryConference2")}
            </div>
            <div className="tw--mt-4 tw--text-xl">
              Forensic sciences are a key player in delivering justice in a
              society through resolving crimes. Forensic sciences also improve
              the public trust in the criminal justice system and law. This
              theme signifies our confidence in forensic sciences but also
              indicates that the delivery of forensic sciences needs to be of a
              high quality which can only happen through continuous efforts on
              part of all stake holders.
            </div>
            <div>
              <div className="tw--text-3xl tw--font-semibold tw--my-3">
                6TH ASFSFM 2023 OVERVIEW
              </div>{" "}
              Welcome to the 6th International Conference on Forensic Sciences &
              Forensic medicine 2023 which will take place from the 5th - 7th
              Dec 2023 in Riyadh, Saudi Arabia. We hope the ASFSFM 2023 unites
              forensic scientists and researchers from all over the world, while
              offering many networking and collaboration opportunities. This
              leading conference will provide you with the latest trends and
              challenges in various fields of forensic sciences.
            </div>
          </div>
          <span className="tw--max-h-[350px] tw--my-3 md:tw--max-w-[40%] tw--w-full">
            <img
              src="/assets/images/logo2.jpg"
              className="tw--w-full tw--h-full tw--object-contain"
              alt=""
            />
          </span>
        </div>
        {/* <CardGroup cards={cards} /> */}
        <div className="tw--flex tw--justify-between tw--flex-col-reverse md:tw--flex-row  ">
          <div className="tw--w-full tw--flex md:tw--w-[100%]  tw--flex-col tw--flex-wrap tw--justify-center tw--mr-4 tw--mx-auto">
            {/* STARTING CAROUSEL */}
            <div
              data-bs-ride="carousel"
              id="carouselExampleCaptions"
              className="carousel slide carousel-fade"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <AcademicCard
                    // description={
                    //   "Forensic sciences are a key player in delivering justice in a society through resolving crimes. Forensic sciences also improve the public trust in the criminal justice system and law. This theme signifies our confidence in forensic sciences but also indicates that the delivery of forensic sciences needs to be of a high quality which can only happen through continuous efforts on part of all stake holders."
                    // }
                    description={t("universityInformation")}
                    title={"About University"}
                    imgPath="/assets/images/confimages/1.jpeg"
                  />
                </div>
                <div className="carousel-item">
                  <AcademicCard
                    title={"About University"}
                    // description={
                    //   "Forensic sciences are a key player in delivering justice in a society through resolving crimes. Forensic sciences also improve the public trust in the criminal justice system and law. This theme signifies our confidence in forensic sciences but also indicates that the delivery of forensic sciences needs to be of a high quality which can only happen through continuous efforts on part of all stake holders."
                    // }
                    description={t("universityInformation")}
                    imgPath="/assets/images/confimages/2.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <AcademicCard
                    // description={
                    //   "Forensic sciences are a key player in delivering justice in a society through resolving crimes. Forensic sciences also improve the public trust in the criminal justice system and law. This theme signifies our confidence in forensic sciences but also indicates that the delivery of forensic sciences needs to be of a high quality which can only happen through continuous efforts on part of all stake holders."
                    // }
                    description={t("universityInformation")}
                    title={"About University"}
                    imgPath="/assets/images/confimages/3.jpg"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="tw--w-full tw--mb-6 md:tw--w-[40%] tw--relative tw--mx-auto">
            <div className=" tw--top-4 tw--sticky">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <LatestCard t={t} imgPath="/assets/images/speaker.jpeg" />
                  </div>
                  <div className="carousel-item">
                    <LatestCard t={t} imgPath="/assets/images/2.jpg" />
                  </div>
                  <div className="carousel-item">
                    {" "}
                    <LatestCard t={t} imgPath="/assets/images/3.jpg" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators !tw--static !tw--w-1/2 !tw--bg-primaryColor !tw--mx-auto !tw--mt-4 tw--rounded-lg">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tw--text-center tw--mt-6">
          <div className="tw--text-2xl">
            {t("All Events Topic")}
            <span className=" tw--font-bold tw--text-3xl tw--text-primaryColor">
              {" "}
              {t("Topic")}
            </span>
          </div>
          <span className="tw--text-black/40 tw--my-10 tw--inline-block">
            {t("OurDigital")}
          </span>
          <div className="tw--flex tw--justify-around tw--flex-wrap">
            <WhyCard
              Icon={AiOutlineCalendar}
              title={t("MultipleEvents")}
              description="   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque animi doloribus eos, aliquid ut architecto delectus. Aperiam maxime amet accusantium ipsum temporibus illum cumque dolore, labore, fugiat dolorum excepturi vel."
            />
            <WhyCard
              Icon={BsPencil}
              title={t("EventManagement")}
              description="   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque animi doloribus eos, aliquid ut architecto delectus. Aperiam maxime amet accusantium ipsum temporibus illum cumque dolore, labore, fugiat dolorum excepturi vel."
            />
            {/* <WhyCard
              Icon={MdOutlinePayment}
              title="payment gateways"
              description="   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque animi doloribus eos, aliquid ut architecto delectus. Aperiam maxime amet accusantium ipsum temporibus illum cumque dolore, labore, fugiat dolorum excepturi vel."
            /> */}
            <WhyCard
              Icon={BsMap}
              title="venue management"
              description="   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque animi doloribus eos, aliquid ut architecto delectus. Aperiam maxime amet accusantium ipsum temporibus illum cumque dolore, labore, fugiat dolorum excepturi vel."
            />
          </div>
        </div>
        <div className="tw--flex tw--flex-col tw--items-center">
          <span className="tw--mb-6  tw--font-bold tw--text-3xl tw--text-primaryColor">
            Time Remaining
          </span>
          <div className="tw--flex tw--flex-wrap tw--justify-center tw--items-center">
            <CounterCard title={"Days"} value={countDown.days} />
            <CounterCard title={"Hours"} value={countDown.hours} />
            <CounterCard title={"Minutes"} value={countDown.minutes} />
            <CounterCard title={"Seconds"} value={countDown.seconds} />
            {/* Days {countDown.hours} hours {countDown.minutes} Minutes{" "}
            {countDown.seconds} seconds. */}
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(MainContent);
