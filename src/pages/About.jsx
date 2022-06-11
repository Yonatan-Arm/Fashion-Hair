import React from 'react'
import hero from '../assets/imgs/hero.jpg'

export default function About() {
  return (
    <div className='about flex column align-center justify-center'>
        <h1>About me: </h1> 
        <img src={hero} alt="hero" />
        <p dir='rtl'>יקיר ממן מתאפיין בייחודו כמעצב שיער בעל יצירתיות רבה אשר נותנת לו ביחד עם הקסם האישי שלו יכולת להעניק ללקוחותיו את השירות הטוב ביותר . כמובן שכדי להגיע להצלחה ומקצועיות נעבוד עם המוצרים הטובים ביותר. המקצועיות, הניסיון והשירות הם חלק בלתי נפחד מהמספרה שלנו. אבחון שיערכן לפני כול פעולה כימית מאפשר לנו להתאים לכן הטיפול המדיוק שתקבלו תוצאה מושלמת,מוצלחת והכי חשוב בריאה !</p>

        </div>
  )
}
