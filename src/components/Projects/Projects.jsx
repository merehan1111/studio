import React from 'react';
import './Projects.css'; // Import custom styles

function Projects() {
  return (
    <div className="projects-container">
      <h4>اعمالنا</h4>
      <div className="video-wrapper">
        <video controls>
          <source src="./video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="./video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="./video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-wrapper">
        <video controls>
          <source src="./video4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="./video5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="./video6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-wrapper">
        <video controls>
          <source src="./video7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="./video8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="./video9.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Projects;
