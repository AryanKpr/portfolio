
function Skills() {
    const skills = ['JavaScript', 'React', 'Python', 'SQL', 'Git'];
    
    return (
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Skills;