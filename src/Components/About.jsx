import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 mt-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-6">
        We are a team of passionate developers dedicated to creating amazing web applications. Our mission is to provide quality software solutions that help businesses thrive in the digital world.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Our Values</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Innovation: We strive to be at the forefront of technology.</li>
        <li>Collaboration: Working together leads to great outcomes.</li>
        <li>Integrity: We value honesty and transparency in all our dealings.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Our Vision</h2>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        To empower businesses through technology, making a lasting impact in their industries.
      </p>
    </div>
  );
};

export default About;
