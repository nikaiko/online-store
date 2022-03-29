import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from './../index';

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className="flex flex-wrap my-auto">
            {device.brands.map(brand =>
                <div className={brand.id === device.selectedBrand.id ? "text-center text-sm text-indigo-700 py-2 px-4 shadow-lg rounded mr-8 font-normal" : "text-center text-sm text-gray-600 py-2 mr-8 font-normal hover:text-indigo-700 cursor-pointer"} 
                    key={brand.id} 
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </div>
            )}
        </div>
    );
})

export default BrandBar;