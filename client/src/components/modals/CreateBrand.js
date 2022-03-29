import React, { useState } from "react";
import { createBrand } from "../../http/deviceAPI";

const CreateBrand = ({show, setShow}) => {
    const[value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            setShow(!show)
        })
    }

    return (
        
        <div>
            {show &&  <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
                <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-8 md:px-16 bg-white shadow-md rounded border border-gray-400">
                        <h1 className="text-center text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Add new brand</h1>
                        <input className="mb-5 w-full text-gray-600 text-center font-bold border-2 rounded"
                            placeholder="Enter title"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <div className="flex items-center justify-center w-full">
                            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                                onClick={() => addBrand()}
                            >
                                Add
                            </button>
                            <button className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-4 sm:px-8 py-2 text-xs sm:text-sm"
                                onClick={()=>setShow(!show)} 
                            >
                                Cancel
                            </button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" 
                            onClick={()=>setShow(!show)} 
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};
export default CreateBrand;
