import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];
let nextId = 1;

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const { title, completed } = req.body;

    if (!title) 
        return res.status(400).json({ error: "title is required!" });

    const newTask = {
        id: nextId++,
        title: title,
        completed: completed || false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (!task)
        return res.status(404).json({ error: "no task with said id found" });

    res.json(task);
});

app.patch('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, completed } = req.body;

    const task = tasks.find(t => t.id === taskId);

    if (!task)
        return res.status(404).json({ error: "no task with said id found"});

    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === taskId);

    if (index === -1)
        return res.status(404).json({ error: "no task with said id found"});

    tasks.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});