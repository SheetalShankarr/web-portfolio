import React from 'react'

const CommandOutput = ({ command }) => {

  if (command === 'start') {
    return (
        <div className='command-body'>
        <span className='body-text'>
          Hello, it's nice to see you. What would you like to know?
        </span>
        <div>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>projects</span> for my projects.</span>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>certs</span>&nbsp;&nbsp;&nbsp; for my certifications.</span>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>work</span>&nbsp;&nbsp;&nbsp;&nbsp; for my work experience.</span>
        </div>
      </div>
    )
  }
  
  if (command === 'projects') {
    return (
      <span className='certification-text'>
        <span className='text-blue'>Projects</span>
        <p>
        <span className='text-semi-highlight'>Clean Ingredients Checker:</span> Spot toxic ingredients in cosmetics.<br/>
        <span className='text-semi-highlight'>Mobile Application(Study Timer):</span> Created a study timer mobile application using Android Studio.<br/>
        <span className='text-semi-highlight'>Face-detection:</span> Designed a face-detecting code using Python.<br/>
        <span className='text-semi-highlight'>Open Glut Animation:</span> Designed a pudding restaurant animation using OpenGL.<br/>
        <span className='text-semi-highlight'>Website:</span> Designed an art gallery website using HTML, CSS, PHP, and MySQL.<br/>
        </p>
      </span>
    )
  }

  if (command === 'work') {
    return (
      <span className='certification-text'>
        <span className='text-blue'>Work</span>
        <p>
          Front-End Developer at <span className='text-semi-highlight'>Celstream Technologies Pvt. Ltd.</span>, working on scalable dashboards and role-based interfaces using <span className='text-semi-highlight'>React.js, Redux, Saga, and MUI/Syncfusion.<br/></span>
          <span className='text-semi-highlight'>Delivered 5+ production applications</span> with end-to-end ownership of key projects. Integrated REST APIs for alerts, document workflows, and asset linking to enhance user experience.
        </p>
      </span>
    )
  }
  if (command === 'certs') {
    return (
        <span className='certification-text'>
          <span className='text-blue'>Certifications</span>
          <p>
            <span className='text-hightlight'>&lt;Web Development&gt;<br/></span>
            Nov 2024&nbsp;&nbsp;&nbsp;<span className='text-semi-highlight'>Getting Started with React JS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skillshare<br/>
            Nov 2024&nbsp;&nbsp;&nbsp;<span className='text-semi-highlight'>CSS Grid & Layout Essentials</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skillshare<br/>
            Nov 2024&nbsp;&nbsp;&nbsp;<span className='text-semi-highlight'>HTML & CSS Website Fundamentals</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skillshare<br/>
            Nov 2024&nbsp;&nbsp;&nbsp;<span className='text-semi-highlight'>Intro to UX: User-Centered Design</span>&nbsp;&nbsp;&nbsp;&nbsp;Skillshare<br/>
            Dec 2024&nbsp;&nbsp;&nbsp;<span className='text-semi-highlight'>Figma: Beginner to Pro</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skillshare
          </p>
          <p>
            <span className='text-hightlight'>&lt;Project Management&gt;<br/></span>
            Nov 2024&nbsp;&nbsp;&nbsp;<span className='text-semi-highlight'>Foundations of Project Management</span>&nbsp;&nbsp;&nbsp;&nbsp;Google<br/>
            Apr 2024&nbsp;&nbsp;&nbsp;<span className='text-semi-highlight'>Certified Product Manager (CPM)</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Udemy
          </p>
          <p>
            <span className='text-hightlight'>&lt;Cyber Security&gt;<br/></span>
            Nov 2025&nbsp;&nbsp;&nbsp;<span className='text-semi-highlight'>Foundations of Cybersecurity</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Google<br/>
            Aug 2022&nbsp;&nbsp;&nbsp;<span className='text-semi-highlight'>Cyber Security Basics</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Campalin Innovations
          </p>
        </span>
    )
  }
  if (command === 'help') {
    return (
        <div>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>projects</span> for my projects.</span>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>certs</span>&nbsp;&nbsp;&nbsp; for my certifications.</span>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>work</span>&nbsp;&nbsp;&nbsp;&nbsp; for my work experience.</span>
        </div>
    )
  }
  // Default output
  return <span className='body-text'><span className='error-text'>'{command}'</span> is not recognized as a command. Type <span className='text-hightlight'>help</span> to know all commands</span>
}

export default CommandOutput