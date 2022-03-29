import React, { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import {useParams} from 'react-router-dom'
import { fetchOneDevice } from './../http/deviceAPI';

function DevicePage() {
    const[device, setDevice] = useState({info: []})
    console.log('====================================');
    console.log(process.env.REACT_APP_API_URL + `${device.img}`);
    console.log('====================================');
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    },[])

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='px-4'>
            {/* Product info */}
            <div className="max-w-2xl mx-auto sm:px-6 pt-5 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3  lg:gap-x-8">
                <div className="lg:col-span-2 ">
                    <img 
                        src={process.env.REACT_APP_API_URL + device.img}
                        alt='myimg'
                        className="w-96 h-96 m-auto"
                    />
                </div>
                {/* Options */}
                <div className="mt-4 lg:mt-0 lg:row-span-3">
                    <h1 className="text-2xl font-extrabold  text-gray-900 sm:text-3xl">{device.name}</h1>
                    <p className="text-3xl text-gray-900">{device.price} руб.</p>
                    {/* Reviews */}
                    <div className="mt-6">
                        <div className="flex items-center">
                            <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                key={rating}
                                className={classNames(
                                    device.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                )}
                                />
                            ))}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add to bag
                        </button>
                    </div>
                </div>
            </div>
            <div className='max-w-2xl mx-auto sm:px-6 lg:max-w-7xl pt-5 lg:pb-24 lg:px-8 lg:flex lg:flex-col'>
                <h1 className='p-1 text-xl font-bold'>Характеристики</h1>
                    {device.info.map(info =>
                        <div key={info.id} className='p-1'>
                            {info.title}: {info.description}
                        </div>
                    )}
            </div>
        </div>
    );
}

export default DevicePage;