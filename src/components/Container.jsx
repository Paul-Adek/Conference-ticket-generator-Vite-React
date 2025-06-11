
// Welcome to the container component, here the container serves as the root level element of other element/components, aside from the app.jsx, You gerrit?

import React from "react";
import lineTopImg from '/assets/images/pattern-squiggly-line-top.svg';
import lines from '/assets/images/pattern-lines.svg';


function Container({ children }) {
    return (
        // Background (Images, patterns, circle)
        <div className='w-full min-h-screen bg-altNeutral_900 bg-altBgImg md:bg-altBgImgTab lg:bg-altBgImgDesk bg-cover bg-no-repeat bg-bottom bg-blend-difference bg-fixed z-0 relative font-customFont flex items-center justify-start flex-col overflow-x-hidden'>

            <div className="lines -z-10 fixed content-none w-full h-[50%] top-0 left-0 overflow-hidden">
                <img src={lines} alt="lines image" className="w-full h-[40rem] object-cover -z-10 " />
            </div>

            {/* Squiggly line top */}
            <div className="fixed top-0 right-0 md:w-[30%] h-[30%] flex items-center justify-center w-[50%] -z-10">
                <img src={lineTopImg} alt="image" className="w-full h-full object-contain md:-translate-y-0 -translate-y-16 -z-10" />
            </div>

            {/* Squiggly line bottom */}
            <div className='fixed bottom-0 left-0 w-[100%] md:w-[50%] h-[50%] -z-10 bg-altBgImgSmall bg-contain md:bg-altBgImgBig  bg-no-repeat bg-left-bottom'>
            </div>

            <div className="circles fixed w-[30%] h-[30%] md:w-[25%] md:h-[25%] -z-10 bg-altBgCircles bg-no-repeat bg-contain bg-right top-1/2 right-1/2 md:translate-x-96  translate-x-72 -translate-y-1/2"></div>
            {children}
        </div>
    )
}
export default Container 