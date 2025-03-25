import Image from "next/image";
import sustain from "../../images/activity.jpg";

export default function Activity() {
  return (
    <div className="text-center bg-gray-900  py-10 mb-0" >
      <h1 className="font-bold text-3xl mb-6 text-blue-400">
        Events Conducted by Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  px-8 mt-4 md:px-12 m-auto">
        <div className="bg-gray-800 shadow-lg rounded-lg p-4 " >
          <Image 
            className="w-full  h-auto rounded-lg"
            src={sustain}
            alt="Sustainability Event"
          />
          <p className="text-white mt-2 ">
            A campaign focused on promoting eco-friendly practices.
          </p>
        </div>
      </div>
    </div>
  );
}
