import React from 'react'
import { trains } from '../data/train'
import { FaTrain } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";


function Train() {

    const handleTicket = (num, name) => {
        alert(`TRAIN NO : ${num} : TRAIN NAME : ${name}- Added to your journey`);
    }
    return (
        <div className='min-h-screen mx-auto p-6 bg-gray-200'>
            <h2 className='text-2xl mb-8 font-medium'>Train Status</h2>
            <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    trains.map(data => (
                        <div className='bg-white shadow-md p-4 rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 
                         transition-all duration-300 ease-in-out ' key={data.no}>
                            <img src={data.image} alt="" className='w-full h-40 object-cover rounded-md' />
                            <h3 className='text-lg font-semibold flex items-center gap-2'>
                                <FaTrain className="text-blue-500" />{data.trainName}</h3>
                            <p className='text-sm text-gray-500 mb-3'>{data.trainNumber}</p>
                            <div className="flex items-center justify-between mb-3 ">
                                <div>
                                    <p className="text-sm text-gray-500">{data.from}</p>
                                    <p className="font-bold">{data.departure}</p>
                                </div>
                                <IoIosArrowForward className="text-xl text-gray-600" />
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">{data.to}</p>
                                    <p className="font-bold">{data.arrival}</p>
                                </div>
                            </div>
                            {/* // conditional */}
                            {
                                <p className={`text-sm font-semibold mb-3 px-2 py-1 rounded w-fit ms-2
                                     ${data.isAvail ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                    {data.isAvail ? "Available" : "Unavailable"}
                                </p>
                            }
                            <button onClick={() => handleTicket(data.trainNumber, data.trainName)} className='w-full bg-blue-500 font-bold cursor-pointer hover:bg-blue-700 text-white py-2 rounded-md transition'>Add </button>

                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
}

export default Train