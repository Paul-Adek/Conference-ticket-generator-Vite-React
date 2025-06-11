import React, { useState } from 'react';
import uploadIcon from '/assets/images/icon-upload.svg';
import infoIcon from '/assets/images/icon-info.svg';

function DragAndDrop({ onImageSelect }) {

    // avatar image and state
    const [avatar, setAvatar] = useState(uploadIcon);
    const [avatarState, setAvatarState] = useState(false);

    // When submit button(generate ticket button) is click run the function
    const handleButtonClick = () => {
        document.getElementById('image-upload').click();
    }

    // Function to change/select file
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        updateAvatar(file);
        setAvatarState(true);
    }

    // To load the file selected and updating the avatar
    const updateAvatar = (file) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            setAvatar(reader.result);
            onImageSelect(reader.result);
        })
        reader.readAsDataURL(file);
    }


    return (


        <div className="drag&dropFrame w-full">
            <span className="text-altNeutral_0">Upload Avatar</span>

            <div className={!avatarState ? "dropArea w-full h-[8rem] outline-2 outline-altNeutral_500 outline-dashed my-2 rounded-md bg-altNeutral_500 bg-opacity-15 flex items-center justify-center flex-col flex-wrap cursor-pointer hover:bg-opacity-50" : 'dropArea w-full h-[8rem] outline-2 outline-altNeutral_500 outline-dashed my-2 rounded-md bg-altNeutral_500 bg-opacity-15 flex items-center justify-center flex-col flex-wrap cursor-default'} onClick={!avatarState ? handleButtonClick : null}>

                {/* Avatar Section */}
                <div className="avatar-frame w-12 h-12 rounded-lg border-2 border-altNeutral_500 border-opacity-20 bg-altNeutral_500 bg-opacity-15 overflow-hidden mb-2">
                    <input type="file" id="image-upload" className="hidden" accept="image/*" onChange={handleFileChange} required />
                    <img src={avatar} alt="avatar image" className="m-auto inset-0 object-cover w-full h-full" id="avatar" />
                </div>
                {/* Avatar Section End */}

                {!avatarState && <span className="text-altNeutral_300 text-wrap text-center">Drag and drop or click to upload</span>}
                {avatarState && <div className="btns w-full h-6 text-altNeutral_0 text-xs flex items-center justify-center gap-3">
                    <span className="px-2 py-[0.15rem] bg-altNeutral_300 bg-opacity-15 rounded-md cursor-pointer hover:bg-opacity-40" onClick={() => { setAvatar(uploadIcon), setAvatarState(false) }}>Remove image</span>
                    <span className="px-2 py-[0.15rem] bg-altNeutral_300 bg-opacity-15 rounded-md cursor-pointer hover:bg-opacity-40" onClick={avatarState && handleButtonClick}>Change image</span>
                </div>}
            </div>

            <span className="msg text-altNeutral_500 text-xs"><img src={infoIcon} alt="info icon" className="inline-block w-3 text-wrap" /> Upload your photo (JPG or PNG, max size: 500kb).</span>
        </div>


    )
}
export default DragAndDrop