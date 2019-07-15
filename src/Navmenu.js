import React from 'react'



const Navmenu = (props) => {
    return (
    <div >
        <ul className='nav'> {props.tomate.map(elm => <li><a href='/'>{elm.name} </a>{elm.tab && <ul className='subMenu'>{elm.tab.map(el => <li>{el}</li>)}</ul>}</li>)}</ul>
    </div>)
    }

export default Navmenu