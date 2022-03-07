class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESETS
    );
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/gomgomigom/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
