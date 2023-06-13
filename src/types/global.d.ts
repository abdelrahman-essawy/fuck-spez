type ImageType = {
  src: string;
  alt: string;
};

type Images = {
  HappySpez: ImageType;
  SadSpez: ImageType;
};

type Person = {
  name: string;
  images: Images;
  description: string;
};
