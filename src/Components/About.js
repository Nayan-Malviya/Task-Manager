import React from 'react';

function About() {
  return (
    <div className="about-section">
      <h2>About Task Manager</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>
                Welcome to Task Manager, a powerful and user-friendly application designed to help you stay organized and productive.
                Our task management solution is built using ReactJS, offering a seamless and intuitive experience for managing your tasks and projects.
              </p>
              <p>
                With Task Manager, you can create, organize, and prioritize your tasks effortlessly. Whether you're an individual looking to manage personal tasks or a team collaborating on complex projects, our application has the tools you need.
              </p>
              <p>
                Key Features:
              </p>
              <ul>
                <li>Task Organization: Create and categorize tasks, ensuring a clear overview of your workload.</li>
                <li>Collaborative Environment: Collaborate with your team, assign tasks, and track progress in real-time.</li>
              </ul>
              <p>
                Our mission is to simplify task management, boost your productivity, and reduce stress. With our Task Manager built on ReactJS, you can regain control over your tasks and focus on what matters most.
              </p>
              <p>
                Stay organized, stay productive with Task Manager!
              </p>
            </div>
          </div>
        </div>
      </div>       
    </div>
  );
}

export default About;
