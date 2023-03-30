import React, { useState } from "react";
const Card = ({ reverse }) => {
  return (
    <div
      className={`tw--flex  tw--m-4 tw--items-center tw--justify-center tw--flex-wrap ${
        reverse && "tw--flex-row-reverse"
      }`}
    >
      <div
        className={`tw--flex tw--items-center tw--mb-6 ${
          reverse ? "tw--ml-8" : "tw--mr-8"
        }`}
      >
        {" "}
        <span className="tw--font-semibold tw--text-sm sm:tw--text-lg">
          November 17, 2019 12:00
        </span>
        <span className=" tw--w-[50px] tw--h-[50px] tw--inline-block sm:tw--w-[150px] sm:tw--h-[150px] tw--rounded-full tw--overflow-hidden tw--ml-4">
          <img
            src="/assets/images/1.jpg"
            className="tw--object-cover tw--w-full tw--h-full"
            alt=""
          />
        </span>
      </div>
      <div className="tw--flex tw--shadow-lg tw--flex-col tw--border-l-[6px]  tw--mb-6 tw--rounded-l-lg tw--h-full tw--w-[450px] tw--bg-white tw--p-8 tw--px-6 tw--border-l-primaryColor">
        <h5>Day 1 Agenda </h5>
        <p className="tw--text-sm tw--opacity-50">
          Dr. Josh Brunty is an Associate Professor & Director of the Cyber
          Forensics & Security Graduate Program at Marshall University in
          Huntington, West Virginia, USA. Prior to joining Marshall University
          in 2012, he served 7 years as a Digital Forensics Examiner, Technical
          Leader, and Technical Assessor for both the United States state and
          federal government sectors. He currently serves on the editorial
          boards of Forensic Science International: Digital Investigation, and
          the Journal of Forensic Sciences.
        </p>
        <div className="tw--flex tw--items-center tw--font-semibold">
          <span>Speakers:</span>
          <span className="tw--flex tw--items-center tw--ml-3">
            <span className="tw--w-[20px] tw--overflow-hidden tw--rounded-full tw--inline-block tw--h-[20px]">
              <img
                src="/assets/images/speaker.jpeg"
                className="tw--w-full tw--h-full tw--object-cover"
                alt=""
              />
            </span>
            <span className="tw--text-sm tw--ml-2 tw--cursor-pointer hover:tw--text-primaryColor tw--transition-all tw--ease-in-out tw--duration-200">
              {" "}
              Dr. Josh Brunty
            </span>
          </span>
          <span className="tw--flex tw--items-center tw--ml-3">
            <span className="tw--w-[20px] tw--overflow-hidden tw--rounded-full tw--inline-block tw--h-[20px]">
              <img
                src="/assets/images/2.jpg"
                className="tw--w-full tw--h-full tw--object-cover"
                alt=""
              />
            </span>
            <span className="tw--text-sm tw--ml-2 tw--cursor-pointer hover:tw--text-primaryColor tw--transition-all tw--ease-in-out tw--duration-300">
              {" "}
              Dr. John Doe
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

const InformationCard = ({ extraDetail }) => {
  const [viewDetail, setViewDetail] = useState(false);
  return (
    <>
      <div className="tw--flex tw--flex-col  tw--w-full   sm:tw--space-y-0  tw--my-2 tw--mx-auto tw--items-start tw--transition-all tw--ease-in-out tw--duration-300 hover:tw--border-primaryColor tw--border-[1px]  tw--bg-white tw--rounded-md tw--shadow-md">
        <div className="tw--flex sm:tw--justify-between tw--flex-col  sm:tw--flex-row sm:tw--space-y-0 tw--w-full tw--items-center  tw--mx-auto  tw--transition-all tw--ease-in-out tw--duration-300 hover:tw--border-primaryColor tw--border-[1px] tw--bg-white tw--p-4 tw--px-6 tw--rounded-md tw--shadow-md ">
          <span className="tw--min-w-[100px] tw--min-h-[100px] tw--max-w-[100px] tw--max-h-[100px] tw--rounded-full tw--overflow-hidden">
            <img
              src="/assets/images/3.jpg"
              className="tw--min-w-[100px] tw--min-h-[100px] tw--object-cover tw--object-center"
              alt=""
            />
          </span>
          <div className="tw--flex tw--flex-col tw--mr-auto tw--ml-3">
            <span className="tw--font-bold tw--mb-2">
              Digital Forensics and Cyber Crime
            </span>
            <span className="tw--text-base tw--text-black/40">
              by <span className="tw--text-black"> Dr. Josh Brunty</span> /
              Associate Professor & Director of the Cyber Forensics & Security
              Graduate Program
            </span>
          </div>
          <div className="tw--flex tw--flex-col tw--mx-auto tw--my-4">
            <span className="tw--text-base tw--text-black/80">
              12-14 Jan 2019
            </span>
            <span className="tw--text-base tw--text-black/80">
              Mountain Resort, Phoenix, USA
            </span>
          </div>
          <button
            onClick={() => setViewDetail(!viewDetail)}
            className="tw--bg-primaryColor tw--p-2 tw--px-6 tw--text-white tw--rounded-md"
          >
            {viewDetail ? "View Less" : "View More"}
          </button>
        </div>
        <div
          className={`tw--transition-all tw--ease-in-out tw--duration-500 tw--overflow-hidden ${
            viewDetail ? " tw--h-[300px] tw--overflow-y-auto" : " tw--h-[0px]"
          }`}
        >
          {" "}
          <div className="tw--m-4 tw--text-base">
            {extraDetail}
            {extraDetail}
            {extraDetail}
          </div>
          {/* {extraDetail} */}
        </div>
      </div>
    </>
  );
};
const Tabs = [
  {
    day: "Monday",
    date: "January 10, 2023",
  },
  {
    day: "Tuesday",
    date: "January 11, 2023",
  },
  {
    day: "Wednesday",
    date: "January 12, 2023",
  },
];
const ButtonGroup = ({ Tabs, setActiveTab, activeTab }) => {
  return (
    <>
      {Tabs.map((tab, index) => (
        <div
          onClick={() => setActiveTab(index)}
          className={`${index === 0 && "tw--rounded-l-lg"} ${
            index === Tabs.length - 1 && "tw--rounded-r-lg"
          } ${
            activeTab === index
              ? "tw--bg-primaryColor/80 tw--text-white"
              : "tw--bg-primaryColor/80 tw--text-white/50"
          }  tw--cursor-pointer tw--items-center tw--flex tw--flex-col tw--px-4 tw--py-3  `}
        >
          <span className="tw--mb-1 tw--text-2xl ">{tab.day}</span>
          <span className="tw--text-sm">{tab.date}</span>
        </div>
      ))}
    </>
  );
};
function EventCards() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="tw--bg-gray-100 tw--p-10">
      <div className="tw--flex  tw--justify-center">
        <ButtonGroup
          Tabs={Tabs}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>
      <Card />

      <InformationCard
        extraDetail={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et cumque accusantium voluptatibus exercitationem laudantium aut aliquam alias optio repudiandae qui quod omnis hic voluptatem esse perferendis delectus, accusamus sed velit! Amet, ea vitae aliquam sed vero ipsum! Corrupti optio vero, accusantium explicabo incidunt dignissimos, dolorem quia obcaecati eos reiciendis ea rerum ex nisi pariatur architecto perferendis consequuntur facilis numquam. Quos autem dicta temporibus perspiciatis ad expedita iusto possimus. Numquam, omnis! Impedit, placeat. Consequuntur nulla architecto incidunt eum dignissimos molestiae sapiente, saepe facere corrupti iure aut! Assumenda aliquid ipsam omnis, iure laborum quaerat dolor ipsa autem, voluptas nisi voluptatum ullam!"
        }
      />
      <InformationCard
        extraDetail={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et cumque accusantium voluptatibus exercitationem laudantium aut aliquam alias optio repudiandae qui quod omnis hic voluptatem esse perferendis delectus, accusamus sed velit! Amet, ea vitae aliquam sed vero ipsum! Corrupti optio vero, accusantium explicabo incidunt dignissimos, dolorem quia obcaecati eos reiciendis ea rerum ex nisi pariatur architecto perferendis consequuntur facilis numquam. Quos autem dicta temporibus perspiciatis ad expedita iusto possimus. Numquam, omnis! Impedit, placeat. Consequuntur nulla architecto incidunt eum dignissimos molestiae sapiente, saepe facere corrupti iure aut! Assumenda aliquid ipsam omnis, iure laborum quaerat dolor ipsa autem, voluptas nisi voluptatum ullam!"
        }
      />
      {/* <Card />
      <Card reverse={true} />
      <Card /> */}
    </div>
  );
}

export default EventCards;
