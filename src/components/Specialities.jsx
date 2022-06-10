import React from "react";
import tools from '../assets/imgs/tools.svg'
import beard from '../assets/imgs/beard.svg'
import hairDryer from '../assets/imgs/hair-dryer.svg'
export default function Specialities() {
  return (
    <section className="flex column justify-center align-center">
      <h1> Popular Service</h1>
    <div className="specialities flex justify-center align-center wrap">
      <div className="card-specialty flex column justify-center align-center">
        <img src={tools} alt="tools" />
        <h2>Hair Styling</h2>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nulla voluptate quae suscipit magni ab illo eos nam? </p>
      </div>
      <div className="card-specialty  flex column  justify-center align-center">
      <img src={beard} alt="beard" />
        <h2>Beard Trim</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis excepturi consectetur, sed quisquam quam repellendus aliquam recusandae qui?  </p>
      </div>
      <div className="card-specialty flex column  justify-center align-center">
      <img src={hairDryer} alt="hairDryer" />
      <h2>Hair Color</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nihil vero fugit neque aut sunt libero officiis aspernatur accusamus suscipit?</p>
      </div>
    </div>
    </section>
  );
}
