"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function P2PLendingSection() {
  return (
    <section className="h-screen flex items-center justify-center px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-unbounded text-white mb-8">
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

          <Link
            className="text-black my-24 w-full border-black/20 hover:bg-gray-200 p-4 border bg-white "
            href="https://beta.fundora.biz/"
          >
            View the Beta
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
