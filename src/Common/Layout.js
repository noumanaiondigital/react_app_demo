import React from 'react'
import { withTranslation } from 'react-i18next'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

import Navbar from './Navbar'


const links = [

    {
        link: "/",
        text: "homePage",

    },
    {
        link: "/PresidentMessage",
        text: "MessagebyPresident",

    },
    {

        text: "Events_Conference",
        subLinks: [
            {
                text: "Conference Tracks",
                link: "/ConferenceTracks"
            }
        ]

    },
    {
        link: "/Agenda",
        text: "Agenda_Sessions",

    },
    {
        // link: "/Agenda",
        text: "Guideline",
        subLinks: [
            // {
            //     text: "Author",
            //     link: "/Author"
            // },
            {
                text: "Oral Presentation",
                link: "/OralPresentation"
            },
            {
                text: "Poster Presentation",
                link: "/PosterPresentation"
            },
        ]
    },
    {
        link: "/Sponsors",
        text: "sponsors",

    },
    {
        link: "/Contactus",
        text: "contactUs",

    },
    {
        link: "/Aboutus",
        text: "aboutUs",

    },

]

const NavItem = ({ path, text, link, mobile }) => {
    return !mobile ? <li class={`${path.pathname === link && "tw--bg-primaryColor"}  hover:tw--bg-white/20`}>
        <Link
            to={link}
            class={` !tw--text-white  tw--p-4 tw--inline-block tw--text-2xl tw--font-semibold  tw--no-underline`}
            href="#"
        >
            {text}
        </Link>
    </li> : <li class=" hover:tw--bg-white/20  ">
        <Link
            class={` !tw--text-white tw--p-4 tw--inline-block tw--no-underline`}
            aria-current="page"

            to={link}
        >
            {text}
        </Link>
    </li >
}
const NavItemDropDown = ({ path, text, subLinks, mobile }) => {
    return !mobile ? <li class={` hover:tw--bg-white/20 nav-item dropdown`}>
        <a
            class={`dropdown dropdown-toggle !tw--text-white tw--py-4 tw--px-2  tw--inline-block tw--text-2xl tw--font-semibold  tw--no-underline`}
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            {text}
        </a>
        <ul class="dropdown-menu">

            {subLinks.map(subLink => {
                return <li>
                    <Link to={subLink.link} class="dropdown-item" href="#">
                        {subLink.text}
                    </Link>
                </li>
            })}

        </ul>
    </li> : <li class=" hover:tw--bg-white/20  dropdown">
        <a
            class={` dropdown-toggle !tw--text-white tw--py-4 tw--px-2  tw--inline-block tw--no-underline`}
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >

            {text}


        </a>
        <ul class="dropdown-menu">
            {subLinks.map(subLink => {
                return <li>
                    <Link to={subLink.link} class="dropdown-item" href="#">
                        {subLink.text}
                    </Link>
                </li>
            })}

        </ul>
    </li>
}

export const NavRenderer = ({ path, t, mobile }) => {

    return <ul class={`${!mobile ? "tw--flex tw--mt-auto tw--mb-0 " : "tw--mb-0 "}`}>


        {links.map(link => {
            if (link.subLinks) {
                return <NavItemDropDown mobile={mobile} path={path} text={t(link.text)} subLinks={link.subLinks} />
            } else {
                return <NavItem mobile={mobile} link={link.link} path={path} text={t(link.text)} />
            }
        })}
        {/* <NavItem link={"/PresidentMessage"} text={t()} />
        <NavItem link={"/"} text={t("homePage")} /> */}




    </ul>



}


// <ul className='tw--mb-0'>

// {/* <ul class=" tw--mb-0 ">
//                     <li class=" hover:tw--bg-white/20  ">
//                         <Link
//                             class={` !tw--text-white tw--p-4 tw--inline-block tw--no-underline`}
//                             aria-current="page"
//                             href="#"
//                             to={"/"}
//                         >
//                             {t("homePage")}
//                         </Link>
//                     </li> */}

// </ul>
function Layout({ t }) {
    return (
        <>
            <Navbar />

            <div className="main__container">
                <Header />
            </div>
            <marquee className="tw--text-2xl tw--shadow-md tw--text-primaryColor tw--p-4"><div className='tw-bold'>{t("slogan")}</div></marquee>
            <nav class="navbar lg:!tw--hidden  navbar-expand-lg navbar-light tw--z-10 tw--p-4 tw--bg-primaryColor">
                <div class="container-fluid">

                    <button class="navbar-toggler !tw--shadow-none !tw--outline-none !tw--border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMobile" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <GiHamburgerMenu className='tw--text-white tw--outline-none' />
                    </button>
                    <div class="collapse navbar-collapse " id="navbarMobile">


                        <NavRenderer mobile={true} t={t} />
                        <ul class=" tw--mb-0 ">
                            <li class=" hover:tw--bg-white/20  ">
                                <Link
                                    class={` !tw--text-white tw--p-4 tw--inline-block tw--no-underline`}
                                    aria-current="page"
                                    href="#"
                                    to={"/"}
                                >
                                    {t("homePage")}
                                </Link>
                            </li>
                            <li class=" hover:tw--bg-white/20 ">
                                <Link
                                    to={"/PresidentMessage"}
                                    class={` !tw--text-white tw--p-4 tw--inline-block tw--no-underline`}
                                    href="#"
                                >

                                    {t("PresidentMessage")}

                                </Link>
                            </li>

                            <li class=" hover:tw--bg-white/20">
                                <Link to="/Information"
                                    class={` !tw--text-white tw--py-4 tw--px-2  tw--inline-block tw--no-underline`}
                                    href="#"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >

                                    {t("Events_Conference")}

                                </Link>
                                {/* <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul> */}
                            </li>
                            <li class=" hover:tw--bg-white/20 ">
                                <Link
                                    to="/Agenda"
                                    class={` !tw--text-white tw--py-4 tw--px-2  tw--inline-block tw--no-underline`}
                                    href="#"
                                >

                                    {t("Agenda_Sessions")}

                                </Link>
                            </li>
                            <li class=" hover:tw--bg-white/20  dropdown">
                                <a
                                    class={` dropdown-toggle !tw--text-white tw--py-4 tw--px-2  tw--inline-block tw--no-underline`}
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >

                                    {t("Guideline")}


                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Author
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Oral Presentation
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Poster Presentation
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class=" hover:tw--bg-white/20 ">
                                <a class={`  !tw--text-white tw--py-4 tw--px-2  tw--inline-block tw--no-underline`} href="#">


                                    {t("Contact us")}

                                </a>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
            <div className="section__container tw--min-h-[82.7vh] tw--flex tw--flex-col tw--justify-between">
                <Outlet />
                <Footer />
            </div>

        </>
    )
}

export default withTranslation()(Layout) 