import React from 'react'



const Company = (props) => {
    return (
    
        <div className='global'> {props.complink.map(elm =><div className='globallink' >  
                                                        <a className='link' href={elm.link}>{elm.name}</a>
                                                             </div>
                                                             )}
        </div>
    

    )}

export default Company