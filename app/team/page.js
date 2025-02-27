import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function Team() {
  const directors = [
    { name: "John Doe", email: "john@example.com", phone: "+1 234 567 8901" },
    { name: "Jane Smith", email: "jane@example.com", phone: "+1 234 567 8902" },
  ]

  const teamMembers = [
    { name: "Alice Johnson", email: "alice@example.com", phone: "+1 234 567 8903" },
    { name: "Bob Williams", email: "bob@example.com", phone: "+1 234 567 8904" },
    { name: "Charlie Brown", email: "charlie@example.com", phone: "+1 234 567 8905" },
    { name: "Diana Davis", email: "diana@example.com", phone: "+1 234 567 8906" },
    { name: "Ethan Evans", email: "ethan@example.com", phone: "+1 234 567 8907" },
    { name: "Fiona Foster", email: "fiona@example.com", phone: "+1 234 567 8908" },
    { name: "George Green", email: "george@example.com", phone: "+1 234 567 8909" },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-blue-400 mb-12">Meet Our Team</h1>

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
  )
}

function TeamMember({ name, email, phone, isDirector = false }) {
  return (
    <div
      className={`bg-gray-700 p-6 rounded-3xl shadow-md text-center w-full max-w-xs transform transition duration-300 hover:shadow-xl ${isDirector ? "hover:scale-105" : ""}`}
    >
      <Image
        src="/placeholder.svg?height=208&width=208"
        alt={name}
        width={208}
        height={208}
        className="rounded-full mx-auto border-4 border-blue-500 shadow-lg hover:border-blue-300 transition duration-300"
      />
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
  )
}

