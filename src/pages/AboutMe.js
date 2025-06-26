import styles from './AboutMe.module.css';
import picture from './ProfilePic.jpeg';
const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>About Me</h2>

   <div className={styles.introWrapper}>
        <img
          src={picture}
          alt="Caelen Wall"
          className={styles.photo}  // if you want to style it
        />
        <p className={styles.introText}>
          I'm Caelen Wall, a recent graduate from the University of South Carolina with a Bachelor of Science in Computer Information Systems and a minor in Business Information Management. I’m passionate about using technology to solve practical problems and create meaningful digital experiences. My focus lies in combining business understanding with technical skill to improve systems, workflows, and user outcomes.
        </p>
      </div>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>Education</h3>
        <div className={styles.educationBlock}>
          <p className={styles.degree}>
            <strong>Bachelor of Science in Computer Information Systems</strong><br />
            <span className={styles.subText}>Minor in Business Information Management</span><br />
            <span className={styles.subText}>University of South Carolina — Columbia, SC</span><br />
            <span className={styles.subText}>Graduated May 2025 &nbsp;|&nbsp; GPA: 3.63 &nbsp;|&nbsp; Cum Laude</span>
          </p>

          <p className={styles.honors}>
            <strong>Honors & Awards:</strong><br />
            President’s List, Dean’s List, LIFE Scholarship, SC Workforce Scholarship
          </p>

          <div className={styles.courseworkWrapper}>
            <p><strong>Relevant Coursework</strong></p>
            <div className={styles.courseColumns}>
              <div>
                <p className={styles.courseCategory}>Technical:</p>
                <ul>
                  <li>Algorithmic Design I & II</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Software Engineering</li>
                  <li>Web Applications</li>
                  <li>Database System Design</li>
                  <li>Computer Hardware Foundations</li>
                  <li>Computer Security & Secure Software</li>
                  <li>Computer Networks</li>
                  <li>UNIX/Linux Fundamentals</li>
                  <li>Capstone Projects I & II</li>
                  <li>Statistical Methods I & II</li>
                </ul>
              </div>
              <div>
                <p className={styles.courseCategory}>Business:</p>
                <ul>
                  <li>Finance and Markets</li>
                  <li>Survey of Accounting</li>
                  <li>Principles of Management</li>
                  <li>Strategic Management of IS</li>
                  <li>Business Law & Entrepreneurship</li>
                  <li>Introduction to Business</li>
                  <li>Principles of Retailing</li>
                  <li>HRSM Professional Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>Life</h3>
        <p>
          My interest in technology started early. Back in second grade, I was the go-to student for helping teachers fix smart boards and troubleshoot classroom computer issues. That curiosity has stayed with me ever since and has shaped the way I approach both work and life.
        </p>
        <p>
          Outside of coding and IT, I’m passionate about learning, mentoring, and finding practical ways to improve how people collaborate and interact with digital tools. I enjoy blending creative thinking with structured problem-solving to bring clarity and efficiency to the work I do. Whether it's leading a project, supporting a teammate, or learning something new, I’m always looking for ways to add value and grow.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>Strengths</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Strong analytical and problem-solving abilities</li>
          <li className={styles.listItem}>Customer-focused approach to delivering IT/business solutions</li>
          <li className={styles.listItem}>Strong ethical standards and commitment to data privacy/security</li>
          <li className={styles.listItem}>Ability to prioritize tasks and manage time efficiently</li>
          <li className={styles.listItem}>Results-driven mindset with a commitment to continuous improvement</li>
          <li className={styles.listItem}>Clear communication and technical support</li>
          <li className={styles.listItem}>Attention to detail and adaptability</li>
          <li className={styles.listItem}>Project management and digital coordination</li>
          <li className={styles.listItem}>Strong teamwork and collaboration skills</li>
          <li className={styles.listItem}>Ability to learn and apply new technologies quickly</li>
          <li className={styles.listItem}>Time management and multitasking</li>
          <li className={styles.listItem}>Customer-focused mindset</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>Skills</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Project Management</li>
          <li className={styles.listItem}>Technical Writing and Documentation</li>
          <li className={styles.listItem}>Effective Communication and Presentation</li>
          <li className={styles.listItem}>Problem Solving and Critical Thinking</li>
          <li className={styles.listItem}>Team Collaboration and Cross-Functional Communication</li>
          <li className={styles.listItem}>Adaptability and Continuous Learning</li>
          <li className={styles.listItem}>Database Design and Management</li>
          <li className={styles.listItem}>Network Troubleshooting and Software Security</li>
          <li className={styles.listItem}>Web Design and Digital Marketing</li>
          <li className={styles.listItem}>Data Analysis and System Design</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>Coding Languages</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>JavaScript (React)</li>
          <li className={styles.listItem}>Java</li>
          <li className={styles.listItem}>TypeScript</li>
          <li className={styles.listItem}>Tailwind</li>
          <li className={styles.listItem}>CSS</li>
          <li className={styles.listItem}>SQL</li>
          <li className={styles.listItem}>C++ / C#</li>
          <li className={styles.listItem}>R</li>
          <li className={styles.listItem}>SAS</li>
          <li className={styles.listItem}>GitHub</li>
          <li className={styles.listItem}>MongoDB</li>
          <li className={styles.listItem}>HTML</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
