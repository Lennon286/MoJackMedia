const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Placeholder in-memory data
const projects = [];
const entries = [];
const comments = [];
const suggestions = [];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/projects', (req, res) => {
  const project = { id: Date.now(), ...req.body };
  projects.push(project);
  res.status(201).json(project);
});

app.get('/api/projects/:projectId/entries', (req, res) => {
  const { projectId } = req.params;
  const projectEntries = entries.filter(e => e.projectId === Number(projectId));
  res.json(projectEntries);
});

app.post('/api/projects/:projectId/entries', (req, res) => {
  const { projectId } = req.params;
  const entry = { id: Date.now(), projectId: Number(projectId), ...req.body };
  entries.push(entry);
  res.status(201).json(entry);
});

app.post('/api/entries/:entryId/comments', (req, res) => {
  const { entryId } = req.params;
  const comment = { id: Date.now(), entryId: Number(entryId), ...req.body };
  comments.push(comment);
  res.status(201).json(comment);
});

app.get('/api/suggestions', (req, res) => {
  res.json(suggestions);
});

app.post('/api/suggestions', (req, res) => {
  const suggestion = { id: Date.now(), votes: 0, ...req.body };
  suggestions.push(suggestion);
  res.status(201).json(suggestion);
});

app.post('/api/suggestions/:id/vote', (req, res) => {
  const { id } = req.params;
  const suggestion = suggestions.find(s => s.id === Number(id));
  if (suggestion) {
    suggestion.votes += 1;
    res.json(suggestion);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
