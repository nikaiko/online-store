import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import Shop from '../pages/Shop';
import { authRoutes,  publicRoutes} from './../routes';
import { Context } from './../index';

function AppRouter() {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={Component}/>
            )}
            {publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path='*' element={<Shop/>} />
        </Routes>
    );
}

export default AppRouter;