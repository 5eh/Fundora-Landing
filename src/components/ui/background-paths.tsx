"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./button";
import { WaitlistPopup } from "../waitlist/waitlist-popup";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white opacity-30"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({ title = "FUNDORA" }: { title?: string }) {
  const words = title.split(" ");
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Platform data array
  const platforms = [
    {
      id: 1,
      title: "Bulla Network",
      image: "/partners/bulla.png",
      description:
        "Integrated blockchain solution that provides secure and transparent financial services.",
    },
    {
      id: 2,
      title: "Wyoming State",
      image: "/partners/bulla.png",
      description:
        "Supporting our testnet development to change the US economy for the great.",
    },
    {
      id: 3,
      title: "Produce Matrix",
      image: "/partners/bulla.png",
      description: "The first blockchain produce bazaar.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background paths with floating animations */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Bottom fade gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div className="relative z-20 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text
                               bg-gradient-to-r from-white to-gray-200
                               tracking-wide mx-[1.5px]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <Button
            onClick={() => setIsWaitlistOpen(true)}
            className="block mx-auto w-full md:w-auto mb-6 py-4 px-8 md:px-12 flex items-center justify-center font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg text-lg"
          >
            Join Waitlist
          </Button>

          <Link href="https://my.visme.co/view/jw7pzowv-fundora-poc-deck">
            <Button
              className="group h-auto gap-4 py-3 text-left text-white border-white/20 bg-[#212529]/20 hover:bg-[#212529]/40 backdrop-blur-2xl"
              variant="outline"
            >
              <div className="space-y-1">
                <h3>We provide liquidity</h3>
                <p className="whitespace-break-spaces font-normal text-gray-300">
                  Our blockchain platform connects businesses with decentralized
                  financial solutions through transparent systems, enabling
                  equitable access to capital for sustainable growth across
                  Wyoming and beyond.
                </p>
              </div>
              <ChevronRight
                className="opacity-80 transition-transform group-hover:translate-x-0.5 text-white"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </Link>
        </motion.div>

        {/* 3-column grid with images */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="px-6 flex flex-col items-center text-center"
              >
                <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-lg bg-black/30 p-2 flex items-center justify-center">
                  <Image
                    src={platform.image}
                    alt={platform.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {platform.title}
                </h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Waitlist Popup */}
      <WaitlistPopup
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}
