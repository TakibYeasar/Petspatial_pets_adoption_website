import React from 'react'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div className="container">
            <div className="mt-4 mb-4 bg-card-bg p-8">
                <h4 className="text-xl font-normal">Create a new account</h4>
                <form className="">
                    <div className="grid mt-2 mb-2">
                        <label className="text-base mt-2 mb-2">Email Address <span>*</span></label>
                        <input type="email" className="p-4 mt-4 mb-4" placeholder="email" />
                    </div>
                    <div className="grid mt-2 mb-2">
                        <label className="text-base mt-2 mb-2">Username <span>*</span></label>
                        <input type="email" className="p-4 mt-4 mb-4" placeholder="username" />
                    </div>
                    <div className="grid mt-2 mb-2">
                        <label className="text-base mt-2 mb-2">Password <span>*</span></label>
                        <input type="email" className="p-4 mt-4 mb-4" placeholder="password" />
                    </div>
                    <div className="grid mt-2 mb-2">
                        <label className="text-base mt-2 mb-2">Confirm Password <span>*</span></label>
                        <input type="email" className="p-4 mt-4 mb-4" placeholder="confirm_password" />
                    </div>
                    <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp