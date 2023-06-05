import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectCards.css"

function ProjectCards({ Project }) {
    return (
        Project.map(p => {
            
            var versionHTML;

            if(p.version !== undefined){
                versionHTML = <h1>{p.version}</h1>
            }


            return (
                <>
                    <div className={'projectOverviewContainer'}>

                        <Link to={p.link} state={{ data: p.title, index: p.index }}>

                            <div className='projectOverviewTitle'>
                                <h1>{p.title}</h1>
                                {versionHTML}
                            </div>
                            <br></br>
                            <div className='details'>

                                <div className='projectOverviewBody'>
                                    <p>{p.details}</p>
                                </div>

                                <div>
                                    <img src={p.imagesrc} alt=""></img>
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