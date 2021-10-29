import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const Navbar = () => {
    const [authenticated, setAuthenticated] = useState(false);
    let history = useHistory();
    return (
        <nav className="bg-gray-800 sticky top-0 z-50">
            <div className="grid grid-cols-2 container mx-auto px-5 py-2">
                {/* left */}
                <ul className="flex items-center gap-8">
                    <li onClick={() => history.push("/")}>
                        <button className="text-white text-2xl">
                            WorkEvent
                        </button>
                    </li>
                    <li onClick={() => history.push("/dashboard")}>
                        <button className="text-gray-200">
                            Events
                        </button>
                    </li>
                </ul>
                {/* right */}
                {authenticated ?
                    <SignedInMenu />
                    :
                    <SignedOutMenu setAuthenticated={setAuthenticated} />
                }
            </div>
        </nav>
    )
}

export default Navbar
