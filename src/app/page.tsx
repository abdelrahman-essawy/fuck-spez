"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = {
  HappySpez: {
    src: '/happy-spez-image.webp',
    alt: 'Happy Spez Image',
  },
  SadSpez: {
    src: '/sad-spez-image.webp',
    alt: 'Sad Spez Image',
  },
};

const spez = {
  name: 'Steve Huffman',
  images: images,
  description: 'CEO of Reddit',
};

const clickSound = new Audio('/click-sound.mp3');

export default function Home() {
  const [image, setImage] = useState(images.HappySpez);
  const [startAnimation, setStartAnimation] = useState(false);
  const [deg, setDeg] = useState(3);
  const [count, setCount] = useState(() => {
    const localCount = localStorage.getItem('count');
    return Number(localCount) || 0;
  });

  const handleMouseDown = () => {
    setCount(prevCount => prevCount + 1);
    setImage(images.SadSpez);
    clickSound.play();
    localStorage.setItem('count', String(count + 1));
    setStartAnimation(true);
  };

  const handleMouseUp = () => {
    setImage(images.HappySpez);
  };

  useEffect(() => {
    const localCount = localStorage.getItem('count');
    if (localCount) {
      setCount(Number(localCount));
    } else {
      localStorage.setItem('count', String(count));
    }
  }, []);

  return (
    <main
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-7xl font-bold">Fuck Spez</h1>
        <p className="text-3xl font-medium">{count}</p>
      </div>
      <div
        className={`${startAnimation && "transition ease-in duration-75 scale-150" && (
          image === images.SadSpez ?
          `scale-[102%]` :
            ``
        )}`}
      >
        <Image src={image.src} alt={image.alt} width={500} height={500} />
      </div>
    </main>
  );
}
