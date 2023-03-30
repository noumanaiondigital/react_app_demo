import React from 'react'
import { withTranslation } from 'react-i18next'
const EventInfo = ({ title, description }) => <div>
    <span className='tw--text-xl tw--font-bold tw--flex tw--flex-col'>{title}</span>
    <span className='tw--text-black/80'>{description}</span>
</div>
function EventsConferenceInfo({ t }) {
    return (
        <div className='tw--p-4 tw--flex tw--flex-col tw--space-y-6'>
            <EventInfo title={t("NameBadges")} description={t("NameBadgesInfo")} />
            <EventInfo title={t("Language")} description={t("LanguageInfo")} />
            <EventInfo title={t("DataPrivacy")} description={t("DataPrivacyInfo")} />
            <EventInfo title={t("LostFound")} description={t("LostFoundInfo")} />
            <EventInfo title={t("Smoking")} description={t("SmokingInfo")} />
        </div>
    )
}

export default withTranslation()(EventsConferenceInfo)  