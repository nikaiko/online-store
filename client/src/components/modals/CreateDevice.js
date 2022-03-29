import React, { useContext, useEffect, useState } from "react";
import ListBox from "../elements/ListBox";
import { Context } from './../../index';
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchTypes } from "../../http/deviceAPI";
import { createDevice } from './../../http/deviceAPI';

const CreateDevice = observer(({show, setShow}) => {
    const{device} = useContext(Context)
    const[name, setName] = useState('')
    const[price, setPrice] = useState(0)
    const[file, setFile] = useState(null)
    const[info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const deleteInfo = (number) => {
        setInfo(info.filter(i => i.number !==number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value}: i))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => setShow(false))
    }

    return (
        <div>
            {show && <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 mb-1 left-0">
                <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative flex flex-col first-letter:relative py-6 px-8 md:px-16 bg-white shadow-md rounded border border-gray-400">
                        <h1 className="text-center text-gray-800 font-lg font-bold tracking-normal leading-tight pb-3 border-b-2">Add new device</h1>
                        <div className="m-2">
                            <ListBox 
                                list={device.types}
                                setList={(e) => device.setSelectedType(e)}
                            />
                            <ListBox 
                                list={device.brands} 
                                setList={(e) => device.setSelectedBrand(e)}
                            />
                        </div>
                        <input className="m-2 text-gray-600 text-center font-bold border-2 rounded"
                            placeholder="Enter device name"
                            value={name}
                            onChange = {e => setName(e.target.value)}
                        />
                        <input className="m-2 text-gray-600 text-center font-bold border-2 rounded"
                            placeholder="Enter device price"
                            type='number'
                            onChange = {e => setPrice(Number(e.target.value))}
                        />
                        <input className="m-2 text-gray-600 text-center font-bold border-2 rounded"
                            type='file'
                            onChange={selectFile}
                        />
                        <button className="w-1/2 mx-auto my-2 focus:outline-none bg-green-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                            onClick={addInfo}
                        >
                            Add property
                        </button>
                        {info.map(i =>
                            <div className="flex flex-wrap border-t-2" key={i.number}>
                                <div className="flex flex-col">
                                    <input className="m-2 w-full text-gray-600 text-center font-bold border-2 rounded"
                                        placeholder="Enter property name"
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    />
                                    <input className="m-2 w-full text-gray-600 text-center font-bold border-2 rounded"
                                        placeholder="Enter description name"
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    />
                                </div>
                                <button className="m-auto focus:outline-none bg-red-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                                    onClick={() => deleteInfo(i.number)}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                        <div className="border-t-2 w-full">
                            <div className="mt-2 flex flex-wrap items-center justify-center">
                                <button className="focus:outline-none bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                                    onClick={addDevice}
                                >
                                    Add
                                </button>
                                <button className="focus:outline-none ml-3 bg-gray-100 text-gray-600 border rounded px-4 sm:px-8 py-2 text-xs sm:text-sm"
                                    onClick={()=>setShow(false)} 
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" 
                            onClick={()=>setShow(false)} 
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
});
export default CreateDevice;
