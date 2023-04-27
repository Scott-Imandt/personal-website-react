import React from 'react'
import ProjectCards from './ProjectCards'
import PersonalData from '../data/ProjectOverviewDataPersonal.json'
import CourseData from '../data/ProjectOverviewDataCourse.json'
import HomeTitleCard from './HomeTitleCard'
import "./ProjectBody.css"

function ProjectsBody() {

  const mystyle = {
    display: "flex",
    "flex-wrap": "wrap",
    margin: "auto",
    "justify-content": "center",

  };


  return (
    <>
      <div>
        <HomeTitleCard Title={"--Personal Projects--"} style={{width:"100%", "padding": "0px", "margin-left":"0px", "margin-right": "0px"}}></HomeTitleCard>
      </div>
      <div style={mystyle}>
        <ProjectCards Project={PersonalData}></ProjectCards>
      </div>
      <div>
        <HomeTitleCard Title={"--Course Projects--"} style={{width:"100%", "padding": "0px", "margin-left":"0px", "margin-right": "0px"}}></HomeTitleCard>
      </div>
      <div style={mystyle}>
        <ProjectCards Project={CourseData}></ProjectCards>
      </div>
      <div>
        <HomeTitleCard Title={"--Technical Projects--"} style={{width:"100%", "padding": "0px", "margin-left":"0px", "margin-right": "0px"}}></HomeTitleCard>
      </div>
    </>
  )
}

export default ProjectsBody