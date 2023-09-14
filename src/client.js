import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: "production",
  appVersion: "2023-09-14",
  token: process.env.REACT_APP_PROJECT_TOKEN,
  useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
