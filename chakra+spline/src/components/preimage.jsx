import React, { useState } from 'react';

const ImagePreview = () => {
  const [link, setLink] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const handleInputChange = event => {
    const newLink = event.target.value;
    setLink(newLink);
    setPreviewImage(URL.createObjectURL(newLink));
  };

  return (
    <div>
      <input type="text" value={link} onChange={handleInputChange} />
      {previewImage && <img src={previewImage} alt="Preview" />}
    </div>
  );
};

export default ImagePreview;
