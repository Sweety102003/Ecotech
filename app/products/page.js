import Image from "next/image";
import photo from "../../images/photo.png";
import photo2 from "../../images/photo23.png";

export default function Product() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-12">
      <h1 className="text-4xl font-bold text-center text-blue-400">Our Innovative Products</h1>
      
      <section className="mt-12 bg-gray-800 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-blue-300 text-center">Water Surface Garbage Cleaning Bot</h2>
        <div className="flex flex-col md:flex-row items-center mt-8 space-y-6 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <p className="text-gray-300 mt-2">Water pollution is a major crisis, and this bot offers a scalable way to address it. By partnering with municipalities, environmental groups, and industries, we provide solutions for large-scale clean-ups.</p>
          </div>
          <div className="md:w-1/2">
            <Image src={photo} alt="Cleaning Bot" width={500} height={350} className="rounded-xl  " />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-blue-400">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>Autonomous navigation with advanced sensors.</li>
            <li>Solar-powered, cost-effective, and eco-friendly.</li>
            <li>V-shaped thruster system for efficient debris collection.</li>
            <li>Hexagonal waste compartment to prevent waterlogging.</li>
            <li>Hybrid control system for remote and manual operation.</li>
          </ul>
        </div>
        
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-blue-400">Applications</h3>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>Cleaning lakes, reservoirs, and urban water bodies.</li>
            <li>Marine clean-up operations to remove floating pollutants.</li>
            <li>Industrial wastewater treatment for regulatory compliance.</li>
            <li>Public-private partnerships for large-scale environmental conservation.</li>
          </ul>
        </div>

        
      </section>
      
      <section className="mt-16 bg-gray-800 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-blue-300 text-center">Eco-Friendly Masonry Units</h2>
        <div className="flex flex-col md:flex-row items-center mt-8 space-y-6 md:space-y-0 md:space-x-12">
         
          <div className="md:w-1/2">
            <p className="text-gray-300 mt-2">The construction industry is shifting towards sustainability. Our eco-bricks repurpose industrial waste and treated sludge to create durable, cost-effective, and eco-friendly masonry solutions.</p>
          </div>
          <div className="md:w-1/2">
          <Image src={photo2} alt="Masonry Units" width={500} height={350} className="rounded-xl " />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-blue-400">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>Utilizes industrial waste, reducing landfill pollution.</li>
            <li>High compressive strength and durability.</li>
            <li>Lightweight structure reducing overall building load.</li>
            <li>Fire-resistant and energy-efficient thermal insulation.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold text-blue-400">Applications</h3>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>Residential construction for sustainable housing.</li>
            <li>Commercial and industrial buildings requiring durable materials.</li>
            <li>Infrastructure development for roads, drainage, and landscaping.</li>
            <li>Fire-resistant structures in high-risk zones.</li>
          </ul>
        </div>

      
      </section>
      
     
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-blue-300">Get in Touch</h2>
        <p className="text-gray-300 mt-4">Have questions? Contact us to learn more about our sustainable solutions.</p>
        <a href="/contact" className="mt-6 inline-block bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Contact Now</a>
      </section>
     
    </div>
  );
}