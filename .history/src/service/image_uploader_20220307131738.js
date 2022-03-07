class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'nrxh0lbw');
    data.append('api_key', '228452281477193');
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
