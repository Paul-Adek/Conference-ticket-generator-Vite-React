// Welcome to the form component, (forms -- one of the best way to receive feedbacks and to get data!)

import React, { useState } from "react";
import infoIconErr from '/assets/images/icon-info-red.svg';
import DragAndDrop from "./DragAndDrop";

function FormComp({onSubmit}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [errors, setErrors] = useState({ email: '', name: '' });




    const validateName = (name) => {
        // Only letters (uppercase and lowercase), spaces are allowed
        const regex = /^[A-Za-z\s]+$/;
        return regex.test(name);
    }


    const validateEmail = (email) => {
        // Simple email regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Triggers event that should take place if conditions are met or otherwise
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = { email: '', name: '' };

        // Email validation
        if (!validateEmail(email)) {
            // error message for email
            newErrors.email = 'Please enter a valid email address.';
        }
        // Name validation
        if (!validateName(name)) {
            // error message for name
            newErrors.name = 'Name should only contain letters.';
        }email

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email) {
            onSubmit({name, email, username, avatar});
        }
    }

    const handleChange = (e) => {
        let value = e.target.value;

        // If user has not typed anything yet, do nothing
        if (value === '') {
            setUsername('');
            return;
        }
        //   Automatically adds '@' at the beginning if omitted while typing
        if (!value.startsWith('@')) {
            value = '@' + value.replace(/^@+/, '');
        }
        setUsername(value);
    }

    const handleImageSelect = (url) => {
        setAvatar(url);
    }

    return (

        // Form container

        <form className="w-full md:w-[35%] mt-10 z-99 h-max px-8 md:px-5 flex items-center justify-center flex-col" onSubmit={handleSubmit} >

            <DragAndDrop onImageSelect={handleImageSelect}/>

            {/* Inputs Section */}

            <div className="inputs w-full h-max flex items-center justify-center flex-col py-6 gap-3">

                {/* Name Frame */}
                <div className="nameFrame w-full h-max flex items-start justify-center flex-col gap-1">
                    <label htmlFor="fullname" className="text-altNeutral_0">Full Name</label>
                    <input type="text" value={name} className="w-full h-11 rounded-md border-2 border-altNeutral_0 border-opacity-30 outline-0 px-3 bg-altNeutral_500 bg-opacity-15 text-altNeutral_300 hover:bg-opacity-50 hover:cursor-pointer focus:cursor-text focus:bg-opacity-15" onChange={(e) => setName(e.target.value)} required placeholder="Jonatan Kristof"/>
                    {errors.name && <span className="error-message text-altOrange_700 text-xs">
                        <img src={infoIconErr} alt="info icon" className="inline-block w-3 text-wrap" /> {errors.name}
                    </span>}
                </div>
                {/* Name Frame End */}

                {/* Email Frame */}
                <div className="emailFrame w-full h-max flex items-start justify-center flex-col gap-1">
                    <label htmlFor="email" className="text-altNeutral_0">Email Address
                    </label>
                    <input type="email" value={email} placeholder="example@email.com" className="w-full h-11 rounded-md border-2 border-altNeutral_0 border-opacity-30 outline-0 px-3 bg-altNeutral_500 bg-opacity-15 text-altNeutral_300 hover:bg-opacity-50 hover:cursor-pointer focus:cursor-text focus:bg-opacity-15" onChange={(e) => setEmail(e.target.value)}/>
                    {errors.email && <span className="error-message text-altOrange_700 text-xs">
                        <img src={infoIconErr} alt="info icon" className="inline-block w-3 text-wrap" /> {errors.email}
                    </span>}
                </div>
                {/* Email Frame End*/}


                {/* Github Frame */}
                <div className="githubFrame w-full h-max flex items-start justify-center flex-col gap-1">
                    <label htmlFor="github" className="text-altNeutral_0">Github Username</label>
                    <input type="text" name="github" placeholder="@yourusername" onChange={handleChange} value={username} className="w-full h-11 rounded-md border-2 border-altNeutral_0 border-opacity-30 outline-0 px-3 bg-altNeutral_500 bg-opacity-15 text-altNeutral_300 hover:bg-opacity-50 hover:cursor-pointer focus:cursor-text focus:bg-opacity-15" required />
                </div>
                {/* Github Frame End */}

            </div>
            {/* Inputs Section  End */}

            {/* Generate Button */}
            <button type="submit" className="btn">Generate My Ticket</button>
            {/* Generate Button End */}

        </form>
        // Form End 
    )
}
export default FormComp