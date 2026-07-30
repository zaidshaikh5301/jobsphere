import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BriefcaseBusiness, ArrowRight } from "lucide-react";

import Button from "../common/Button";
import SearchBar from "./SearchBar";
import HeroStats from "./HeroStats";
import TrustedCompanies from "./TrustedCompanies";
import AnimatedBackground from "../common/AnimatedBackground";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-8">

              <BriefcaseBusiness size={18} />

              <span>India's Smart Job Portal</span>

            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">

              Find Your

              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dream Job
              </span>

              With Confidence

            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-9 max-w-xl">

              Discover verified opportunities from leading companies,
              apply in seconds, and build the career you've always wanted.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link to="/jobs">
                <Button size="lg">
                  Browse Jobs
                </Button>
              </Link>

              <Link to="/auth">
                <Button
                  variant="outline"
                  size="lg"
                >
                  Get Started

                  <ArrowRight
                    size={18}
                    className="ml-2"
                  />

                </Button>
              </Link>

              <Link
                to="/recruiter/dashboard"
                className="border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Recruiter Panel
              </Link>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="backdrop-blur-xl bg-white/80 border border-white shadow-2xl rounded-[32px] p-8">

              <SearchBar />

            </div>

          </motion.div>

        </div>

        <HeroStats />

        <TrustedCompanies />

      </div>

    </section>
  );
}

export default Hero;