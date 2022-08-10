import React from "react";
import SocialLinks from "../components/SocialLinks";

const Home = (props) => {
    return (
        <div className="homePage">
        <div className="homePageText">
             <h1><u>Benjamin Hines</u></h1>
             <h3>
                 Nashville based Full-Stack Engineer.
             </h3>
        </div>
        <div className="homePageNav">

        </div>
        <SocialLinks/>
        </div>
    );
};

export default Home;