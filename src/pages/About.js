import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-text">
        Welcome to Klodi's Builders, where dreams take shape and innovation meets construction.
        With a passion for creating exceptional spaces and a commitment to excellence, we're here to turn your vision into reality.
      </p>
      <p className="about-text">
        <strong>Our Mission</strong><br/>
        At Klodi's Builders, our mission is to build not just structures, but legacies. We're dedicated to transforming spaces that reflect the essence of your dreams, all while contributing positively to the communities we serve.
      </p>
      <p className="about-text">
        <strong>Craftsmanship and Expertise</strong><br/>
        Backed by a team of skilled professionals, Klodi's Builders brings together a wealth of experience across diverse construction projects. From residential marvels to commercial landmarks, our expertise enables us to exceed expectations with every project.
      </p>
      <p className="about-text">
        <strong>Unparalleled Quality</strong><br/>
        Quality is the hallmark of Klodi's Builders. Our meticulous attention to detail, unwavering commitment to excellence, and use of premium materials set us apart. The result? Projects that stand as testaments to our craftsmanship.
      </p>
      <p className="about-text">
        <strong>Client-Centric Approach</strong><br/>
        Your dreams are our inspiration. Klodi's Builders believes in partnerships built on trust, collaboration, and open communication. We work closely with you to understand your aspirations, ensuring that every detail aligns with your vision.
      </p>
      <p className="about-text">
        <strong>Sustainability and Responsibility</strong><br/>
        Building for the future is at the core of Klodi's Builders. We integrate sustainable practices and eco-friendly materials into our projects, striving to create spaces that are as responsible as they are inspiring.
      </p>
      <p className="about-text">
        <strong>Safety Above All</strong><br/>
        Safety is non-negotiable. Klodi's Builders upholds the highest safety standards on all our job sites. Our team is equipped with the latest training and protocols to ensure a secure environment for all.
      </p>
      <p className="about-text">
        <strong>Our Pledge</strong><br/>
        Klodi's Builders stands on the pillars of integrity, dedication, and innovation. With us, your dreams are in capable hands. We're committed to turning your ideas into masterpieces that stand as a testament to our shared vision.
      </p>
      <p className="about-text">
        Experience excellence with Klodi's Builders. Reach out to us today and let's embark on a journey to bring your dreams to life.
      </p>
      <Link to="/contact" className="about-contact-link">
        Contact us to learn more
      </Link>
    </div>
  );
};

export default About;
