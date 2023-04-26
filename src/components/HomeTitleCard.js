import React from 'react'
import { Link } from 'react-router-dom'
import './HomeTitleCard.css'

function HomeTitleCard({ Title, body, link }) {
    return (
        <>
            <div className='cardContainer'>
                <Link to={link} >
                    <div className='cardTitle'>
                        <h1>{Title}</h1>
                    </div>
                    <br></br>
                    <div className='cardBody'>
                        <p>{body}</p>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default HomeTitleCard