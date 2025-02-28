import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import image2 from "../../images/photo4.jpg";
import image3 from "../../images/megha.jpg";
import image4 from "../../images/tushar.jpeg";
import image5 from "../../images/disha.jpg";
import image6 from "../../images/manpreet.jpg";
import image7 from "../../images/anisha.jpg";
import image8 from "../../images/vishawajeet.jpg";
import defaultImage from "../../images/photo4.jpg"; 

export default function Team() {
  const directors = [
    { name: "Vishwajeet Singh", email: "vishwajeet.na@pwr.edu.pl", phone: "+91 9045065328", image: image8 },
    { name: "Jane Smith", email: "jane@example.com", phone: "+1 234 567 8902" },
  ];

  const teamMembers = [
    { name: "Sweety", email: "sweety@me.iitr.ac.in", phone: "+91 9812483249", image: image2 },
    { name: "Tushar Dahiya", email: "tushar_d@me.iitr.ac.in", phone: "+91 9166120945", image: image4 },
    { name: "Megha Choudhary", email: "megha_c@me.iitr.ac.in", phone: "+91 8955968554", image: image3 },
    { name: "Arpit Kumar Meena", email: "arpit_km@me.iitr.ac.in", phone: "+91 9509754592" },
    { name: "Manpreet", email: "manpreet@me.iitr.ac.in", phone: "+91 8950237923", image: image6 },
    { name: "Pancholi Dishaben Hemantkumar", email: "dishapan25@gmail.com", phone: "+91 7862932531", image: image5 },
    { name: "Anisha Samantaray", email: "anisha_s@me.iitr.ac.in", phone: "+91 8302008119", image: image7 },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-blue-400 mb-12">
        Meet Our Team
      </h1>

      <section className="bg-gray-800 p-6 sm:p-10 rounded-lg shadow-lg text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-300 mb-8">Our Directors</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {directors.map((director, index) => (
            <TeamMember key={index} {...director} isDirector />
          ))}
        </div>
      </section>

      <section className="bg-gray-800 p-6 sm:p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-400 mb-8">Our Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}

function TeamMember({ name, email, phone, image, isDirector = false }) {
  return (
    <div
      className={`bg-gray-700 p-6 rounded-3xl shadow-md text-center w-full max-w-xs transform transition duration-300 hover:shadow-xl ${
        isDirector ? "hover:scale-105" : ""
      }`}
    >
      <div className="w-52 h-52 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:border-blue-300 transition duration-300">
        <Image
          src={image || defaultImage}
          alt={name}
          width={208}
          height={208}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-bold text-blue-400 mt-4 mb-2">{name}</h3>
      <p className="text-gray-300 flex items-center justify-center gap-2 mb-1">
        <Mail size={16} className="text-blue-400" />
        <a href={`mailto:${email}`} className="hover:text-teal-300 transition duration-300">
          {email}
        </a>
      </p>
      <p className="text-gray-300 flex items-center justify-center gap-2">
        <Phone size={16} className="text-blue-400" />
        {phone}
      </p>
    </div>
  );
}
