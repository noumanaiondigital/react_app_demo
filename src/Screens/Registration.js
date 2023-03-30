import React from "react";
import { Link } from "react-router-dom";
const ListInfo = ({ title, textOne, textTwo, textThree }) => {
  return (
    <>
      <div className="tw--flex tw--w-full tw--justify-between tw--border-b-[1px] tw--border-gray-200">
        <div className="tw--w-full tw--p-4 tw--bg-gray-100 tw--font-bold">
          {title} <span>*</span>
        </div>
        <div className="tw--w-full tw--p-4">
          <span className="tw--font-bold">{textOne}</span>{" "}
          {textTwo && "| " + textTwo} {textThree && "| " + textThree}
        </div>
      </div>
    </>
  );
};
function Registration() {
  return (
    <>
      <div className="tw--p-6 ">
        {" "}
        <div className="tw--flex tw--justify-center">
          <div className="tw--w-full">
            <h1 className="tw--font-bold tw--text-7xl">
              Registration <br /> Information
            </h1>
            <p className="tw--mt-6 tw--text-xl">
              Arab Society of Forensic Sciences and Forensic medicine is honored
              to welcome you to the 6th ASAFAM Conference 2023 from 5th to 7th
              December 2023 at Naif Arab University for Security Sciences in
              Riyadh, Kingdom of Saudi Arabia. We request you to complete the
              registration form below. This conference is free to attend.
              However, workshops will be charged.
            </p>
            <Link
              to={"/"}
              className="tw--bg-secondaryLight  tw--no-underline hover:tw--bg-secondaryColor/90 tw--transition-all tw--ease-in-out tw--duration-200 tw--w-fit tw--mt-6 tw--inline-block tw--mx-auto tw--shadow-md tw--p-4 tw--text-lg  tw--text-white tw--uppercase"
            >
              Back to conference information
            </Link>
          </div>
        </div>
        <div className="tw--mt-6 tw--shadow-md tw--border-[1px] tw--rounded-md tw--p-3 tw--bg-gray-100 tw--min-h-[300px] tw--flex tw--flex-col   tw--w-full">
          <h1 className="tw--text-3xl tw--capitalize tw--text-primaryColor">To present workshops, please visit the following link</h1>
          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=pGPLp-wxGUy_4-eQKGz-ZKVERsqHaYtPuMHkJUWtouZUMzVTMDFNMThPTVBRTk5NSkRLQTIyTVRVNy4u" target={"_blank"} className="tw--mx-auto tw--my-auto tw--bg-primaryColor tw--px-4 tw--py-2 tw--text-white tw--rounded-full tw--no-underline">Click Here</a>

        </div>
      </div>
    </>
  );
}

export default Registration;
