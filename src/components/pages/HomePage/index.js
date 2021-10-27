import React from 'react';
import { BsGraphDown, BsGraphUp, BsFunnel, BsDownload } from 'react-icons/bs';

import {
    Header,
    Footer,
    Breadcrumb,
    Sidebar,
    Charts
} from '../../reusables';

export default function HomePage() {
    return (
        <div className="h-screen max-h-screen flex">
            {/* Header */}

            {/* Sidebar */}

            {/* Main section */}
            <div className="absolute w-max lg:block md:static lg:max-h-screen lg:w-56 h-screen bg-white">
                <Sidebar />
            </div>
            <div className="w-full lg:flex lg:flex-col pt-24 lg:pt-14">
                <Header />
                <div className="bg-blue-50 px-4 py-2 flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center gap-2 h-14 w-full border-b">
                    <Breadcrumb className="hidden lg:inline-block w-max" crumbs={[{title: 'Home', link: '/#'}, {title: 'Reports', link: '/reports'}]} />
                    <div className="flex justify-between gap-4 lg:pr-4">
                        <button className="bg-gray-500 text-white min-w-max px-6 py-1 flex items-center justify-center gap-1">
                            <BsFunnel /> Filter
                        </button>
                        <button className="bg-gray-500 text-white min-w-max px-6 py-1 flex items-center justify-center gap-1">
                            <BsDownload /> Download
                        </button>
                    </div>
                </div>
                <div className="flex-grow flex flex-col lg:flex-row bg-pink-400">
                    <div className="h-full bg-blue-50 w-full lg:w-2/3">
                        <div className="grid grid-cols-12 bg-white m-4 p-4">
                            <div className="bg-gradient-to-br from-green-600 to-green-300 col-span-5 lg:col-span-3 h-20 flex justify-center items-center shadow-md">
                                <div className="flex gap-3">
                                    <div className="w-max p-2">
                                        <BsGraphUp size={35} color="#fff"/>
                                    </div>
                                    <div className="flex flex-col text-white">
                                        <span className="font-semibold text-md leading-5">Total Users</span>
                                        <span className="font-bold text-xl">356</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-red-600 to-red-300 col-span-5 lg:col-span-3 col-start-8 lg:col-start-5 h-20 flex justify-center items-center shadow-md">
                                <div className="flex gap-3">
                                    <div className="w-max p-2">
                                        <BsGraphDown size={35} color="#fff"/>
                                    </div>
                                    <div className="flex flex-col text-white">
                                        <span className="font-semibold text-md leading-5">User Retained</span>
                                        <span className="font-bold text-xl">56</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div type="button" className="bg-blue-600 col-span-5 col-start-8 lg:col-start-6 lg:col-span-4 h-24">Users Acquired</div> */}
                        </div>
                        <div className="bg-white mx-4 mb-4 py-4">
                            <div className="bg-red-600- px-4 mb-2 flex flex-col lg:flex-row lg:justify-between">
                                <h2 className="text-center lg:text-left text-2xl font-bold text-gray-700">Users' Acquisation</h2>
                                <div className="flex justify-end my-2">
                                    <span className="mr-2 text-sm font-medium text-gray-500">Showing for last</span>
                                    <select className="bg-gray-500 text-white text-sm px-1">
                                        <option>12 Months</option>
                                        <option>6 Months</option>
                                        <option>4 Months</option>
                                    </select>
                                </div>
                            </div>
                            <div className="h-60 lg:h-64 2xl:h-96 lg:pr-4 z-10">
                                <Charts.BarGraph />
                            </div>
                        </div>
                    </div>
                    <div className="h-full bg-blue-300 flex-grow flex">
                        <div className="flex-grow flex bg-blue-50 p-4">
                            <div className="bg-white w-full px-4 py-2 pb-4 lg:px-8 flex flex-col gap-8">
                                <div className="">
                                    <h2 className="text-center text-2xl font-bold text-gray-700">Users' Referrers</h2>
                                    <div className="flex justify-end my-2 mb-4">
                                        <span className="mr-2 text-sm font-medium text-gray-500">Sorting order</span>
                                        <select className="bg-gray-500 text-white text-sm px-1">
                                            <option>Ascending</option>
                                            <option>Descending</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <table className="w-full border-l border-r">
                                            <thead>
                                                <tr className="border-b bg-gray-100">
                                                    <th className="text-left text-gray-700 p-2">Source</th>
                                                    <th className="text-right text-gray-700 p-2">No. of users</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                <tr>
                                                    <td className="p-2 border-b">Facebook</td>
                                                    <td className="text-right p-2 border-b">67</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 border-b">Friends</td>
                                                    <td className="text-right p-2 border-b">24</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 border-b">Hauler App</td>
                                                    <td className="text-right p-2 border-b">45</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 border-b">Other sources</td>
                                                    <td className="text-right p-2 border-b">58</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="">
                                    <h2 className="text-center text-2xl font-bold text-gray-700">Users' Referrers</h2>
                                    <div className="flex justify-end my-2 mb-4">
                                        <span className="mr-2 text-sm font-medium text-gray-500">Sorting order</span>
                                        <select className="bg-gray-500 text-white text-sm px-1">
                                            <option>Ascending</option>
                                            <option>Descending</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <table className="w-full border-l border-r">
                                            <thead>
                                                <tr className="border-b bg-gray-100">
                                                    <th className="text-left text-gray-700 p-2">Source</th>
                                                    <th className="text-right text-gray-700 p-2">No. of users</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                <tr>
                                                    <td className="p-2 border-b">Facebook</td>
                                                    <td className="text-right p-2 border-b">67</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 border-b">Friends</td>
                                                    <td className="text-right p-2 border-b">24</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 border-b">Hauler App</td>
                                                    <td className="text-right p-2 border-b">45</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 border-b">Other sources</td>
                                                    <td className="text-right p-2 border-b">58</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="h-8">Footer</div> */}
                <Footer />
            </div>
        </div>
    )
}
