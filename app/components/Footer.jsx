"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 lg:px-0 grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed">
            Learn new skills, upgrade your career, and unlock your potential
            with expert-led online courses—anytime, anywhere.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a className="hover:text-orange-500" href="#">
              <FaFacebookF />
            </a>
            <a className="hover:text-orange-500" href="#">
              <FaInstagram />
            </a>
            <a className="hover:text-orange-500" href="#">
              <FaTwitter />
            </a>
            <a className="hover:text-orange-500" href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-orange-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-orange-500" href="#">
                All Courses
              </a>
            </li>
            <li>
              <a className="hover:text-orange-500" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-orange-500" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-orange-500" href="#">
                Web Development
              </a>
            </li>
            <li>
              <a className="hover:text-orange-500" href="#">
                Design
              </a>
            </li>
            <li>
              <a className="hover:text-orange-500" href="#">
                Marketing
              </a>
            </li>
            <li>
              <a className="hover:text-orange-500" href="#">
                Business
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-orange-500" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-orange-500" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="hover:text-orange-500" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-orange-500" href="#">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CourseMaster. All rights reserved.
      </div>
    </footer>
  );
}
