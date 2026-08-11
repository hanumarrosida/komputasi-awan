const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Endpoint PUT /api/tasks/:id (Update Task)
router.put("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { title, description } = req.body;

  try {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Update gagal",
    });
  }
});

module.exports = router;
