import React from "react";

export default function Price() {
  return (
    <div className="price-container">
      <div className="flex align-center justify-center column">
        <h1 dir="rtl">מחירון : </h1>
        <div className="price-info flex column" dir="rtl">
          <div className="flex price row space-between">
            <span>תספורת אישה</span>
            <span>150-200</span>
          </div>
          <div className="flex price row space-between">
            <span>תספורת ילדה</span>
            <span>150-200</span>
          </div>
          <div className="flex price row space-between">
            <span>פן</span>
            <span>60/150</span>
          </div>
          <div className="flex price row space-between">
            <span>צבע שורש</span>
            <span>100-120</span>
          </div>
          <div className="flex price row space-between">
            <span>צבע מלא</span>
            <span>150-250</span>
          </div>
        </div>
        <div className="price-info flex column" dir="rtl">
          <div className="flex price row space-between">
            <span> הבהרת שיער</span>
            <span>300-700</span>
          </div>
          <div className="flex price row space-between">
            <span>גוונים</span>
            <span>450-800</span>
          </div>
          <div className="flex price row space-between">
            <span>בלאייג\אומברה</span>
            <span>600-1,200</span>
          </div>
          <div className="flex price row space-between">
            <span> החלקת חימר</span>
            <span>700-1,400</span>
          </div>
          <div className="flex price row space-between">
            <span>החלקת יפנית</span>
            <span>600-1,200</span>
          </div>
          <div className="flex price row space-between">
            <span> טיפולים משקמים</span>
            <span>50-200</span>
          </div>
        </div>
        <div className="price-dash" dir="rtl">
          <ul>
            <li className="flex align-center justify-center">
              * לפני קביעת תור להחלקה או בליאז׳ יש צורך בפגישת יעוץ לאבחון השיער
            </li>
            <li> * מחירים מדוייקים ייקבעו על-פי ייעוץ במספרה</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
