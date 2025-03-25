"use client";
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();
    
    return (
        <div className="bg-gray-900 flex flex-col justify-start py-12 px-6">
            <div className="bg-gray-800 py-6 px-6 sm:p-8 rounded-2xl shadow-lg max-w-sm w-full mx-auto mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-400">Register</h1>
                <p className="text-gray-300 text-center mt-2">
                    Register to buy our products and contact us freely
                </p>
                
                <div className="mt-3 space-y-3">
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" 
                    />
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" 
                    />
                    <input 
                        type="number" 
                        placeholder="Enter your mobile no" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" 
                    />
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" 
                    />
                    
                    <button 
                        onClick={() => router.push('/login')} 
                        className="w-full bg-blue-500 text-white p-3 rounded-md mt-2 hover:bg-blue-600 transition">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
}
