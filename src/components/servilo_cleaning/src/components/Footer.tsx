import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D2A95E]">HomeServe</h3>
            <p className="text-gray-400">
              The easiest way to book reliable home services professionals.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D2A95E]">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Plumbing</li>
              <li>Electrical Work</li>
              <li>Home Cleaning</li>
              <li>Appliance Repair</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D2A95E]">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D2A95E]">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#D2A95E]/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HomeServe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;