import React from 'react'
import { withTranslation } from 'react-i18next';
import { LeftList } from './MessageByPresident';
const EventCard = () => {
    return (
        <>
            <div className="tw--w-[400px] tw--overflow-hidden tw--mb-4 tw--mx-auto  tw--shadow-md">
                <img
                    src="/assets/images/4th_10_previous.jpg"
                    className="tw--object-cover tw--w-full hover:tw--scale-105 tw--transition-all tw--ease-in-out tw--duration-150 tw--cursor-pointer"
                    alt=""
                />
                <div className="p-3 tw--flex tw--flex-col tw--items-start tw--text-left">
                    <span>
                        <button className="tw--bg-secondaryLight tw--text-white tw--p-2 tw--px-8 rounded-md">
                            Monday
                        </button>
                        <span className="tw--ml-3">Lorem, ipsum.</span>
                    </span>
                    <div className="mt-3">
                        <h5 className="tw--capitalize tw--font-bold">Lorem Ipsum</h5>
                        <div className="tw--mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                            autem veniam sapiente asperiores quia libero temporibus earum
                            labore iste mollitia.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
function EventTopic({ t }) {
    return (
        <>







            <div className="tw--p-6 tw--flex tw--mt-4 md:tw--justify-between  tw--justify-center tw--items-start tw--flex-wrap-reverse md:tw--flex-nowrap">
                <LeftList t={t} />
                <div className="tw--flex tw--justify-between tw--flex-wrap tw--w-full tw--ml-4">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>


        </>
    )
}

export default withTranslation()(EventTopic) 