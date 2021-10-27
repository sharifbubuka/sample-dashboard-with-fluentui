import React from 'react';

import {
    Header,
    Footer,
} from '../../reusables';

export default function ReportsPage() {
    return (
        <div className="h-screen max-h-screen flex">
            {/* Header */}

            {/* Sidebar */}

            {/* Main section */}
            <div className="absolute hidden lg:block md:static lg:max-h-screen w-56 h-screen bg-red-700">Sidebar</div>
            <div className="w-full flex flex-col bg-blue-500">
                <Header />
                <div className="bg-green-500 h-24">Header</div>
                <div className="flex-grow flex flex-col lg:flex-row bg-pink-400 lg:overflow-y-hidden">
                    <div className="h-full bg-yellow-300 w-full lg:w-2/3">Primary Section
                        <div className="h-96">f</div>
                        <div className="h-96">f</div>
                    </div>
                    <div className="h-full bg-blue-300 flex-grow overflow-y-auto">Secondary Section</div>
                </div>
                {/* <div className="h-8">Footer</div> */}
                <Footer />
            </div>
        </div>
    )
}
