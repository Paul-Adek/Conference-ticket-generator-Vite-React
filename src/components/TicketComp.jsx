import React from "react";
import logoImg from '/assets/images/logo-full.svg';
import logoImgMark from '/assets/images/logo-mark.svg';
import githubIcon from '/assets/images/icon-github.svg';

function TicketComp({formData}) {

    const date = new Date();
    let year = date.getFullYear();

    const ticketNumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

    return (
        <div className="flex items-center justify-center flex-col md:w-[70%] w-full text-altNeutral_0 py-4 md:mt-4 h-max">

            <img src={logoImg} alt="logo image" className="w-40 mt-4 md:mt-0" />

            <div className="w-full h-max flex items-center justify-center flex-col my-6 mt-12 text-center gap-4 px-5">
                <h2 className="congratsMsg text-4xl md:text-5xl font-bold px-4">Congrats, <span className="text-transparent bg-altGradient bg-clip-text">{formData.name}</span><br className="hidden md:block" /> Your ticket is ready.</h2>
                <p className="text-altNeutral_0 md:px-64 px-3 py-4 text-[18px]">We've emailed your ticket to <span className="text-altOrange_500">{formData.email}</span> and will send updates in the run up to the event.</p>

                <div className="w-max md:w-[55%] h-[15rem] flex items-center justify-center rounded-lg mt-6 bg-ticketPattern bg-center bg-no-repeat overflow-hidden" style={{
                    backgroundSize: 'contain',
                }}>

                    <div className="ticketInfo w-[80%] h-fit min-h-9 flex items-start justify-between flex-col p-6 md:gap-y-16 gap-y-5 flex-wrap">

                        <div className="flex items-center justify-start gap-4 w-full h-full">
                            <img src={logoImgMark} alt="ticket-image" className="w-8 h-full -mt-3"/>
                            <div className="flex items-start justify-center flex-col flex-wrap">
                                <span className="text-3xl max-sm:text-xl font-bold">Coding Conf</span>
                                <span className="text-altNeutral_300">Jan 31, {year} / Austin TX</span>
                            </div>
                        </div>

                        <div className="userInfo flex items-center justify-center gap-3 overflow-hidden">
                            <img src={formData.avatar} className="w-16 h-[4rem] rounded-md object-cover" alt="picture" />
                            <div className="flex items-start justify-center flex-col gap-1 mb-2">
                                <span className="text-2xl font-semibold">{formData.name}</span>
                                <span className="inline-flex gap-1"><img src={githubIcon} alt="github icon" />{formData.username}</span>
                            </div>
                        </div>

                    </div>

                    <div className="ticketNo w-[20%] h-fit flex items-center justify-center">
                        <span className="text-2xl text-altNeutral_500 rotate-90">#0{ticketNumber}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TicketComp