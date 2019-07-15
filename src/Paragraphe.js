import React from 'react'

const Paragraphe = (props) => {
return (
    <div className='parag'>
        {props.textepara.map((el,i) => <p key={i}>{el.name} </p>)}
    </div>
)
}




export default Paragraphe