"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Nunito } from 'next/font/google'
import Leaderboard from '@/components/Leaderboard';

const font = Nunito({
  display: 'swap',
  preload: true,
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
});

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
  link: 'https://www.reddit.com/user/spez',
};

export default function Home() {
  const [image, setImage] = useState(images.HappySpez);
  const [startAnimation, setStartAnimation] = useState(false);
  const [clickSound] = useState(() => {
    if (typeof window !== 'undefined') {
      return new Audio('/click-sound.mp3');
    }
  });
  const [count, setCount] = useState(0);


  const handleMouseDown = () => {
    setCount(prevCount => prevCount + 1);
    setImage(images.SadSpez);
    clickSound && clickSound.play();
    if (typeof window !== 'undefined') {
      localStorage.setItem('count', String(count + 1));
    }
    setStartAnimation(true);
  };

  const handleMouseUp = () => {
    setImage(images.HappySpez);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localCount = localStorage.getItem('count');
      if (localCount) {
        setCount(Number(localCount));
      } else {
        localStorage.setItem('count', String(count));
      }
    }
  }, [count]);

  return (
    <main
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="flex min-h-screen flex-col items-center justify-between p-24 font-Nunito"
    >
      <div className={`flex flex-col gap-12 items-center ${font.variable}`}>
        <h1 className="text-7xl font-bold">
          Fuck <Link className='font-normal underline text-[#ff4500]' href={spez.link}>u/Spez</Link>
        </h1>
        <p className="text-5xl font-medium">{count}</p>
      </div>
      <div
        className={`${
          startAnimation && 'transition ease-in duration-75 scale-150' && 
          (image === images.SadSpez ? `scale-[102%]` : '')
        }`}
      >
        <Image src={image.src} alt={image.alt} width={500} height={500} />
      </div>
      <Leaderboard />
    </main>
  );
}
