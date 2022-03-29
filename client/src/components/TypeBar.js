import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className='bg-white shadow rounded py-2 pl-5 pr-5'>
            <ul className="lg:grid flex flex-wrap items-center">
                {device.types.map(type => 
                    <li className={type.id === device.selectedType.id? "text-sm text-indigo-700 py-2 px-4 bg-gray-200 rounded mr-8 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal hover:text-indigo-700 cursor-pointer"}
                        key={type.id}
                        onClick={() => device.setSelectedType(type)}
                    >
                        {type.name}
                    </li>
                )}
            </ul>
        </div>
    )
})
export default TypeBar