import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

function DeviceItem({device}) {

    const navigate = useNavigate()

    return (
        <div className='cursor-pointer' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <img className='w-64 h-64'
                src={process.env.REACT_APP_API_URL + device.img}
                alt='myimg'
            />
            <div className='flex justify-around'>
                <div className='flex  flex-col'>
                    <div className='text-gray-500'>Item</div>
                    <h2 className='text-xl font-semibold'>{device.name}</h2>    
                </div>
                <div className='flex justify-center items-center'>
                    <div>{device.rating}</div>
                    <StarIcon className='h-5 w-5'/>
                </div>
            </div>
            
        </div>
    );
}

export default DeviceItem;