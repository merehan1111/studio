import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css'; // Import custom styles

function Projects() {
  return (
    <div className="container my-5 projects-container">
      <h4 className="text-right mb-4">اعمالنا</h4>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <video controls className="img-fluid rounded shadow-sm">
            <source src="./video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <video controls className="img-fluid rounded shadow-sm">
            <source src="./video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <video controls className="img-fluid rounded shadow-sm">
            <source src="./video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <video controls className="img-fluid rounded shadow-sm">
            <source src="./video4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <video controls className="img-fluid rounded shadow-sm">
            <source src="./video5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <video controls className="img-fluid rounded shadow-sm">
            <source src="./video6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <video controls className="img-fluid rounded shadow-sm">
            <source src="./video7.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <video controls className="img-fluid rounded shadow-sm">
            <source src="./video8.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <video controls className="img-fluid rounded shadow-sm">
            <source src="./video9.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Projects;
