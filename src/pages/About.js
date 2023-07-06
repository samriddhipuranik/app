import React from 'react';
// import coverImage from '../images/flower-bg.jpeg';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="cover-image"></div>
      <div className="about-content">
      <h1>About Us</h1>
        <p>
          Welcome to my website! Here, you can manage your tasks with a handy to-do list, explore a
          wide range of products in the shopping cart, and discover movie recommendations to enjoy
          your leisure time.
        </p>
        <p>
          With the to-do list feature, you can add new tasks, mark them as completed, and remove them
          as needed. Stay organized and keep track of your daily tasks effortlessly.
        </p>
        <p>
          In the shopping cart, you can browse through various products and add them to your cart.
          Remove items or update quantities as necessary. You'll also find the total number of items
          in your cart and the subtotal, making your shopping experience smooth and convenient.
        </p>
        <p>
          Additionally, explore our movie recommendations section where you can find information on
          popular movies. Get details such as the title, year, runtime, and even a captivating movie
          poster to enhance your movie-watching journey.
        </p>
        <p>
          Start using our website today and experience the convenience of managing tasks, shopping
          for products, and discovering exciting movies all in one place!
        </p>
      </div>
    </div>
  );
}

export default About;
