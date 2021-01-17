const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === 'josephinelim' && password === 'josephine') {
    return res.status(200).json({
      userId: 1,
      loggedIn: true,
      userType: 'student',
    });
  } else if (username === 'company' && password === 'company') {
    res.status(200).json({
      userId: 2,
      loggedIn: true,
      userType: 'company',
    })
  } else {
    res.status(404).json({
      loggedIn: false,
    })
  }
})
const Students = [
  {
    userId: 1,
    userType: "student",
    skills: ['React', 'Javascript'],
    experiences: [{
      company: 'Facebook',
      jobTitle: 'Software Engineering Intern',
      employmentType: 'Intern',
      from: '18-May-2020',
      to: '18-Aug-2020',
      description: 'I did a lot in Facebook.'
    },
    {
      company: 'NUS IT',
      jobTitle: 'Software Engineering Intern',
      employmentType: 'Intern',
      from: '18-May-2019',
      to: '18-Aug-2019',
      description: 'I did a lot in Facebook.'
    }],
    preferences: {
      jobType: ['Frontend Development', 'UI/UX'],
      companyType: ['Startups', 'Government Agencies'],
      workArrangement: ['Remote'],
    }
  }
]
// REST API for students
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = Students.find(student => student.userId === id);
  if (student) {
    return res.status(200).json(student);
  } else {
    return res.status(404).json("No students found!");
  }
})

app.post('/users', (req, res) => {
  Students.push(req.body);
  return res.status(200).json("User added!");
})

// REST API for companies
const Companies = [{
  companyId: 1,
  userType: "company",
  companyName: "KoolTech Company",
  industry: "Technology",
  companyType: "startup",
  employeeSkills: ["Microsoft Office"],
  companyValues: ["Integrity", "Innovation"],
  jobOpenings: [{
    jobTitle: "IT Engineer",
    department: "IT Services",
    from: "10-Jan-2020",
    to: "20-June-2020",
    jobDescription: "Description here"
  }]
}]

app.get('/companies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const company = Companies.find(company => company.userId === id);
  if (company) {
    return res.status(200).json(company);
  } else {
    return res.status(404).json("No companies found!");
  }
})

app.post('/companies', (req, res) => {
  Students.push(req.body);
  return res.status(200).json("Company added!");
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

