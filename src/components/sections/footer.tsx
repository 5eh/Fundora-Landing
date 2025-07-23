"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-r from-gray-700 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  onClick={() => setIsTermsOpen(true)}
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  Terms & Conditions
                </Button>
              </div>

              <div className="border-t border-gray-600 pt-8">
                <p className="text-gray-400 text-sm">
                  © 2024 Fundora. All rights reserved. | Wyoming-based P2P
                  lending platform
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Not FDIC-insured. Digital assets involve risk. See Terms &
                  Conditions for full details.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                Fundora Terms & Conditions
              </h2>
              <Button
                onClick={() => setIsTermsOpen(false)}
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="p-6 text-gray-300 space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By accessing or using the Fundora website, platform, or
                  related services (collectively, the &quot;Services&quot;), you
                  agree to these Terms, our Privacy Policy, and any applicable
                  laws. If you do not agree, you may not use the Services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  2. About Fundora
                </h3>
                <p>
                  Fundora is a Wyoming-based peer-to-peer lending platform for
                  small businesses and creators, currently operating as part of
                  the Wyoming Stable Token (WYST) Pilot Program. Fundora does
                  not operate as a bank, broker-dealer, or investment advisor
                  and is not FDIC-insured.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  3. Eligibility
                </h3>
                <p className="mb-2">You must:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Be at least 18 years old.</li>
                  <li>
                    Be a U.S. resident or business operating in an eligible
                    jurisdiction.
                  </li>
                  <li>Pass identity verification (KYC).</li>
                </ul>
                <p className="mt-2">
                  Fundora may deny or terminate accounts at its discretion.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  4. Wyoming Stable Token & Digital Assets
                </h3>
                <p>
                  The Wyoming Stable Token (WYST) is a state-issued digital
                  token backed by U.S. Treasuries. Digital assets are not legal
                  tender, are not insured, and may be subject to volatility and
                  regulation. Fundora is not responsible for price changes or
                  wallet access loss.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  5. Lending & Borrowing Terms
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Loans (&quot;FACTS&quot;) are private agreements between
                    users, documented via smart contracts.
                  </li>
                  <li>
                    Fundora only provides technology and facilitation, not
                    guarantees of funding, repayment, or returns.
                  </li>
                  <li>
                    Rates, terms, and availability can change at any time.
                  </li>
                  <li>Fundora may charge admin or subscription fees.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  6. Risk Disclosure
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Borrowing and lending involve risk, including loss of funds.
                  </li>
                  <li>No repayment guarantee for lenders.</li>
                  <li>No guarantee of future liquidity or offers.</li>
                  <li>
                    Collateralized or unsecured loans may lead to partial or
                    total loss.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  7. No Investment Advice
                </h3>
                <p>
                  Nothing on this platform is investment, financial, or legal
                  advice. Do your own research.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  8. Regulatory Compliance
                </h3>
                <p>
                  Fundora complies with Wyoming law. Lending may not be
                  available in all states. You are responsible for knowing your
                  local rules.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  9. Privacy & Data
                </h3>
                <p>We process your information per our Privacy Policy.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  10. Limitation of Liability
                </h3>
                <p className="mb-2">Fundora is not liable for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Loss of funds or digital assets</li>
                  <li>Technical failures or outages</li>
                  <li>Indirect or consequential damages</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  11. Arbitration & Dispute Resolution
                </h3>
                <p>
                  Any disputes will be resolved via binding arbitration under
                  the AAA rules in Cheyenne, Wyoming (or virtually if agreed).
                  You waive your right to a jury trial.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  12. Class Action Waiver
                </h3>
                <p>
                  All disputes must be brought individually, not as part of a
                  class action or group proceeding.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  13. Governing Law
                </h3>
                <p>These Terms are governed by Wyoming law.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">
                  14. Indemnification
                </h3>
                <p className="mb-2">
                  You agree to indemnify and hold harmless Fundora, its
                  affiliates, employees, and partners from any claims, losses,
                  or expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your use of the Services</li>
                  <li>Breach of these Terms</li>
                  <li>Violations of law</li>
                  <li>Misuse of Wyoming Stable Token or digital assets</li>
                </ul>
                <p className="mt-2">
                  Fundora reserves the right to control any matter requiring
                  indemnification.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
