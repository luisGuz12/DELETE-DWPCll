// Action Methods

// Get '/project/projects'
const projects = (req, res) => {
  res.render('project/addView');
};

// Get '/project/dashboard'
const dashboard = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION GET '/project'🚧");
};

// Get '/project/projects'
const addform = (req, res) => {
  res.render('project/addView');
};

// Get '/project/add'
const add = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION GET '/project/add'🚧");
};

export default {
  projects,
  dashboard,
  addform,
  add,
};
