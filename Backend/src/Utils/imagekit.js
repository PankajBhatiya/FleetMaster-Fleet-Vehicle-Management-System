import ImageKit from 'imagekit';

const imageKitConfig = {
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
};

export const isImageKitConfigured = Object.values(imageKitConfig).every(Boolean);

// Image uploads are optional for local development. Do not prevent the API
// from starting just because ImageKit credentials have not been supplied.
export const imagekit = isImageKitConfigured ? new ImageKit(imageKitConfig) : null;
