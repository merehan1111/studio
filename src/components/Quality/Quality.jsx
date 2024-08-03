import React from 'react';
import './Quality.css';

function Quality() {
  return (
    <div className="quality-container">
      <h1>جودتنا</h1>
      <div className="quality-content">
        <div className="quality-image">
          <img src="./quality.jpg" alt="Quality" />
        </div>
        <div className="quality-text">
          <p>
            وحتى نلبي احتياجاتكم الاعلامية بطرق اكثر احترافية فاننا نسعى لتقديم
            خدمات اعلامية مميزة وعلى احسن وجه ونضمن لكم تكامل العمل بالجودة
            والاتقان بشكل احترافي وفي الوقت الذي تحددونه سعيا لرضاكم وان تكونوا
            في احسن حال
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quality;

