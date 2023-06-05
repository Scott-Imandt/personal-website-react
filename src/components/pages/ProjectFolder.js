import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import IndividualHeader from '../IndividualHeader';
import ProjectCards from '../ProjectCards'


function LoadJsonData() {
    const location = useLocation();

    const data = location.state?.data

    //Switch case is based off of Title
    switch (data) {

        case "HPS Daily":
            return require('../../data/Projectdata/HPSDailyProjectData.json')

        case "Trail Recorder":
            return require('../../data/Projectdata/TrailRecorderProject.json')

        case "Smart Blinds":
            return require('../../data/Projectdata/SmartBlindsProjectData.json')

        case "Fence Project":
            return require('../../data/Projectdata/FenceProjectData.json')

        default:
            return undefined
    }
}

function ProjectFolder() {
   // const [pageArrayList, setPageArrayList] = React.useState([]);

    var jsonData = LoadJsonData();
    let data = jsonData[0]

    useEffect(() => {
        if (data !== undefined) {
            //setPageArrayList(data.Array);
            //console.log(data)
        }
    }, [data])


    //if data cannot be loaded
    if (data === undefined) {
        return (
            <div>Error Loading page </div>
        )
    }

    const mystyle = {
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        justifyContent: "center",

    };


    // if data exsits on the website
    return (
        <>

            <IndividualHeader
                projectName={data.title}
                subtitle={data.subtitle}
                mainImage={data.mainimgsrc}
                githublink={data.githublink}
            />

            <div style={mystyle}>
                <ProjectCards Project={jsonData}></ProjectCards>
            </div>


        </>
    )
}

export default ProjectFolder