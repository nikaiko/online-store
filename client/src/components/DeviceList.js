import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {device.devices.map((device) => (
                <DeviceItem key={device.id} device={device}/>
            ))}
        </div>
    );
})

export default DeviceList;