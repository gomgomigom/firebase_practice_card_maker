class ImageUploader {
  async upload(file) {
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESETS;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', uploadPreset);
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
