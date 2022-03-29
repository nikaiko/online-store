import React, { useState } from 'react';
import CreateType from '../components/modals/CreateType';
import CreateDevice from './../components/modals/CreateDevice';
import CreateBrand from './../components/modals/CreateBrand';

function Admin() {
    const[deviceVisible,setDeviceVisible] = useState(false)
    const[brandVisible, setBrandVisible] = useState(false)
    const[typeVisible, setTypeVisible] = useState(false)

    return (
        <div className='flex flex-col mx-auto items-center'>
            <button className='mt-2 w-1/2 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={()=>setTypeVisible(true)}
            >
                Add type
            </button>
            <button className='mt-2 w-1/2 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={()=>setBrandVisible(true)}
            >
                Add brand
            </button>
            <button className='mt-2 w-1/2 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={()=>setDeviceVisible(true)}
            >
                Add device
            </button>
            <CreateDevice show={deviceVisible} setShow={() => setDeviceVisible(false)}/>
            <CreateBrand show={brandVisible} setShow={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} setShow={() => setTypeVisible(false)}/>
        </div>
    );
}

export default Admin;