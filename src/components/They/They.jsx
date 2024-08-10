import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './They.css'; // Optional for additional custom styling

function They() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="explore-image">
            <img src="./who.jpg" alt="Header" className="img-fluid rounded" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="explore-menu">
            <h1>من نحن</h1>
            <p>
              مؤسسة لقطة واحدة للتأجير عبارة عن طاقم فني محترف. 
              نعمل في مجال الإنتاج الإعلامي منذ أكثر من 15 سنة وما نزال نواكب التطور 
              والتقدم التكنولوجي في هذا المجال ليتلاءم مع رغبة وتطلعات عملائنا الكرام. 
              نقدم إنتاج المسلسلات والأفلام السينمائية والإعلانات وتغطية المؤتمرات والمهرجانات.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default They;



