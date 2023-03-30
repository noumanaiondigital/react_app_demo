import React from 'react'
import { withTranslation } from 'react-i18next'
import { ListItem } from './MessageByPresident'
import { UserTestimonial } from './Sponsors'

function OrgCommittee({ t }) {
    return (
        <>
            <div className="tw--p-6 tw--flex tw--mt-4 md:tw--justify-between  tw--justify-center tw--items-start tw--flex-wrap-reverse md:tw--flex-nowrap">


                <div className="md:tw--min-w-[300px]  tw--w-full  tw--flex-1 tw--bg-primaryColor tw--text-white tw--sticky tw--top-48">

                    <ol class="list-group tw--capitalize ">
                        <ListItem text={t("Sponsors")} link="/Sponsors" />
                        <ListItem text={t("Scientific Committee")} link="/ScientificCommittee" />
                        <ListItem text={t("Organizing Committee")} link="/OrgCommittee" />


                    </ol>

                </div>


                <div className="tw--flex tw--flex-col tw--items tw--w-full">
                    <div className='tw--text-5xl tw--flex tw--justify-center tw--font-bold tw--text-primaryColor'><span>Organization Committee</span></div>
                    <div className="tw--flex tw--justify-center  tw--flex-row tw--items-center tw--flex-wrap tw--p-4 tw--mt-8">
                        <UserTestimonial imgPath={"/assets/images/confimages/1.jpeg"} />
                        <UserTestimonial imgPath={"/assets/images/confimages/2.jpg"} />
                        <UserTestimonial imgPath={"/assets/images/confimages/3.jpg"} />
                        <UserTestimonial imgPath={"/assets/images/confimages/11.jpg"} />
                        <UserTestimonial imgPath={"/assets/images/confimages/5.jpg"} />
                        <UserTestimonial imgPath={"/assets/images/scientific/user.png"} />
                        <UserTestimonial imgPath={"/assets/images/scientific/user.png"} />
                        <UserTestimonial imgPath={"/assets/images/scientific/user.png"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default withTranslation()(OrgCommittee) 