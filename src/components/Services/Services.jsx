// import React from 'react';
// import './AppDownload.css'; // Import the CSS file for styling

// function AppDownload() {
//   return (
//     <div className="app-download">
//       <h3>خدماتنا</h3>
//       <div className="image-group">
//         <img src="./grop1.JPG" alt="Group 1" />
//         <img src="./grop2.JPG" alt="Group 2" />
//         <img src="./grop3.JPG" alt="Group 3" />
//       </div>
//       <div className="image-group">
//         <img src="./place1.JPG" alt="Place 1" />
//         <img src="./place2.JPG" alt="Place 2" />
//         <img src="./place3.JPG" alt="Place 3" />
//       </div>
//       <div className="image-group">
//         <img src="./place4.JPG" alt="Place 4" />
//         <img src="./place5.JPG" alt="Place 5" />
//         <img src="./place6.JPG" alt="Place 6" />
//       </div>
//     </div>
//   );
// }

// export default AppDownload;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";
import ServiceText from "../ServiceText/ServiceText";

function Services() {
  return (
    <div className=" services-container">
      <ServiceText />
      <div className="app-download">
        <h3>خدماتنا</h3>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 image-group">
            <img src="./grop1.JPG" alt="Group 1" className="img-fluid" />
            
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 image-group">
           <img src="./grop2.JPG" alt="Group 2" className="img-fluid" />
            
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 image-group">
                       <img src="./grop3.JPG" alt="Group 3" className="img-fluid" />

            
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 image-group">
            <img src="./place1.JPG" alt="Place 1" className="img-fluid" />
            
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 image-group">
            <img src="./place2.JPG" alt="Place 2" className="img-fluid" />
            
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 image-group">
                       <img src="./place3.JPG" alt="Place 3" className="img-fluid" />

            
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 image-group">
            <img src="./place4.JPG" alt="Place 4" className="img-fluid" />
           
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 image-group">
            <img src="./place5.JPG" alt="Place 5" className="img-fluid" />
           
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 image-group">
                    <img src="./place6.JPG" alt="Place 6" className="img-fluid" />

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
