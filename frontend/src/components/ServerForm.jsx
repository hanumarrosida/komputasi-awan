import { useEffect, useState } from "react";
import api from "../services/api";

function ServerForm({ editingTask, setEditingTask, loadTasks }) {
  // ============================
  // STATE
  // ============================
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // ============================
  // SAAT MODE EDIT
  // ============================
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  // ============================
  // SIMPAN / UPDATE
  // ============================
  const save = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await api.put(`/tasks/${editingTask.id}`, {
          title,
          description,
          status: editingTask.status,
        });
      } else {
        await api.post("/tasks", {
          title,
          description,
        });
      }
      // Refresh tabel
      await loadTasks();

      // Reset form
      setTitle("");
      setDescription("");
      setEditingTask(null);
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan data");
    }
  };

  // ============================
  // BATAL EDIT
  // ============================
  const cancelEdit = () => {
    setTitle("");
    setDescription("");
    setEditingTask(null);
  };

  // ============================
  // UI
  // ============================
  return (
    <div className="card shadow">
      <div className="card-header">
        <h5 className="mb-0 fw-bold">
          {editingTask ? "Edit Task" : "Tambah Task"}
        </h5>
      </div>
      <div className="card-body">
        <form onSubmit={save}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Title</label>
            <input
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary me-2" type="submit">
            {editingTask ? "Update" : "Save"}
          </button>
          {editingTask && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ServerForm;
