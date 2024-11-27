import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // For navigation
import { loginUser } from '../../../redux/features/auth/authApi';
import { resetAuthState } from '../../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

const SignIn = () => {
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth); // Access auth state
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // State for 'Remember Me' checkbox

    useEffect(() => {
        if (isAuthenticated) {
            toast.success('Login successful!'); // Display success toast
            navigate('/'); // Redirect to homepage on successful login
        }

        if (error) {
            toast.error(error.message || 'Login failed!'); // Show error message
        }

        return () => {
            dispatch(resetAuthState()); // Reset auth state on unmount
        };
    }, [isAuthenticated, error, dispatch, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password, rememberMe })); // Dispatch login action with rememberMe flag
    };

    const handleClose = () => {
        navigate("/"); // Redirect to home on close
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative w-full max-w-md bg-white shadow-lg rounded-lg p-8 bg-gradient-to-br from-white via-gray-50 to-gray-100">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    &#x2715; {/* Close icon */}
                </button>

                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Sign In</h2>
                <p className="text-gray-600 text-center mb-8">
                    Welcome back! Please enter your credentials to access your account.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <label className="inline-flex items-center text-gray-700">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="form-checkbox h-4 w-4 text-primary transition duration-300"
                            />
                            <span className="ml-2 text-sm">Remember me</span>
                        </label>
                        <a
                            href="/forgot-pass"
                            className="text-sm text-primary hover:text-secondary transition duration-300"
                        >
                            Forgot your password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-primary text-white py-3 rounded-md shadow-lg font-medium transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary'
                            }`}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Don't have an account?
                        <a
                            href="/sign-up"
                            className="text-primary font-medium ml-1 hover:text-secondary transition duration-300"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
