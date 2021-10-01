import React from 'react'
import { UserIcon } from "@heroicons/react/solid"
import { BellIcon } from "@heroicons/react/outline"
const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="grid grid-cols-2 px-5 py-2">
                {/* left */}
                <ul className="flex items-center gap-8 ">
                    <li>
                        <h2 className="text-white text-2xl">WorkEvent</h2>
                    </li>
                    <li>
                        <p className="text-gray-200">Events</p>
                    </li>
                    <li>
                        <p className="text-gray-200">Create Event</p>
                    </li>
                </ul>
                {/* right */}
                <ul className="flex items-center justify-end gap-3">
                    <li>
                        <BellIcon className="h-6 text-gray-300" />
                    </li>
                    <li className="bg-white p-1 rounded-full z-50">
                        <UserIcon className="h-8 text-gray-700" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
