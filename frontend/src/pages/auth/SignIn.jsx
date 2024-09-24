import React from 'react';

const Signin = () => {
    return (
        <div className="container flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 bg-gradient-to-br from-white via-gray-50 to-gray-100">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Sign In</h2>
                <p className="text-gray-600 text-center mb-8">Welcome back! Please enter your credentials to access your account.</p>

                <form className="" role="form">
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password <span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <label className="inline-flex items-center text-gray-700">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary transition duration-300" />
                            <span className="ml-2 text-sm">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-primary hover:text-secondary transition duration-300">Forgot your password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-md shadow-lg font-medium hover:bg-secondary transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">Don't have an account?
                        <a href="#" className="text-primary font-medium ml-1 hover:text-secondary transition duration-300">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
