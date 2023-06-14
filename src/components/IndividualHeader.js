import React from 'react'
import ButtonLinks from './buttonLinks/ButtonLinks'
import './IndividualHeader.css'

function IndividualHeader({ projectName, subtitle, mainImage, githublink }) {

    let gihublinkcomponent = ""
    let img = ""

    if (githublink !== "") {

        gihublinkcomponent =
            <div className='Buttons'>
                <ButtonLinks
                    image={'./personal-website/images/Homepage/githubicon.svg'}
                    onError={'./images/Homepage/githubicon.svg'}
                    buttonLink={githublink}
                    title={"Github Icon"}
                />
            </div>
    }

    if(mainImage !== ""){
        img = <img src={mainImage} alt="Project Imgage"></img>
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
                {img}
            </div>
        </div>
    )
}

export default IndividualHeader