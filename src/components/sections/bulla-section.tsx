"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BullaSection() {
  return (
    <section className="h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bulla
            </h2>

            <p className="text-xl text-gray-300 mb-6">
              Fundora is powered by Bulla Network
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Do more, earn more, onchain.
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              Blockchain powered business, finance and accounting tools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 backdrop-blur-sm border border-white/10">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/partners/bulla.png"
                  alt="Bulla Network"
                  width={200}
                  height={200}
                  className="object-contain filter brightness-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
