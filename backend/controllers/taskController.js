const prisma = require("../prisma");
// GET semua task
exports.getAllTasks = async (req, res) => {
try {
const tasks = await prisma.task.findMany();
res.json(tasks);
} catch (error) {
res.status(500).json({ error: error.message });
}
};// GET task berdasarkan ID
exports.getTaskById = async (req, res) => {
try {
const id = Number(req.params.id);
const task = await prisma.task.findUnique({
where: { id }
});
if (!task) {
return res.status(404).json({
message: "Task tidak ditemukan"
});
}
res.json(task);
} catch (error) {
res.status(500).json({ error: error.message });
}
};
// POST task baru
exports.createTask = async (req, res) => {
try {
const { title, description } = req.body;
const task = await prisma.task.create({
data: {
title,
description
}
});
res.status(201).json(task);
} catch (error) {
res.status(500).json({ error: error.message });
}
};
// UPDATE task
exports.updateTask = async (req, res) => {
try {
const id = Number(req.params.id);const { title, description, status } = req.body;
const task = await prisma.task.update({
where: { id },
data: {
title,
description,
status
}
});
res.json(task);
} catch (error) {
res.status(500).json({ error: error.message });
}
};
// DELETE task
exports.deleteTask = async (req, res) => {
try {
const id = Number(req.params.id);
await prisma.task.delete({
where: { id }
});
res.json({
message: "Task berhasil dihapus"
});
} catch (error) {
res.status(500).json({ error: error.message });
}
};