import React from 'react'

const CommandOutput = ({ command }) => {

  if (command === 'start') {
    return (
        <div className='command-body'>
        <p className='body-text'>
            Hello, it's <span className='text-pretty'>Sheetal Shankar. Software Engineer. Reader. Builder of things.</span>
        </p>
        <p className='body-text'>
          Almost 3 years of turning complex requirements into clean, 
          user-focused interfaces. I've worked on projects end-to-end, 
          from client briefs to deployment.
        </p>
        <p className='body-text'>
          Currently exploring React Native and TypeScript.
          Always reading something good.
        </p>
        <div>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>projects</span> to see what I've built.</span>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>certs</span>&nbsp;&nbsp;&nbsp; for my certifications.</span>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>work</span>&nbsp;&nbsp;&nbsp;&nbsp; to see my experience.</span>
            <span className='command-text'>Type &nbsp;&nbsp;<span className='text-semi-highlight'>links</span>&nbsp;&nbsp;&nbsp;&nbsp; to find me online.</span>
        </div>
      </div>
    )
  }

  if (command === 'back') {
    return (
        <div className='command-body'>
        <span className='body-text'>
          Hello, it's nice to see you. What else would you like to know?
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
        <span className='tab'>-&gt; <a href='https://cleanbeauty.info/' target='_blank' rel='noreferrer' className='text-semi-highlight'>Launch App</a></span><br/>
        <span className='text-semi-highlight'>Website:</span> Designed an art gallery website using HTML, CSS, PHP, and MySQL.<br/>
        </p>
        <span>Type <span className='text-hightlight'>back</span> to go back to main menu</span>
      </span>
    )
  }

  if (command === 'work') {
    return (
      <span className='certification-text'>
        <span className='text-blue'>Work</span>
        <p>
          <span className='text-hightlight'>&lt;Aug 2023 - Present&gt;<br/></span>
          Software Engineer at <span className='text-semi-highlight'>Celstream Technologies Pvt. Ltd.</span>, delivering scalable dashboards and role-based interfaces using <span className='text-semi-highlight'>React.js, Redux, Saga, and MUI/Syncfusion.<br/></span>
          <span className='text-semi-highlight'>Sole frontend developer on 3 production applications —</span>  driving the full cycle from client requirement analysis to deployment. Integrated REST APIs for alerts, document workflows.
        </p>
        <p>
          <span className='text-hightlight'>&lt;Jan 2023 - March 2023&gt;<br/></span>
          Freelance Frontend Developer - Built a responsive internal dashboard with secure login and multi-user authentication 
          using <span className='text-semi-highlight'>Java, PHP, HTML and CSS.</span>
        </p>
        <span>Type <span className='text-hightlight'>back</span> to go back to main menu</span>
      </span>
    )
  }
  if (command === 'certs') {
    return (
        <span className='certification-text'>
          <span className='text-blue'>Learnings & Certifications</span>
          <p>
            <span className='text-hightlight'>&lt;Web Development&gt;<br/></span>
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
          <span>Type <span className='text-hightlight'>back</span> to go back to main menu</span>
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
  if (command === 'links') {
    return (
        <div>
          <span className='tab'><a href='https://github.com/SheetalShankarr' target='_blank' rel='noreferrer' className='text-semi-highlight'>GitHub</a></span><br/>
          <span className='tab'><a href='https://www.linkedin.com/in/sheetal-shankarr/' target='_blank' rel='noreferrer' className='text-semi-highlight'>LinkedIn</a></span><br/>
          <span className='tab'><a href='https://medium.com/@sheetalshankarr' target='_blank' rel='noreferrer' className='text-semi-highlight'>Medium</a></span><br/>
        </div>
    )
  }
  // Default output
  return <span className='body-text'><span className='error-text'>'{command}'</span> is not recognized as a command. Type <span className='text-hightlight'>help</span> to know all commands</span>
}

export default CommandOutput