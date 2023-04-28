import React from 'react'
import { useLocation } from 'react-router-dom'

function LoadJsonData(){
  const location = useLocation();

  const data = location.state?.data
  
  switch(data){

    case "HPS Daily":
      return require('../../data/Projectdata/HPSDailyProjectData.json')
    
    case "Trail Recorder":
      return require('../../data/Projectdata/TrailRecorderProject.json')
    



    default:
      return undefined
  }
}


function IndividualProject() {

  var data = LoadJsonData();
  console.log(data)
  
  if(data === undefined){
    return (
      <div>Error Loading page </div>
    )
  }
  
  
  
  
  
  
  
  return (
    <div>IndividualProject {data.title}</div>
  )
}

export default IndividualProject