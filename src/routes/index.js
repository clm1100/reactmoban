import React from 'react';
import {Redirect} from 'react-router-dom';
import AdminLayout from '../layouts/Admin';
import UserLayout from '../layouts/Admin';

export default [
    {
        path:'/admin',
        component:AdminLayout,
        routes:[
            {
                path:'/admin',
                exact:'ture',
                render:()=>{
                    <Redireact to={'/admin/control'}></Redireact>
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
        exact:'true',
        render:()=>{
            return <Redirect to={'/user/control'}></Redirect>
        },
        routes:[
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
