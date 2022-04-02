import React from "react"
import "./SideBarRow.css"
import { NavLink } from "react-router-dom"

export function SideBarRow({title,Icon,to})
{

    return (
        <NavLink className  ={({isActive})=>isActive?"selected sidebar__row":"sidebar__row"} to ={to}>
            <Icon className ="sidebar__row__icon"/>
            <h2 className="sidebar__row__title">{title}</h2>
        </NavLink>
    )


}