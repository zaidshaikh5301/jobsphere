import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Share2, Send, ExternalLink } from "lucide-react";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              JobSphere
            </h2>

            <p className="text-gray-400 mb-6">
              Your one-stop platform to discover jobs, connect with recruiters, and build your career.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-full transition-colors" title="Share">
                <Share2 size={18} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-full transition-colors" title="Visit Website">
                <ExternalLink size={18} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-full transition-colors" title="Contact">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/jobs" className="hover:text-blue-400 transition-colors">Browse Jobs</Link></li>
              <li><Link to="/companies" className="hover:text-blue-400 transition-colors">Companies</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">Email</p>
                  <a href="mailto:support@jobsphere.com" className="hover:text-blue-400 transition-colors">support@jobsphere.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">Phone</p>
                  <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">+91 9876543210</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">Address</p>
                  <p>Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm">
              © {currentYear} JobSphere. All rights reserved. | Connecting Talent with Opportunity
            </p>

            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;