import { Link } from "react-router-dom";
import { CheckCircle, Zap } from "lucide-react";

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">

      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Content */}
        <div className="text-center">

          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Find Your Dream Job?
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with JobSphere. Start your journey today and unlock endless opportunities.
          </p>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle className="text-green-300 mb-3 mx-auto" size={32} />
              <h3 className="text-white font-semibold mb-2">5000+ Jobs</h3>
              <p className="text-blue-100 text-sm">Verified job listings from top companies</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="text-yellow-300 mb-3 mx-auto" size={32} />
              <h3 className="text-white font-semibold mb-2">Quick Apply</h3>
              <p className="text-blue-100 text-sm">Apply to jobs in just 2 minutes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle className="text-blue-300 mb-3 mx-auto" size={32} />
              <h3 className="text-white font-semibold mb-2">Track Progress</h3>
              <p className="text-blue-100 text-sm">Monitor all your applications in one place</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Get Started Now
              </button>
            </Link>

            <Link to="/jobs">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Browse Jobs
              </button>
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;
