import React from 'react'
import { UserIcon } from "@heroicons/react/solid"
import { BellIcon } from "@heroicons/react/outline"
import DropDown from './DropDown'
const SignedInMenu = () => {
    return (
        <div>
            <ul className="flex items-center justify-end gap-3">
                <li>
                    <BellIcon className="h-6 text-gray-300" />
                </li>
                <li className="bg-white p-1 rounded-full z-50">
                    <UserIcon className="h-8 text-gray-700" />
                </li>
                <DropDown />
            </ul>
        </div>
    )
}

export default SignedInMenu
