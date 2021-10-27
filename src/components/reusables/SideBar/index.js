import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const homePageLinks = [{title: 'Users', link: ''}, {title: 'Tickets', link: ''}, {title: '', link: ''}, {title: '', link: ''}];
const reportsPageLinks = [{title: '', link: ''}, {}, {}, {}];

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    function getSidebarLinks() {
        if (location.pathname.match('/reports')) {
            return reportsPageLinks;
        }
        return homePageLinks;
    }

    return (
        <div className={`fixed ${sidebarOpen ? 'static' : 'hidden'} lg:static top-0 w-2/3 lg:w-48 bg-gray-500 h-screen overflow-y-auto z-40 py-3`}>
            {/* {getSidebarLinks()[0]} */}
            <div className="flex flex-col px-4">
                <div className="flex gap-4 lg:justify-center">
                    <div className="w-4/5 py-1 text-center shadow-lg rounded bg-white">
                        <span className="font-bold text-green-400">Admin</span>
                    </div>
                    <div className="w-1/5 bg-red-400 text-center lg:hidden" onClick={() => setSidebarOpen(prevState => !prevState)}>Bars</div>
                </div>
            </div>
        </div>
    )
}
