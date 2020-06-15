import React from 'react';
import {Redirect} from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import UserLayout from '../layouts/UserLayout';
import AdminClockList from '../application/AdminClockList';
import AdminControl from '../application/AdminControl';
import UserControl from '../application/UserControl';
import UserClockList from '../application/UserControl';
import Home from '../application/Home';
import Login from '../application/Login';

export default [
    {
        path:'/admin',
        component:AdminLayout,
        routes:[
            {
                path:'/admin',
                exact: true,
                render:()=>{
                    return <Redirect to={'/admin/control'}></Redirect>
                }
            },
            {
                path:'/admin/control',
                component:AdminControl
            },
            {
                path:'/admin/list/clock',
                component:AdminClockList
            }
        ]

    },
    {
        path:'/user',
        component:UserLayout,
        routes:[
            {   path:'/user',
                exact:true,
                render: () => {
                    return <Redirect to={'/user/control'}></Redirect>
                },
            },
            {
                path: '/user/control',
                componet:UserControl
            },
            {
                path:'/user/list/clock',
                component:UserClockList
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        component:Home
    }
]
