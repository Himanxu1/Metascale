import "./OurTeamCardStyles.css";
import React from 'react'
import {BsLinkedin,BsGithub,BsTwitter} from "react-icons/bs"
import {GrInstagram} from "react-icons/gr"
const style = { color: "black", fontSize: "1.5em",marginLeft:10 }
const OurTeamCard=(props)=>{
  return (
    <div className="OurTeamCard-container">
      <img src={props.imgsrc} className="OurTeamCard-members-image"></img>
      <p className="OurTeamCard-members-name">{props.name}</p>
      <p className="OurTeamCard-members-headline">{props.title}</p>
      <div className="OurTeamCard-members-socialmedia_container">
        <a href={props.insta_link}>
          <GrInstagram style={style}/>
        </a>
        <a href={props.twitter_link}>
          <BsTwitter style={style}/>
        </a>
        <a href={props.linkedin_link}>
          <BsLinkedin style={style}/>
        </a>
        <a href={props.github_link}>
          <BsGithub style={style}/>
        </a>
      </div>
      <a href={props.portfolio_link}><button className="portfolio__button">Portfolio</button></a>
    </div>
  )
}

export default OurTeamCard
