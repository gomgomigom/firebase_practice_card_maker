class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'nrxh0lbw');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/nrxh0lbw/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await res.json();
  }
}

export default ImageUploader;
