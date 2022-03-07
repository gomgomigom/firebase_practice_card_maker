class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'nrxh0lbw');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/gomgomigom/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    console.log('haha');
    return await result.json();
  }
}

export default ImageUploader;
