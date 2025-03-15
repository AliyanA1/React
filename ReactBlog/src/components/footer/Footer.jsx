import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col space-y-4">
            <Link to="/">
              <Logo width="120px" />
            </Link>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold uppercase text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold uppercase text-gray-400 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold uppercase text-gray-400 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          Made by ❤️ AliyanA1
        </div>
      </div>
    </footer>
  );
}

export default Footer;
