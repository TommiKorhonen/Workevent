import React from 'react'
import { UserIcon } from "@heroicons/react/solid"
const ProfileCard = () => {
    return (
        <div className="grid grid-cols-2 mt-4 p-4 rounded-md
        border-black border-solid border bg-blue-50">
            <div className="flex flex-col items-center justify-center">
                <div>
                    <UserIcon className="h-24 text-gray-700" />
                </div>
                <div>
                    <p className="text-xl ">Billy</p>
                </div>
            </div>
            <div className="flex border-l border-black flex-col items-center justify-center">
                <div className="flex items-center  border-black border-b">
                    <p className="text-lg">Billy</p>
                </div>
                <p>Email@gmail.com</p>
                <p></p>
            </div>
        </div>
    )
}

export default ProfileCard
