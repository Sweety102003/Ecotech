"use client"
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
                <h1 className="text-4xl font-bold text-center text-blue-400">Register</h1>
                <p className="text-gray-300 text-center mt-3">Register to buy our products and contact us freely</p>
                
                <div className="mt-4 space-y-4">
                    <input type="text" placeholder="Enter your name" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" />
                    <input type="email" placeholder="Enter your email" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" />
                    <input type="number" placeholder="Enter your mobile no" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" />
                    <input type="password" placeholder="Enter your password" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" />
                    
                    <button onClick={() => router.push('/login')} 
                        className="w-full bg-blue-500 text-white p-3 rounded-md mt-2 hover:bg-blue-600 transition">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
}
