// src/pages/LandingPage.jsx
import config from "@/config/config";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const LandingPage = ({ onOpenInvitation }) => {
  const brideName = "Nikita";
  const groomName = "Sajal";

  const brideInitial = "N";
  const groomInitial = "S";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/40 to-white" />
      <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-rose-100/30 blur-3xl md:h-96 md:w-96" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-amber-100/25 blur-3xl md:h-96 md:w-96" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg sm:max-w-xl"
        >
          {/* Card Container */}
          <div className="relative overflow-hidden rounded-2xl border border-rose-100/70 bg-white/80 shadow-xl backdrop-blur-md">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,207,232,0.3),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-3 rounded-2xl border border-rose-100/40" />

            <div className="relative px-5 py-7 sm:px-8 sm:py-10">
              {/* Monogram */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-rose-200/80 bg-white shadow-inner sm:h-20 sm:w-20"
              >
                <span className="font-serif text-2xl text-rose-500 sm:text-3xl">
                  {brideInitial}
                  <span className="mx-1 text-rose-300">&</span>
                  {groomInitial}
                </span>
              </motion.div>

              {/* Intro Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-center"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.3rem] text-rose-400">
                  With blessings from our families
                </p>
                <h1 className="mt-2 font-serif text-2xl text-gray-800 sm:text-3xl">
                  You are cordially invited
                </h1>
              </motion.div>

              {/* Date and Time */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-6 flex justify-center"
              >
                <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-rose-100/70 bg-white/90 px-5 py-2 shadow-sm shadow-rose-100/70">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-500 shadow-sm">
                      <Calendar className="h-4 w-4" />
                    </span>
                    <span>9th March 2026</span>
                  </span>
                  <span className="hidden h-4 w-px bg-rose-100 sm:block" />
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-500 shadow-sm">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span>8:00 PM</span>
                  </span>
                </div>
              </motion.div>

              {/* Couple Names */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-8 text-center"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25rem] text-rose-300">
                  Celebrating the union of
                </p>
                <h2 className="mt-2 font-serif text-2xl text-gray-900 sm:text-3xl">
                  {brideName}
                  <span className="mx-2 text-rose-400">&</span>
                  {groomName}
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Join us for a multi-day Indian wedding filled with colour,
                  music, and heartfelt rituals as we celebrate the union of{" "}
                  {brideName} and {groomName}
                </p>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenInvitation}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-rose-200/60 sm:px-8"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Open Invitation
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.6 }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-5 text-center text-xs text-gray-500"
              >
                Venue: Kanak Garden (Lawn), NH-44, G.T. Road, Murthal, Sonipat
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
