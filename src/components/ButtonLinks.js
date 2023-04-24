import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonLinks.css'

function ButtonLinks({ image: imagelink, title: altText, buttonLink: link }) {



    return (
        <>
            <Link to={link} className='buttonLink'>
                <div>
                    <button className='buttonElement'>
                        <img className="title-icons" src={imagelink} alt={altText} />
                    </button>
                </div>
            </Link>
        </>
    )
}

export default ButtonLinks