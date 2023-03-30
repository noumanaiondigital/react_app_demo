import React from "react";
import { withTranslation } from "react-i18next";
import { LeftList } from "./MessageByPresident";
import OwlCarousel from "react-owl-carousel";
const testiMonials = [
  {
    name: "Rekob Ramya",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    address: "USA",
    img: "https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg",
  },
  {
    name: "Brandon Savage",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    address: "USA",
    img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
  },
  {
    name: "Steve Burns",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    address: "USA",
    img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
  },
  {
    name: "Kevin Canlas",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    address: "USA",
    img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
  },
];

const options = {
  loop: true,
  center: false,

  //   margin: 40,
  autoplay: true,
  dots: true,
  //   autoplayTimeout: 8500,
  smartSpeed: 450,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};
const fifthPath = "/assets/images/confimages";
const allImages = {
  fifthPaths: [
    `${fifthPath}/1.jpeg`,
    `${fifthPath}/2.jpg`,
    `${fifthPath}/3.jpg`,
    `${fifthPath}/5.jpg`,
    `${fifthPath}/7.jpg`,
    `${fifthPath}/8.jpg`,
    `${fifthPath}/9.jpg`,
    `${fifthPath}/10.jpg`,
    `${fifthPath}/11.jpg`,
    `${fifthPath}/12.jpg`,
    `${fifthPath}/14.jpg`,
    `${fifthPath}/15.jpg`,
    `${fifthPath}/16.jpg`,
    `${fifthPath}/18.jpg`,
    `${fifthPath}/19.jpg`,
    `${fifthPath}/20.jpg`,
    `${fifthPath}/21.jpeg`,
    `${fifthPath}/22.jpg`,
    `${fifthPath}/23.jpg`,
    `${fifthPath}/24.jpg`,
    `${fifthPath}/25.jpg`,
  ],
};
function AboutConference({ t }) {
  return (
    <div className="tw--p-6 tw--flex tw--mt-4 md:tw--justify-between  tw--justify-center tw--items-start tw--flex-wrap-reverse md:tw--flex-nowrap">
      <LeftList t={t} />
      <div className="tw--flex tw--flex-col tw--items-center  tw--w-[80vw] tw--ml-3">
        <OwlCarousel
          id="customer-testimonoals"
          className="owl-carousel owl-theme"
          {...options}
        >
          {allImages.fifthPaths.map((path) => {
            return (
              <div className="tw--w-[400px] tw--h-[280px] ">
                <img
                  src={path}
                  className="tw--w-full tw--h-full tw--object-cover tw--shadow-lg"
                  alt=""
                />
              </div>
            );
          })}
        </OwlCarousel>
        {/* <OwlCarousel options={options} events={events} className="tw--flex">
          <div className="tw--h-[200px]">
            {" "}
            <img
              src="/assets/images/confimages/1.jpeg"
              className="tw--h-full tw--w-full"
              alt="The Last of us"
            />
          </div>
          <div className="tw--h-[200px]">
            {" "}
            <img
              src="/assets/images/confimages/1.jpeg"
              className="tw--h-full tw--w-full"
              alt="The Last of us"
            />
          </div>
          <div className="tw--h-[200px]">
            {" "}
            <img
              src="/assets/images/confimages/1.jpeg"
              className="tw--h-full tw--w-full"
              alt="The Last of us"
            />
          </div>
        </OwlCarousel> */}
        {/* <div className="tw--flex tw--justify-center tw--flex-col tw--items-center tw--p-4 tw--mt-8">
                    <div className="tw--relative tw--border-gray-200 tw--border-[1px] tw--rounded-md">
                        <img
                            src="/assets/images/president.jpg"
                            className="tw--max-w-[350px] tw--rounded-md tw--shadow-lg tw--z-10 tw--relative tw--transition-all tw--ease-in-out tw--duration-300 hover:tw--scale-[1.02] tw--origin-center"
                            alt=""
                        />
                        <div className="tw--w-[100%] tw--absolute tw--h-[60%] tw--rounded-md -tw--bottom-4 tw--left-4 tw--bg-secondaryLight"></div>
                    </div>
                    <h3 className="tw--font-bold tw--mt-6 tw--text-secondaryLight tw--text-center">
                        Dr. Abdulmajeed bin Abdullah Al-Bunyan
                    </h3>
                    <p className="tw--font-bold tw--text-secondaryLight tw--text-center tw--leading-7">
                        President of Naif Arab University for Security Sciences
                        <br /> Chairman of the Board of Directors of the Arab Society for
                        Forensic Sciences
                    </p>
                </div>
                <div className=" tw--ml-4 tw--mx-auto tw--mb-4 md:tw--mb-0">
                    <div className="tw--leading-8 tw--text-xl ">
                        <p className="tw--mt-3 tw--text-lg">
                            text={t('MessageByPres')}
                            <br />
                            <br />text={t('MessageByPres2')}
                        </p>
                    </div>
                </div> */}
      </div>
    </div>
  );
}

export default withTranslation()(AboutConference);
