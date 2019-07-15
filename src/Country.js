import React from 'react'



const Country = (props) => {
    return (
    
        <div className='box_cadres'> {props.countr.map(elm =><div className='cadre1'>
                                                            <img className='cadreimage'  src={elm.image}></img>
                                                        <div className='text_box'>
                                                            <h5>{elm.name}</h5>
                                                            <a className='button'>{elm.See}</a></div>
                                                        </div>
                                                        )}</div>
    

    )}

export default Country