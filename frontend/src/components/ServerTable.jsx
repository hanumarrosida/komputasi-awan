import api from "../services/api";

function ServerTable({ tasks, loading, onEdit, loadTasks }) {
  // ============================
  // DELETE
  // ============================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus task ini?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/tasks/${id}`);
      await loadTasks();
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus data");
    }
  };

  // ============================
  // LOADING
  // ============================
  if (loading) {
    return (
      <div className="card shadow mt-4">
        <div className="card-body text-center">
          <h5>Loading data...</h5>
        </div>
      </div>
    );
  }

  // ============================
  // EMPTY STATE
  // ============================
  if (tasks.length === 0) {
    return (
      <div className="card shadow mt-4">
        <div className="card-body text-center">
          <h5>Belum ada data.</h5>
          <p className="text-muted mb-0">Silakan tambahkan task baru.</p>
        </div>
      </div>
    );
  }

  // ============================
  // TABLE
  // ============================
  return (
    <div className="card shadow mt-4">
      <div className="card-header">
        <h5 className="mb-0 fw-bold">Task List</h5>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th width="180">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td className="fw-semibold">{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <span
                    className={`badge ${
                      task.status === "Running"
                        ? "bg-success"
                        : task.status === "Stopped"
                        ? "bg-danger"
                        : task.status === "Maintenance"
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                    }`}
                  >
                    {task.status || "Pending"}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(task)}
                  >
                    ✏ Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(task.id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServerTable;
