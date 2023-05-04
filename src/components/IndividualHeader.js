import React from 'react'
import ButtonLinks from './buttonLinks/ButtonLinks'
import './IndividualHeader.css'

function IndividualHeader({ projectName, subtitle, mainImage, githublink }) {

    let gihublinkcomponent = ""


    if (githublink !== "") {

        gihublinkcomponent =
            <div className='Buttons'>
                <ButtonLinks
                    image={'./personal-website-react/images/Homepage/githubicon.svg'}
                    onError={'./images/Homepage/githubicon.svg'}
                    buttonLink={githublink}
                    title={"Github Icon"}
                />
            </div>
    }
 

    return (
        <div className="IndividualHeader">
            <div className="maincontent">
                <h1 className="title-h1">{projectName}</h1>
                <h2 className="title-h2">{subtitle}</h2>
                <div className="row">
                    {gihublinkcomponent}
                </div>
            </div>
            <div className='mainimg'>
                <img src={mainImage} alt="Project Imgage"></img>
            </div>
        </div>
    )
}

export default IndividualHeader