import React from 'react';

export default function NavigationHeader() {

    return (
        <div className="bg-blue-50 z-50 py-2 w-full pb-0 lg:pb-2 flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 justify-center border-b fixed top-0 h-24 lg:h-14">
            <div className="lg:mt-0 lg:w-3/5">
                <input
                    type="text"
                    name="search"
                    placeholder="Enter field to search"
                    className="w-full px-2 py-1 border border-black"
                />
            </div>
            <div className="flex justify-between items-center">
                <div className="bg-green-400 lg:hidden my-2 py-1 px-6 text-white w-max">Admin</div>
                <button type="button" className="bg-green-400 py-1 px-6 text-white lg:hidden">Bars</button>
            </div>
            <div className="hidden lg:block">Hello</div>
        </div>
    )
}
