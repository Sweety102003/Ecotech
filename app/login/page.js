"use client";
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    
    return (
        <div className="bg-gray-900  flex flex-col justify-start py-12  px-6">
            <div className="bg-gray-800 py-6 px-6 sm:p-8 rounded-2xl shadow-lg max-w-sm w-full mx-auto mb-14">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-400">Login</h1>
                <p className="text-gray-300 text-center mt-2">
                    Login to buy our products and contact us freely
                </p>
                
                <div className="mt-4 space-y-3">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" 
                    />
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-400" 
                    />
                    
                    <button 
                        className="w-full bg-blue-500 text-white p-3 rounded-md mt-2 hover:bg-blue-600 transition">
                        Login Now
                    </button>
                </div>

                <div className="mt-3 text-center">
                    <p className="text-gray-300">Don't have an account?</p>
                    <button 
                        onClick={() => router.push('/register')} 
                        className="text-blue-400 hover:text-blue-300 transition font-semibold mt-1">
                        Register Here
                    </button>
                </div>
            </div>
        </div>
    );
}
