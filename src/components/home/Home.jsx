import React from 'react'
import logo from "../../images/logo.png"
import { ArrowRightIcon } from "@heroicons/react/solid"
const Home = ({ history }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-700">
            <div className="flex items-center">
                <img src={logo} alt="" />
                <h2 className="text-5xl text-white">WorkEvent</h2>
            </div>
            <button onClick={() => history.push("/dashboard")} className="flex items-center 
            uppercase rounded-md text-white text-lg font-semibold border-2 border-white py-3 px-4 gap-6 mt-4
            hover:bg-white hover:text-black">
                Get started
                <ArrowRightIcon className="h-8" />
            </button>
        </div>
    )
}

export default Home
