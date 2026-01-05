import profileImg from './portrait.jpg';

function About() {
    return (
      <section id="about" className="about">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h2>About Me</h2>
        <p>
        Hi, I’m Aryan Kapoor, a Computer Science undergraduate at UC Davis with a strong interest in artificial intelligence, data science, 
        and Software engineering. I enjoy building systems from the ground up, whether that’s implementing data structures in C++,
        developing machine learning models, or designing clean, user-focused applications. Through coursework and projects, I’ve worked with algorithms,
         applied AI, and always focusing on writing efficient code. Beyond technical skills, I’m passionate about using 
         technology as a tool for research, problem-solving, and social good. I’m currently seeking opportunities in research and collaborative 
         projects where I can deepen my understanding and create meaningful impact.
        </p>
      </section>
    );
  }
  
  export default About;