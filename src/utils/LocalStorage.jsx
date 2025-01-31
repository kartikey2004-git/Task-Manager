const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI design",
        taskDescription: "Redesign the UI for better UX",
        taskDate: "2024-10-14",
        category: "Design",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Wireframe creation",
        taskDescription: "Create wireframes for the redesign",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription: "Review client feedback on designs",
        taskDate: "2024-10-13",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design review",
        taskDescription: "Review design with the team",
        taskDate: "2024-10-11",
        category: "Design",
      },
    ],
  },
  {
    id: 2,
    firstName: "Nikhil",
    email: "employee2@example.com",
    password: "456",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 3,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Backend development",
        taskDescription: "Implement API endpoints",
        taskDate: "2024-10-15",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize database queries for speed",
        taskDate: "2024-10-14",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code refactor",
        taskDescription: "Refactor legacy code for readability",
        taskDate: "2024-10-13",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API documentation",
        taskDescription: "Create documentation for the new API",
        taskDate: "2024-10-12",
        category: "Documentation",
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "789",
    taskCounts: {
      active: 3,
      newTask: 0,
      completed: 5,
      failed: 2,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Project planning",
        taskDescription: "Create project timeline",
        taskDate: "2024-10-12",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Stakeholder meeting",
        taskDescription: "Conduct meeting with clients",
        taskDate: "2024-10-13",
        category: "Management",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Hold weekly sprint meeting with team",
        taskDate: "2024-10-11",
        category: "Management",
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Report generation",
        taskDescription: "Generate monthly progress report",
        taskDate: "2024-10-10",
        category: "Documentation",
      },
    ],
  },
  {
    id: 4,
    firstName: "Kavya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 3,
      completed: 4,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI/UX Research",
        taskDescription: "Research user behavior",
        taskDate: "2024-10-11",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Persona creation",
        taskDescription: "Develop user personas based on research",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "User flow mapping",
        taskDescription: "Create a user flow for the new feature",
        taskDate: "2024-10-13",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Wireframe feedback",
        taskDescription: "Gather feedback from the team on wireframes",
        taskDate: "2024-10-14",
        category: "Design",
      },
    ],
  },
  {
    id: 5,
    firstName: "Vishal",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review codebase for bugs",
        taskDate: "2024-10-10",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Feature implementation",
        taskDescription: "Develop a new feature for the app",
        taskDate: "2024-10-12",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug fixing",
        taskDescription: "Fix reported bugs from QA",
        taskDate: "2024-10-13",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Performance testing",
        taskDescription: "Test the app for performance issues",
        taskDate: "2024-10-14",
        category: "QA",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  // JavaScript object to a JSON string,
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(employees, admin);

  // JSON.parse() is a method in JavaScript that parses a JSON string, constructing the JavaScript object or value described by the string. It is commonly used to convert data received in JSON format (like from an API) into a usable JavaScript object.

  // JSON.stringify() is a method in JavaScript that converts a JavaScript object or value to a JSON string. It is often used when you need to send data to a server or store it as JSON.

  return { employees, admin };
};