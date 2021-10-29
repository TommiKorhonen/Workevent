import React from 'react'
import { Link } from "react-router-dom"
const Register = () => {
    return (
        <section className="grid h-screen bg-loginSreen bg-cover">
            <div className="grid md:m-auto  px-8 bg-white shadow-lg md:rounded-md md:centerFlex md:flex-col w-full max-w-3xl mx-auto border-2 border-solid border-white">
                <form className="m-auto p-8 flex flex-col gap-4 w-full">
                    <h2 className="text-center text-2xl uppercase font-bold">Register</h2>
                    <label htmlFor="name" className="font-semibold">
                        Username
                        <input type="text" name="name" id="name" className="outline-none border-2 border-t-0 border-l-0 border-r-0 border-solid border-gray-700 p-2 w-full max-w-2xl" />
                    </label>
                    <label htmlFor="email" className="font-semibold">
                        E-mail
                        <input type="email" name="email" id="email" className="outline-none border-2 border-t-0 border-l-0 border-r-0 border-solid border-gray-700 p-2 w-full max-w-2xl" />
                    </label>
                    <label htmlFor="password" className="font-semibold">
                        Password
                        <input type="text" id="password" name="password"
                            className="outline-none border-2 border-t-0 border-l-0 border-r-0 border-solid border-gray-700 p-2 w-full max-w-2xl" />
                    </label>
                    <button className="rounded-full mt-4 p-2 text-xl  bg-transparent  text-white bg-blue-700 shadow-md" type="submit" value="Send" >Register</button>
                    <span className="text-gray-400 font-bold sm:text-left text-center">Already have an account?</span>
                    <Link to="/login" className="sm:self-start self-center">
                        <button type="button" className=" text-lg text-blue-700 font-semibold">
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    )
}

export default Register
