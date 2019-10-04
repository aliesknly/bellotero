import React from 'react'
import {Link} from "react-router-dom";

const ItemMenu = ({children,path,linkChange}) => {

    return (
        <div className={'menu-item'} onClick={()=>linkChange(window.location.pathname)}>
            {
                (path === `/${children.route}` &&
                <div style={{background: '#071eb3', height: "4px"}}/>) || <div/>
            }

            <Link  id="Link" className="nav-link active link-modify" to={children.route}>{children.text}</Link>
        </div>
    )
};


export default ItemMenu