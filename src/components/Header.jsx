// Welcome to the Header component, here the "Header" contains the (Logo, Intro-text/title and lead)

import React from "react";
import logoImg from '/assets/images/logo-full.svg';


function Header() {
    return (
        <div className="z-99 overflow-hidden w-full h-[30%] md:w-[80%] flex justify-center items-center gap-4 flex-col text-center flex-wrap px-5 py-4 md:mt-4 md:px-3">
            {/* Logo */}
            <img src={logoImg} alt="logo" className="w-40" />
            <h2 className="text-3xl font-bold text-altNeutral_0 md:text-5xl text-wrap">Your Journey to Coding Conf <br className="none md:block"/>2025 Starts Here!</h2>
            <p className="text-altNeutral_300 text-lg px-3">Secure your spot at next year's biggest coding conference.</p>
        </div>
        // Easy to read & understand, isn't ?
    )
}
export default Header