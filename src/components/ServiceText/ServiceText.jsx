import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceText.css'; // Optional for additional custom styling
import Services from '../Services/Services'
function ServiceText() {
  return (
    <div className="container my-5 hi">
      <h2 className=" mb-4">خدماتنا</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تاجير معدات التصوير والتلفزيون من شاشات وكاميرا واجهزه الميكسر والاضاءة والاجهزة الصوتية والسماعات</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تصميم وتنفيذ التصاميم بكافة انواعه الثابت والمتحرك ابتكار الهويه البصرية واستراتيجيات العلامة التجاريه</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تنظيم الفعاليات المؤتمرات وتجهيز كافة الاحتياجات التقنية والبشرية</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>صناعة المونتاج والمكساج على احدث الاجهزة والبرامج</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>(بورتريه)تصوير الاشخاص</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تصوير المنتجات</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تصوير مقابلات</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تصوير برومو</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تصوير اعلانات</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تصوير افلام</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تصوير مباني</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>تصوير مؤتمرات ومهرجانات</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>اخراج تلفزيوني</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>اخراج مباشر</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>برودكاست</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>اضاءة وشاشات</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>صوتيات</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm text-center">
            <p>وانميشن وجرافيكس D2 or D3 مونتاج</p>
          </div>
        </div>
      </div>
      <Services/>
    </div>
  );
}

export default ServiceText;

