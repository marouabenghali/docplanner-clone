import React from 'react'



const Bloc = (props) => {
    return (
   
        <div className='bloccadre'> {props.tom.map(elm => <div className='bloccadre1'><p className='patient'>{elm.name}</p>
                                        <p className='patient2'>{elm.title}</p>
                                        <div className='alignlisteimage'>
                                               
                                                {elm.liste &&  <select className='selecteur'>{elm.liste.map(el=> <option>{el}</option>)} </select>}  
                                               
                                                <img className='formimage' src={elm.image}></img>
                                        </div>
                                     </div>
        )}
    </div>)}
    

export default Bloc