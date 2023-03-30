import React from "react";
import { withTranslation } from "react-i18next";
import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
export const ListItem = ({ text, link }) => {
  const location = useLocation();
  return (
    <Link
      to={link}
      class={`list-group-item ${
        location.pathname.includes(link) && "!tw--bg-white/20"
      }  hover:!tw--bg-white/20  !tw--text-white !tw--border-none !tw--bg-transparent  tw--cursor-pointer hover:tw--underline`}
    >
      {text}
    </Link>
  );
};
export const LeftList = ({ t }) => {
  return (
    <div className="md:tw--min-w-[300px]  tw--w-full  tw--flex-1 tw--bg-primaryColor tw--text-white tw--sticky tw--top-48">
      <div className="tw--w-full tw--border-b-[3px] tw--border-b-secondaryLight tw--text-center tw--text-primaryColor tw--bg-gray-200 tw--text-xl tw--font-bold   tw--p-4">
        {t("Related")}
      </div>
      <ol class="list-group tw--capitalize ">
        <ListItem text={t("President")} link="/PresidentMessage" />
        <ListItem link="/AboutConference" text={t("AboutConf")} />
        <ListItem text={t("AboutEvent")} />
        <ListItem text={t("EventTopic")} link={"/EventTopics"} />
      </ol>
      <div className="tw--w-full tw--border-b-[3px] tw--border-b-secondaryLight tw--text-center tw--text-primaryColor tw--text-xl tw--font-bold tw--bg-gray-200  tw--p-4">
        {t("Focal Person")}
      </div>
      <ol class="list-group tw--capitalize ">
        <ListItem text={t("contactUs")} />
      </ol>
    </div>
  );
};
function MessageByPresident({ t }) {
  return (
    <>
      <div className="tw--p-6 tw--flex tw--mt-4 md:tw--justify-between  tw--justify-center tw--items-start tw--flex-wrap-reverse md:tw--flex-nowrap">
        <LeftList t={t} />
        <div className="tw--flex tw--flex-col tw--items">
          <div className="tw--flex tw--justify-center tw--flex-col tw--items-center tw--p-4 tw--mt-8">
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
                {t("MessageByPres")}
                <br />
                <br />
                {t("MessageByPres2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(MessageByPresident);
