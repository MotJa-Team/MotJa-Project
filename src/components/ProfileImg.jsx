import { useState, useEffect } from "react";

const ProfileImg = () => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");

    const putImg = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <>
            <input type="file" accept="image/*" onChange={putImg} />
            {imagePreviewUrl && (
                <img src={imagePreviewUrl} alt="Image Preview" />
            )}
        </>
    );
};

export default ProfileImg;
