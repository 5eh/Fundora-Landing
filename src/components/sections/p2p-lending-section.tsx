"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { WaitlistPopup } from "../waitlist/waitlist-popup";

export function P2PLendingSection() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section className="h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-r from-black to-gray-900">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Peer to Peer Lending Tools
          </h2>

          <div className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 space-y-4">
            <p>
              If you&apos;re the kind of business owner or creator who refuses
              to wait for permission—have we got a tool for you!
            </p>
            <p>Fundora puts you in control of getting access to capital.</p>
            <div className="flex flex-wrap justify-center gap-4 text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              <span>Easier.</span>
              <span>Faster.</span>
              <span>Cheaper.</span>
              <span>With Trust.</span>
            </div>
            <p className="mt-8">
              Wanna learn more? Skip to the front of the line and join our VIP
              list.
            </p>
          </div>

          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="py-4 px-8 md:px-12 font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg text-lg"
          >
            Join VIP List
          </button>
        </motion.div>
      </div>

      {/* Waitlist Popup */}
      <WaitlistPopup
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </section>
  );
}
