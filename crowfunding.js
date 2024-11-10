let projects = [];

// Function to display the create project form
function showCreateProjectForm() {
  document.getElementById("project-form").style.display = "block";
}

// Function to hide the create project form
function hideCreateProjectForm() {
  document.getElementById("project-form").style.display = "none";
}

// Function to create a project
function createProject() {
  const name = document.getElementById("project-name").value;
  const description = document.getElementById("project-description").value;
  const goal = parseFloat(document.getElementById("project-goal").value);
  
  if (name && description && goal > 0) {
    const newProject = {
      name,
      description,
      goal,
      amountRaised: 0,
      updates: []
    };
    projects.push(newProject);
    displayProjects();
    hideCreateProjectForm();
  } else {
    alert("Please fill out all fields correctly.");
  }
}

// Function to display projects
function displayProjects() {
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = "";

  projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <p>Goal: $${project.goal}</p>
      <p>Raised: $${project.amountRaised}</p>
      <button onclick="contribute(${index})">Contribute</button>
      <button onclick="addUpdate(${index})">Add Update</button>
      <ul id="updates-${index}">
        ${project.updates.map(update => `<li>${update}</li>`).join("")}
      </ul>
    `;
    projectList.appendChild(projectCard);
  });
}

// Function to contribute to a project
function contribute(index) {
  const amount = parseFloat(prompt("Enter contribution amount:"));
  if (amount > 0) {
    projects[index].amountRaised += amount;
    displayProjects();
  } else {
    alert("Please enter a valid amount.");
  }
}

// Function to add updates to a project
function addUpdate(index) {
  const update = prompt("Enter update message:");
  if (update) {
    projects[index].updates.push(update);
    displayProjects();
  }
}
