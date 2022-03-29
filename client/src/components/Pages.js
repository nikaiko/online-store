import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
        <ul className="mt-10 flex items-center justify-center -space-x-px">
            
            {pages.map(page => 
                <li className={device.page !== page ? 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ':'z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700'}
                    key={page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </li>
            )}
            
        </ul>
    );
})

export default Pages;