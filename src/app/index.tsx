'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('#logo', { scale: 0, opacity: 0, duration: 1.2, rotate: 180 })
      .from('#mainHeading', { y: -50, opacity: 0, duration: 1 }, "-=0.5")
      .from('#eventDetails', { y: 30, opacity: 0, duration: 1 }, "-=0.5")
      .from('.fade-in', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8
      }, "-=0.6");
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => {
        console.error('Sound play failed:', e);
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#061633] to-[#0c244f] min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-y-auto">
      {/* Hidden Audio */}
      <audio ref={audioRef} src="/WhatsApp Audio 2025-03-13 at 10.09.25 PM.mp4" preload="auto" />

      {/* Logo */}
      <div id="logo" className="mb-6">
        <Image 
          src="/logo.jpeg" 
          alt="Sufi Guidance Logo" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-yellow-400 shadow-xl object-cover"
        />
      </div>

      {/* Heading */}
      <h1 id="mainHeading" className="text-pink-500 text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-md">
        SUFI GUIDANCE<sup className="text-xs align-top">™</sup>
      </h1>

      {/* Details */}
      <div id="eventDetails" className="text-white max-w-3xl space-y-6 mt-8">
        <h2 className="text-yellow-400 text-3xl font-bold fade-in">THE SOURCE MEDITATION UPCOMING EVENT</h2>
        <p className="text-lg fade-in">LOVE | HEALING | MANIFESTATION</p>

        <div className="fade-in space-y-2">
          <h3 className="text-pink-500 text-xl font-bold">Official Payment Line</h3>
          <p className="text-white text-lg">+44 7909 286400</p>
        </div>

        <div className="space-y-2 fade-in">
          <h3 className="text-yellow-400 text-xl font-semibold">What’s Included:</h3>
          <ul className="list-disc list-inside text-white text-left space-y-1">
            <li>Clearing & Cleansing of Aura</li>
            <li>Purification of Chakras</li>
            <li>Energy Boost Meditation</li>
            <li>Mindfulness Manifestation Meditation</li>
            <li>Water Cleansing</li>
            <li>Light Protection Shield Activation</li>
            <li>Powerful Energy Transmission</li>
          </ul>
        </div>

        <div className="space-y-2 fade-in">
          <h3 className="text-pink-500 text-xl font-semibold">Rates:</h3>
          <p>Pakistan/India: 5,500 PKR / 2,000 INR</p>
          <p>International: £20 / $25</p>
        </div>

        <p className="text-yellow-400 font-bold text-lg mt-4 fade-in">Limited Slots Only!</p>

        {/* Book Now Button with Sound */}
        <div className="mt-6 fade-in">
          <Link href="https://sufiguidance.com" target="_blank">
            <button
              onClick={playSound}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Book Now
            </button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-300 mt-10 fade-in">
          <p>Sufi Guidance™ | UK | Dubai UAE | USA</p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6 text-blue-300 text-sm fade-in">
          <a href="https://en.m.wikipedia.org/wiki/Shah_Ji" target="_blank" className="underline">Wikipedia: Barey Shah Ji</a>
          <a href="https://sufiguidance.com" target="_blank" className="underline">Visit Our Website</a>
          <a href="https://youtube.com/c/SufiGuidanceChannel" target="_blank" className="underline">YouTube Channel</a>
          <a href="https://instagram.com/sufiguidance" target="_blank" className="underline">Instagram Official</a>
          <a href="https://facebook.com/groups/sufiguidancewazaifsgc" target="_blank" className="underline">Wazaif Group</a>
          <a href="https://facebook.com/groups/sufiguidancehungamasgc" target="_blank" className="underline">Hungama Group</a>
          <a href="https://tiktok.com/@sufiguidanceofficial" target="_blank" className="underline">TikTok</a>
          <a href="https://facebook.com/groups/dreaminterpretationsandnumerology" target="_blank" className="underline">Dream & Numerology</a>
          <a href="https://facebook.com/SufiGuidanceSGC" target="_blank" className="underline">FB Page</a>
          <a href="https://whatsapp.com/channel/0029VaH2MMzAYlULrZb1X03a" target="_blank" className="underline">WhatsApp Channel</a>
          <a href="https://whatsapp.com/channel/0029VaAon23CnA7pc8XOGP2m" target="_blank" className="underline">Broadcast Group</a>
          <a href="https://wa.me/447909286400" target="_blank" className="underline">WhatsApp Direct</a>
          <a href="https://instagram.com/raza.ali.shah.al.abidi" target="_blank" className="underline">Instagram Personal</a>
        </div>
      </div>
    </div>
  );
}
