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

 const data = [
    {
      countryName: 'Egypt',
      participants: 123,
      count: 14231,
      countryCode: 'eg',
    },
    {
      countryName: 'United States',
      participants: 231,
      count: 23424,
      countryCode: 'us',
    },
    {
      countryName: 'Canada',
      participants: 234,
      count: 2435234,
      countryCode: 'ca',
      },
        {
      countryName: 'Egypt',
      participants: 123,
      count: 14231,
      countryCode: 'eg',
    },
    {
      countryName: 'United States',
      participants: 231,
      count: 23424,
      countryCode: 'us',
    },
    {
      countryName: 'Canada',
      participants: 234,
      count: 2435234,
      countryCode: 'ca',
      },
    
  ];

export default function Home() {
  const [isSpezHappy, setIsSpezHappy] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [userLocation, setUserLocation] = useState<null | UserLocation>(null);

  const [clickSound] = useState(() => {
    if (typeof window !== 'undefined') {
      return new Audio('/click-sound.mp3');
    }
  });
  const [count, setCount] = useState(0);


  const handleMouseDown = () => {
    setCount(prevCount => prevCount + 1);
    setIsSpezHappy(true);
    clickSound && clickSound.play();
    if (typeof window !== 'undefined') {
      localStorage.setItem('count', String(count + 1));
    }
    setStartAnimation(true);
  };

  const handleMouseUp = () => {
    setIsSpezHappy(false);
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
  
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setUserLocation({
        countryName: data.country_name,
        countryCode: data.country_code,
      }));
  }, []);

<Image priority src={images.SadSpez.src} alt={images.SadSpez.alt} width={500} height={500} quality={1}/> // to be optimized
  return (
    <main
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="flex min-h-screen flex-col items-center justify-between md:p-8 pt-8 font-Nunito"
    >
      <div className={`flex flex-col gap-12 items-center ${font.variable}`}>
        <h1 className="md:text-7xl text-5xl font-bold">
          Fuck <Link className='font-normal underline text-[#ff4500]' href={spez.link}>u/Spez</Link>
        </h1>
        <p className="text-5xl font-medium">{count}</p>
      </div>
      <div
        className={`${
          startAnimation && 'transition ease-in duration-75 scale-150' && 
          (isSpezHappy ? `scale-[102%]` : '')
        }`}
      >
        {isSpezHappy ?
          <Image priority src={images.HappySpez.src} alt={images.HappySpez.alt} width={500} height={500} quality={75} /> :
          <Image priority src={images.SadSpez.src} alt={images.SadSpez.alt} width={500} height={500} quality={75}/> 
          }
      </div>
      <Leaderboard data={data} userLocation={userLocation} />
    </main>
  );
}
