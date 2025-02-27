"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import photo from "../images/photo.png";
import photo2 from "../images/photo23.png"
import photo1 from "../images/photo4.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
     
      <main className="p-12 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-12 space-y-6 md:space-y-0">
         <div>
          <h1 className="text-6xl font-bold text-blue-400">Masoaqua Innovations Private Limited</h1>
          <h1 className="text-2xl font-bold text-white-400 mt-2">"Transforming Waste into Innovation: Sustainable Solutions for a Greener Future"</h1>
          </div>
          <div className="p-2 rounded-xl">
          <Image src={photo} alt="EcoTech Hero" width={550} height={350} className="rounded-3xl " />
        </div></div>
        <h2 className="text-3xl font-semibold mt-16 text-blue-300">Innovating for a Greener Tomorrow</h2>
        <p className="mt-4 text-lg text-gray-300">
          Explore our eco-friendly solutions: The Water Surface Garbage Cleaning Bot &
          Sustainable Masonry Units.
        </p>
        <a href="/products" className="mt-6 inline-block bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          View Our Products
        </a>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-300">Our Products</h3>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <li className="p-6 bg-gray-800 shadow-md rounded-lg flex flex-col items-center">
              <h4 className="text-lg font-bold text-blue-400">Water Surface Garbage Cleaning Bot</h4>
              <Image src={photo} alt="Product Image" width={350} height={300} className="rounded-xl " />
              <p className="text-gray-300 mt-2 text-center">An autonomous bot to clean floating debris from water bodies.</p>
            </li>
            <li className="p-6 bg-gray-800 shadow-md rounded-lg flex flex-col items-center">
              <h4 className="text-lg font-bold text-blue-400">Eco-Friendly Masonry Units</h4>
              <Image src={photo2} alt="Product Image" width={350} height={250} className="rounded-xl" />
              <p className="text-gray-300 mt-2 text-center">Sustainable bricks made from industrial waste and treated sludge.</p>
            </li>
          </ul>
        </div>

        <div className="mt-16 bg-gray-800 p-10 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-semibold text-blue-400">Why Choose Us?</h3>
          <p className="text-gray-300 mt-4 text-lg">We are committed to sustainability, innovation, and delivering high-quality solutions for a cleaner planet.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md flex flex-col items-center">
              <h4 className="text-xl font-bold text-blue-300">🌿 Eco-Friendly Technology</h4>
              <p className="text-gray-300 mt-2 text-center">Pioneering green innovations that minimize environmental impact.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md flex flex-col items-center">
              <h4 className="text-xl font-bold text-blue-300">💰 Cost-Effective Solutions</h4>
              <p className="text-gray-300 mt-2 text-center">Affordable and sustainable alternatives for a better future.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md flex flex-col items-center">
              <h4 className="text-xl font-bold text-blue-300">👨‍🔬 Expert Team</h4>
              <p className="text-gray-300 mt-2 text-center">Industry professionals dedicated to delivering cutting-edge solutions.</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-300">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-300">Have questions? Reach out to us for more details about our products and services.</p>
          <a href="/contact" className="mt-6 inline-block bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Get in Touch</a>
        </div>
      </main>
      
      
    
    </div>
  );
}
