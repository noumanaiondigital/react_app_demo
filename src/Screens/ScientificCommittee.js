import React from "react";
import { withTranslation } from "react-i18next";
import { ListItem } from "./MessageByPresident";
import { UserTestimonial } from "./Sponsors";

function ScientificCommittee({ t }) {
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
          <div className="tw--text-5xl tw--flex tw--justify-center tw--font-bold tw--text-primaryColor">
            <span>Scientific Committee</span>
          </div>
          <div className="tw--flex tw--justify-center  tw--flex-row tw--items-center tw--flex-wrap tw--p-4 tw--mt-8">
            <UserTestimonial
              name="Prof. Tanveer Zia"
              description="Prof Zia has over 21 years of experience in the Australian Higher Education system.  He holds a PhD from the University of Sydney and has been awarded the status of Senior Fellow of the Higher Education Academy in recognition of his achievements according to the UK Professional Standards Framework for teaching and supporting learning in higher education. Prior to joining NAUSS, Prof Zia was Associate Head of School of Computing and Mathematics, Charles Sturt University, Australia, where he still holds an Adjunct Professor position."
              imgPath={"/assets/images/scientific/1.jpg"}
            />
            <UserTestimonial
              name="Prof. Syed Sibte Hadi"
              description="​Prof. Hadi has long experience in teaching, supervising PhD students, case studies and quality assurance. He published numerous articles, a book and several book chapters. He is a consultant and member of several national and international organizations."
              imgPath={"/assets/images/scientific/2.jpg"}
            />
            <UserTestimonial
              name="Prof. Sayyid Amin Muhammad Amir"
              description="​​Sayed Amer has 30 years of academic experience in biological sciences. He graduated from Cairo University in 1989 with first class honor.  He holds a PhD in Biology from the same university (1999). He was promoted to professor in genetics and molecular biology in 2009 and joined Nagoya University of Japan in 2002 for 3 years and won the State Incentive Award in 2005. Prof. Sayyid has published more than 80 research papers and has more than 500 genes in global gene banks."
              imgPath={"/assets/images/scientific/3.jpg"}
            />
              <UserTestimonial
              name="Prof. AAAAA"
              description="​AAA has 38 years of academic experience in biological sciences."
              imgPath={"/assets/images/scientific/user.png"}
            />
             <UserTestimonial
              name="Prof. AAAAA"
              description="​AAA has 38 years of academic experience in biological sciences."
              imgPath={"/assets/images/scientific/user.png"}
            />
             <UserTestimonial
              name="Prof. AAAAA"
              description="​AAA has 38 years of academic experience in biological sciences."
              imgPath={"/assets/images/scientific/user.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(ScientificCommittee);
