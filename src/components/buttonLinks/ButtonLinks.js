import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonLinks.css'

function ButtonLinks({ image: imagelink, title: altText, buttonLink: link, onError: errorlink }) {

    return (
        <>
            <Link to={link} className='buttonLink'>
                <div>
                    <button className='buttonElement'>
                        <img className="title-icons"
                            src={imagelink}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = errorlink;}}
                                alt = { altText } />
                    </button>
                </div>
            </Link>
        </>
    )
}

export default ButtonLinks