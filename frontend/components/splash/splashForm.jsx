import React from "react";
import SplashHeader from "./splashHeader";
import { Link } from "react-router-dom";

const splashForm = () => (
  <div className="splash-form">
    <SplashHeader />
    <div className="splash-body">
      <div className="splash-left">
        <h1>Feel organized without the effort</h1>
        <h2>
          NeverNote helps you capture and prioritize ideas, projects, and to-do
          lists, so nothing falls through the cracks.
        </h2>
        <Link to="/signup">Sign Up for Free</Link>
      </div>
      <div className="splash-right"></div>
    </div>
  </div>
);

export default splashForm;
