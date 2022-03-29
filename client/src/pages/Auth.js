import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { registration, login } from './../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';

const Auth = observer(()=> {
    const {user} = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            if(isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch(e){
            alert(e.response.data.message)
        }
        
    }

    return (
        <div className="bg-slate-50 py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p className="text-2xl font-extrabold leading-6 text-gray-800">
                        {isLogin? "Login to your account" : "Registration"}
                    </p>
                    <form>
                        <div className='mt-6 w-full'>
                            <p className="text-sm font-medium leading-none text-gray-800" >Email</p>
                            <input 
                                placeholder="Enter email..." 
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"         
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-6  w-full">
                            <p className="text-sm font-medium leading-none text-gray-800">Password</p>
                            <input 
                                placeholder="Enter password..." 
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"         
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                type='password'
                            />
                        </div>
                    </form>
                    <div className="mt-8 flex justify-center items-center">
                        {isLogin ? 
                            <p className=" text-sm font-medium leading-none text-gray-500">
                                Dont have account?<br/>
                                <NavLink to={REGISTRATION_ROUTE} className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                    Register
                                </NavLink>
                            </p>
                            :
                            <p className=" text-sm font-medium leading-none text-gray-500">
                                Have account?
                                <NavLink to={LOGIN_ROUTE} className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                    Sign up
                                </NavLink>
                            </p>
                        }
                        
                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                            onClick={click}
                        >
                            {isLogin?
                                "Sign in"
                                :
                                "Registration"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Auth;