import React from 'react'
import { withTranslation } from 'react-i18next'

function Footer({ t }) {
    return (
        <div className="row tw--p-16 !tw--mt-10 tw--bg-primaryColor tw--text-white tw--relative tw--h-fit">
            <img src="/assets/images/footerbg.png" className='tw--absolute tw--top-0 tw--left-0 tw--object-contain tw--h-full' alt="" />
            <div className="col-md-3 tw--mb-4 tw--mx-auto tw--flex tw--flex-col tw--h-fit tw--z-10">
                <img src="/assets/images/logo.png" className='tw--w-[240px] tw--mb-4' alt="" />
                {t("NaifInfo")}
            </div>
            <div className="col-md-3 tw--mb-4 tw--mx-auto tw--h-fit tw--z-10">
                <div className='tw--text-secondaryLight tw--text-lg tw--font-bold'>{t("ImportLinks")} </div>
                <ul className='tw--pl-0 tw--mt-3'>
                    <li>
                        <a href="" className='tw--text-white tw--ml-0 tw--no-underline hover:tw--underline'>{t("Recruitment")}</a>
                    </li>
                    <li><a href="" className='tw--text-white tw--ml-0 tw--no-underline hover:tw--underline'>{t("PrivacyPolicy")}</a></li>
                </ul>
            </div>
            <div className="col-md-3 tw--mb-4 tw--mx-auto tw--h-fit tw--z-10">
                <div className='tw--text-secondaryLight tw--text-lg tw--font-bold'>{t("contactUs")}</div>
                <ul className='tw--pl-0 tw--mt-3 tw--space-y-3'>
                    <li>
                        {t("Riyadh")}
                    </li>
                    <li>PO BOX 6830 Riyadh 11452</li>
                    <li>00966112463444</li>
                    <li>info@nauss.edu.sa</li>
                    <li>PO BOX 6830 Riyadh 11452</li>
                </ul>
            </div>

        </div>
    )
}

export default withTranslation()(Footer) 