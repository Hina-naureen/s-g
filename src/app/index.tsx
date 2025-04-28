'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    gsap.from("#logo", { 
      duration: 1.5, 
      scale: 0, 
      opacity: 0, 
      rotation: 360, 
      ease: "elastic.out(1, 0.5)" 
    });
    gsap.from("#mainHeading", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from("#clinicHeading", { duration: 1, x: 100, opacity: 0, delay: 0.7 });
    gsap.from("#dateEvent", { duration: 1, y: 30, opacity: 0, delay: 0.9 });
    gsap.from("#connectTitle", { duration: 1, scale: 0.5, opacity: 0, delay: 1.1 });
    gsap.from("#podcast", { duration: 1, scale: 0.5, opacity: 0, delay: 1.3 });
  }, []);

  return (
    <div className="bg-[#061633] min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      
      {/* LOGO */}
      <div id="logo" className="mb-8">
        <Image 
          src="/logo.jpeg" 
          alt="Sufi Guidance Logo" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-yellow-400 shadow-lg object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="space-y-4 max-w-2xl">

        <h1 id="mainHeading" className="text-pink-500 text-4xl md:text-5xl font-bold">
          SUFI GUIDANCE<sup className="text-xs align-top">™</sup>
        </h1>

        <p id="clinicHeading" className="text-white text-2xl tracking-wider">
          Free Clinic
        </p>

        <div id="dateEvent" className="text-pink-500 text-2xl font-semibold">
          28<sup className="text-sm">th</sup> April
          <span className="block text-base text-white">Monday</span>
        </div>

        <div className="mt-4">
          <h2 className="text-yellow-400 text-2xl font-bold">THE DUBAI VIBE</h2>
          <p className="text-white mt-1">
            Love, Joy, Laughter & Happiness
          </p>
          <p className="text-white">
            Live on <a href="https://www.youtube.com/@sufiguidance" target="_blank" className="text-pink-500 font-semibold underline">Sufi Guidance<sup className="text-xs align-top">™</sup> Channel YT</a>
          </p>
        </div>

        <div id="connectTitle" className="mt-6">
          <h3 className="text-white text-lg">CONNECT WITH</h3>
          <h2 className="text-pink-500 text-2xl font-bold">
            RAZA ALI SHAH AL-ABIDI
          </h2>
          <p className="text-white text-sm mt-1">
            Numerologist | Psychic Reader | Gemologist
          </p>
        </div>

        <div className="mt-6">
          <p className="text-white">
            OFFICIAL PAYMENT LINE <br />
            <a href="https://wa.me/447909286400" target="_blank" className="text-pink-500 font-bold underline">
              +44 7909 286400
            </a>
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-yellow-400 text-lg font-semibold">
            SEGMENTS
          </h3>
          <p className="text-white text-sm">
            Testimonies & SG Support <br />
            Group Callings
          </p>
        </div>

        <div id="podcast" className="mt-8">
          <h2 className="text-yellow-400 text-3xl font-bold">
            PODCAST
          </h2>
          <p className="text-white text-lg">1117</p>
        </div>

        <div className="mt-8 text-sm">
          <p className="text-white">
            Sufi Guidance<sup className="text-xs align-top">™</sup> | UK | Dubai UAE | USA
          </p>
        </div>

        <div className="mt-4">
          <a href="https://sufiguidance.com" target="_blank" className="text-pink-500 underline">
            Find out more sufiguidance.com
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="https://wa.me/447909286400" target="_blank" className="text-white underline">
            WhatsApp
          </a>
          <a href="https://t.me/sufiguidance" target="_blank" className="text-white underline">
            Telegram
          </a>
          <a href="https://instagram.com/sufiguidance" target="_blank" className="text-white underline">
            Instagram
          </a>
          <a href="https://www.youtube.com/@sufiguidance" target="_blank" className="text-white underline">
            YouTube
          </a>
        </div>

      </div>
    </div>
  );
}
