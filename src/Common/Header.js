import React from 'react'
import { withTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { NavRenderer } from './Layout'
function Header({ t }) {
    const path = useLocation()
    return (
        <>
            <div className='tw--z-10 tw--h-full tw--flex tw--flex-col tw--justify-center tw--text-white'>
                <div className='w-full h-full  tw--z-10  tw--mt-3  tw--text-center tw--leading-[50px]'>
                    <img src="/assets/images/logo2.png" className='tw--h-[450px] tw--mx-auto' alt="" />
                    <div className=' tw--text-xl md:tw--text-4xl  tw--font-bold'>
                        <span className='md:tw--text-3xl tw--font-semibold tw--text-base '>  {t("anniversaryConference")} </span>

                        {/* <img className='tw--bg-fixed tw--bg-cover tw--bg-center tw--bg-no-repeat tw--max-h-[500px]' src="/assets/images/3.jpg" alt="" /> */}

                    </div>
                    <div className=' tw--text-4xl md:tw--text-5xl  m-3 tw--font-semibold'>
                        {t("anniversaryConference2")}
                    </div>
                    <div className='md:tw--text-3xl tw--font-semibold tw--text-base '>  {t("start")}  </div>
                </div>
                <Link to={"/Registration"} className='tw--bg-secondaryLight tw--mt-6 tw--no-underline hover:tw--bg-secondaryColor/90 tw--transition-all tw--ease-in-out tw--duration-200 tw--w-fit  tw--ml-4 tw--shadow-md tw--p-4 tw--text-lg  tw--text-white tw--uppercase'>{t('registrationInformation')}</Link>
            </div>
            <nav class="navbar !tw--p-0 navbar-expand-lg navbar-light tw--z-10 tw--bg-black/30 tw--mt-auto">
                <div class="container-fluid">
                    {/* 
                    <button class="navbar-toggler !tw--shadow-none !tw--outline-none !tw--border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <GiHamburgerMenu className='tw--text-white tw--outline-none' />
                    </button> */}
                    <div class="collapse navbar-collapse tw--flex tw--justify-center" id="navbarNavDropdown">
                        <NavRenderer path={path} t={t} />
                    </div>
                </div>
            </nav>

        </>
    )
}

export default withTranslation()(Header)