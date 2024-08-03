
import React from 'react';
import './ServiceText.css';

function ServiceText() {
  return (
    <div className="food-display">
      <h2>خدماتنا</h2>

      {/* First group of paragraphs */}
      <div className="paragraph-group">
        <p>تاجير معدات التصوير والتلفزيون من شاشات وكاميرا واجهزه الميكسر والاضاءة والاجهزة الصوتية والسماعات</p>
        <p>تصميم وتنفيذ التصاميم بكافة انواعه الثابت والمتحرك ابتكار الهويه البصرية واستراتيجيات العلامة التجاريه</p>
        <p>تنظيم الفعاليات المؤتمرات وتجهيز كافة الاحتياجات التقنية والبشرية</p>
      </div>

      {/* Second group of paragraphs */}
      <div className="paragraph-group">
        <p>صناعة المونتاج والمكساج على احدث الاجهزة والبرامج</p>
        <p>(بورتريه)تصوير الاشخاص</p>
        <p>تصوير المنتجات</p>
      </div>

      {/* Third group of paragraphs */}
      <div className="paragraph-group">
        <p>تصوير مقابلات</p>
        <p>تصوير برومو</p>
        <p>تصوير اعلانات</p>
      </div>

      {/* Fourth group of paragraphs */}
      <div className="paragraph-group">
        <p>تصوير افلام</p>
        <p>تصوير مباني</p>
        <p>تصوير مؤتمرات ومهرجانات</p>
      </div>

      {/* Fifth group of paragraphs */}
      <div className="paragraph-group">
        <p>اخراج تلفزيوني</p>
        <p>اخراج مباشر</p>
        <p>برودكاست</p>
      </div>

      {/* Sixth group of paragraphs */}
      <div className="paragraph-group">
        <p>اضاءة وشاشات</p>
        <p>صوتيات</p>
        <p>وانميشن وجرافيكس D2 or D3 مونتاج</p>
      </div>
    </div>
  );
}

export default ServiceText;
