import React from 'react'
import './PageCard.css'

function PageCard({ title, body, img }) {

    let image = ""
    let style = {}

    if (img !== "") {

        image = <img src={img} alt="Project Imgage"></img>
    }

    if(body === ""){
        style = {display: "block"}
    }


    return (
        <>
            <div className='pageCardContainer'>

                <div className='cardBody' style={style}>
                    <div>
                        <div className='cardTitle'>
                            <h1>{title}</h1>
                        </div>
                        <br></br>
                        <p>{body}</p>
                    </div>
                    <div className='pageimage'>
                        {image}
                    </div>

                </div>
            </div>

        </>
    )
}

export default PageCard