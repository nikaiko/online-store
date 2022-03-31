import React, { useContext, useEffect } from "react"
import BrandBar from "../components/BrandBar"
import DeviceList from "../components/DeviceList"
import TypeBar from "../components/TypeBar"
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 1).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex items-baseline justify-between pt-6 pb-6 border-b border-gray-200">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Products</h1>
            </div>
            <section className="pt-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                    <TypeBar/>
                    <div className="lg:col-span-3 w-2xl px-4 py-2 sm:px-6 lg:px-8">
                        <BrandBar />
                        <DeviceList />
                        <Pages/>
                    </div>
                </div>
            </section>
        </div>
    )
})

export default Shop