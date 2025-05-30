"use client";

import { categories } from "@/data/fakedata";
import { menuItems } from "@/data/fakedata";

export const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-sm text-gray-300">
            We bring you handpicked articles on tech, travel, health, and more.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            {categories.map((item)=>(
              <li>{item.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            {menuItems.map((item)=>(
              <li>{item.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" aria-label="Twitter" className="hover:text-white">🐦</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">📸</a>
            <a href="#" aria-label="Facebook" className="hover:text-white">📘</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BLOG_COPYRIGHT}. All rights reserved.
      </div>
    </footer>
  );
};


