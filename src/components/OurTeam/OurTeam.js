import React from "react";
import OurTeamCard from "../OurTeamCard/OurTeamCard";
import OurTeamCardData from "../OurTeamCard/OurTeamCardData";
import "./OurTeam.css";
function OurTeam() {
  return (
    <div>
      <div className="OurTeam-Container">
        <div className="OurTeam-Heading-Container">
          <p className="OurTeam-heading">Our Team</p>
          <p className="OurTeam-subheading">Powerful team of professionals</p>
        </div>
        <div className="OurTeam-membersContainer">
          {OurTeamCardData.map((val) => {
            return (
              <OurTeamCard
                imgsrc={val.imgsrc}
                name={val.name}
                title={val.title}
                insta_link={val.insta_link}
                twitter_link={val.twitter_link}
                linkedin_link={val.linkedin_link}
                github_link={val.github_link}
                portfolio_link={val.portfolio_link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
