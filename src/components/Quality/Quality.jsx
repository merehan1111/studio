import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quality.css';

function Quality() {
  return (
    <div className="container my-5 quality-container">
      <h1 className="text-left  mb-4">جودتنا</h1>
      <div className="row ">
        <div className="col-md-6">
          <div className="quality-image">
            <img src="quali.jpg" alt="Quality" className="img-fluid rounded shadow-sm" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="quality-text py-5 ">
            <p>
              وحتى نلبي احتياجاتكم الاعلامية بطرق اكثر احترافية فاننا نسعى لتقديم
              خدمات اعلامية مميزة وعلى احسن وجه ونضمن لكم تكامل العمل بالجودة
              والاتقان بشكل احترافي وفي الوقت الذي تحددونه سعيا لرضاكم وان تكونوا
              في احسن حال
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;


