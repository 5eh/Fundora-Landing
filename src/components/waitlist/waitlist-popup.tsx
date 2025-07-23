"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "../ui/button";

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !name) {
      setError("Please fill out all fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      // In a real implementation, you would send this data to your API
      console.log("Submitting waitlist request:", { name, email });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-xl bg-[#212529] border border-white/10 shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-6">
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Join the Fundora VIP List
                </h2>
                <p className="text-gray-300">
                  Skip to the front of the line and get exclusive early access
                  to our peer-to-peer lending platform.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-200 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:outline-none text-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-200 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:outline-none text-white"
                      placeholder="Enter your email"
                    />
                  </div>

                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <Button
                    type="submit"
                    className="w-full py-6 h-auto text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
                  >
                    Join VIP List
                  </Button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    By joining our VIP list, you agree to receive exclusive
                    updates about Fundora. We respect your privacy and will
                    never share your information.
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Welcome to the VIP List!
                  </h3>
                  <p className="text-gray-300">
                    You&apos;ve been added to our VIP list. You&apos;ll be among
                    the first to access Fundora when we launch!
                  </p>
                  <Button
                    onClick={onClose}
                    className="mt-6 bg-white/10 hover:bg-white/20 text-white"
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
