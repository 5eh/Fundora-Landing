"use client";

import { motion } from "framer-motion";
import { Shield, DollarSign, Building2 } from "lucide-react";
import { Button } from "../ui/button";

export function WystSection() {
  return (
    <section className="h-screen flex items-center justify-center px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-unbounded text-white mb-8">
            Wyoming Stabletoken [WYST]
          </h2>

          <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              Fundora participates in the Wyoming Stabletoken pilot project and
              fully supports the innovation and trust of the Wyoming
              Stabletoken.
            </p>

            <Button
              className="group h-auto gap-4 py-3 text-left text-white border-white/20 bg-[#212529]/20 hover:bg-[#212529]/40 backdrop-blur-2xl"
              variant="outline"
            >
              <div className="space-y-1">
                <h3>We provide liquidity</h3>
                <p className="whitespace-break-spaces font-normal text-gray-300">
                  &quot;A Wyoming stable token is a virtual currency
                  representative of and redeemable for one (1) United States
                  dollar held in trust by the state of Wyoming as provided by
                  W.S.40‑31‑106. Stable tokens shall only be issued in exchange
                  for United States dollars.&quot;
                </p>
              </div>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6  border border-stone-800 bg-stone-600/10"
          >
            <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold font-unbounded text-white mb-3">
              State-Backed Trust
            </h3>
            <p className="text-gray-300">
              Backed by the state of Wyoming with full regulatory compliance and
              oversight.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6  border border-stone-800 bg-stone-600/10"
          >
            <DollarSign className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold font-unbounded  text-white mb-3">
              1:1 USD Parity
            </h3>
            <p className="text-gray-300">
              Each token represents and is redeemable for exactly one US dollar
              held in trust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6  border border-stone-800 bg-stone-600/10"
          >
            <Building2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold font-unbounded text-white mb-3">
              Pilot Innovation
            </h3>
            <p className="text-gray-300">
              Part of Wyoming&apos;s pioneering approach to digital currency and
              blockchain technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
