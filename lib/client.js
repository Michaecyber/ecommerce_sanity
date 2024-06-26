import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'l0t34cml',  
  dataset: 'production', 
  apiVersion: '2021-10-21',
  // Set to `true` for production environments
  useCdn: true, 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

