"use client"

import Image from 'next/image';
import { useState } from 'react';

const images: Images = {
  HappySpez: {
    src: '/happy-spez-image.webp',
    alt: 'Happy Spez Image',
  },
  SadSpez: {
    src: '/sad-spez-image.webp',
    alt: 'Sad Spez Image',
  },
};

const spez: Person = {
  name: 'Steve Huffman',
  images: images,
  description: 'CEO of Reddit',
};

export default function Home() {
  const [image, setImage] = useState<ImageType>(images.HappySpez);
  const [count, setCount] = useState<number>(0);

  const toggleImage = (prevImage: ImageType): ImageType => {
    return prevImage === images.HappySpez ? images.SadSpez : images.HappySpez;
  };

  const handleImageClick = () => {
    setCount(prevCount => ++prevCount);
    setImage(toggleImage);
  };

  return (
    <main onMouseDown={handleImageClick} className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-7xl font-bold">Fuck Spez</h1>
        <p className="text-3xl font-medium">{count}</p>
      </div>
      <Image src={image.src} alt={image.alt} width={500} height={500} />
    </main>
  );
}
