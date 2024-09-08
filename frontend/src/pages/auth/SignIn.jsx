import React from 'react'

const Signin = () => {
    return (
        <div className="container">
            <div className="mt-4 mb-4 bg-card-bg p-8">
                <h4 className="text-xl font-normal">Sign in</h4>
                <p className="text-xl font-normal">Hello, Welcome to your account.</p>

                <form className="" role="form">
                    <div className="grid mr-8">
                        <label className="">Email Address <span>*</span></label>
                        <input type="email" className="p-4 mt-4 mb-4" />
                    </div>
                    <div className="grid mr-8">
                        <label className="">Password <span>*</span></label>
                        <input type="password" className="p-4 mt-4 mb-4" />
                    </div>
                    <div className="grid">
                        <label><input type="radio" className='text-xl font-normal m-2' />Remember me!</label>
                        <a href="#" className="text-xl font-normal m-2">Forgot your Password?</a>
                    </div>
                    <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Signin