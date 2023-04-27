import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectCards.css"

function ProjectCards({ Project }) {
    return (
        Project.map(p => {
            return (
                <>
                    <div className={'projectOverviewContainer'}>
                        
                        <Link to={p.link} >
                        
                            <div className='projectOverviewTitle'>
                                <h1>{p.title}</h1>
                            </div>
                            <br></br>
                            <div className='details'>
                            
                            <div className='projectOverviewBody'>
                                <p>{p.details}</p>
                            </div>
                        

                        <div>
                            <img src={p.imagesrc} alt ="Project Imgage"></img>
                        </div>

                        </div>
                        </Link>
                    </div>
                    
                </>
            )
        })
    )
}

export default ProjectCards