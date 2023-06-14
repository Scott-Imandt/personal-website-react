import React from 'react'
import ButtonLinks from './buttonLinks/ButtonLinks'
import './HomeHeader.css'

function Header() {
    return (
        <div className="Header">
            <h1 className="title-h1">Scott Imandt</h1>
            <h2 className="title-h2">Computer Science Major</h2>
            <div className="row">
                <div className="Buttons">
                    <ButtonLinks
                        image={'./personal-website/images/Homepage/githubicon.svg'}
                        onError={'./images/Homepage/githubicon.svg'}
                        buttonLink={'https://github.com/Scott-Imandt'}
                        title={"Github Icon"}
                    />
                    <ButtonLinks
                        image={'./personal-website/images/Homepage/mailicon.svg'}
                        onError={'./images/Homepage/mailicon.svg'}
                        buttonLink={'mailto: ScottImandt@gmail.com'}
                        title={"Mail Icon"}
                    />

                    <ButtonLinks
                        image={'./personal-website/images/Homepage/linkedinicon.svg'}
                        onError={'./images/Homepage/linkedinicon.svg'}
                        buttonLink={'https://www.linkedin.com/in/scott-imandt/'}
                        title= {"Linkedin Icon"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header