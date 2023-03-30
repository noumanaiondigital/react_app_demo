import React from "react";
import { withTranslation } from "react-i18next";
import { LeftList, ListItem } from "./MessageByPresident";
export const UserTestimonial = ({ imgPath, name, description }) => {
  return (
    <div className="tw--min-h-[400px] tw--m-4 tw--w-[380px] tw--relative tw--cursor-pointer">
      <img
        src={imgPath}
        alt=""
        className="tw--w-full tw--min-h-[500px] tw--object-cover"
      />
      <div className="tw--absolute tw--opacity-0 tw--flex tw--items-end tw--p-6 hover:tw--opacity-100 tw--transition-all hover:tw--scale-[1.03] tw--ease-in-out tw--duration-300 tw--w-full tw--h-auto tw--min-h-full tw--from-primaryColor/60 tw--to-secondaryColor/40 tw--bg-gradient-to-tr tw--top-0">
        <div className="tw--flex tw--flex-col tw--space-y-3">
          <span className="tw--text-2xl tw--text-white tw--font-bold ">
            {name || "John Dave"}
          </span>
          <span className="tw--text-white">
            {description ||
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiaequae culpa laudantium labore a."}
          </span>
        </div>
      </div>
    </div>
  );
};
function Sponsors({ t }) {
  return (
    <>
      <div className="tw--p-6 tw--flex tw--mt-4 md:tw--justify-between  tw--justify-center tw--items-start tw--flex-wrap-reverse md:tw--flex-nowrap">
        <div className="md:tw--min-w-[300px]  tw--w-full  tw--flex-1 tw--bg-primaryColor tw--text-white tw--sticky tw--top-48">
          <ol class="list-group tw--capitalize ">
            <ListItem text={t("Sponsors")} link="/Sponsors" />
            <ListItem
              text={t("Scientific Committee")}
              link="/ScientificCommittee"
            />
            <ListItem text={t("Organizing Committee")} link="/OrgCommittee" />
          </ol>
        </div>

        <div className="tw--flex tw--flex-col tw--items tw--w-full">
          <div className="tw--text-5xl tw--flex tw--justify-center  tw--font-bold tw--text-primaryColor">
            <span>Sponsors</span>
          </div>
          <div className="tw--flex tw--justify-center  tw--flex-row tw--items-center tw--flex-wrap tw--p-4 tw--mt-8">
            <UserTestimonial imgPath={"/assets/images/3.jpg"} />
            <UserTestimonial imgPath={"/assets/images/3.jpg"} />
            <UserTestimonial imgPath={"/assets/images/3.jpg"} />
            <UserTestimonial imgPath={"/assets/images/3.jpg"} />
            <UserTestimonial imgPath={"/assets/images/3.jpg"} />
            <UserTestimonial imgPath={"/assets/images/3.jpg"} />
            <UserTestimonial imgPath={"/assets/images/4.jpg"} />
            <UserTestimonial imgPath={"/assets/images/6.jpg"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(Sponsors);
