"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";
import Link from "next/link";
import { FiAlignJustify, FiX } from "react-icons/fi";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar */}
        <header className="bg-blue-700 text-white p-6 shadow-md">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">EcoTech</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/products" className="hover:text-gray-300 font-medium">Products</Link>
              <Link href="/team" className="hover:text-gray-300 font-medium">Team Members</Link>
              <Link href="/contact" className="hover:text-gray-300 font-medium">Contact Us</Link>
              <Link href="/login" className="hover:text-gray-300 font-medium">Login</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white text-3xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiAlignJustify />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`${menuOpen ? "block" : "hidden"} md:hidden bg-blue-800 p-4 absolute top-20 left-0 right-0 shadow-md`}>
            <nav className="flex flex-col space-y-4 text-center">
              <Link href="/products" className="hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link href="/team" className="hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Team Members</Link>
              <Link href="/contact" className="hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              <Link href="/login" className="hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Login</Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-950 text-white text-center p-6">
          <p>© 2025 EcoTech Innovations. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
