/* This example requires Tailwind CSS v2.0+ */
import React from "react"
import { useContext } from 'react';
import { Context } from './../index';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <div className=" bg-white">
            <nav className="py-4 px-4">
                <div className="flex justify-between">
                    <NavLink className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center"
                        to={SHOP_ROUTE}>
                        Buy device
                    </NavLink>
                    {user.isAuth ?
                        <div className="flex justify-between">
                            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"
                                onClick={()=>navigate(ADMIN_ROUTE)}>
                                Admin panel
                            </button>
                            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center ml-2"
                                onClick={()=>logOut()}>
                                Log out
                            </button>
                        </div>
                        :
                        <div>
                            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"
                                onClick={()=>navigate(LOGIN_ROUTE)}>
                                Sign In
                            </button>
                        </div>
                    }
                </div>
            </nav>
        </div>
    )
})

export default NavBar;
