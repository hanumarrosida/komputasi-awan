import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import ServerForm from "../components/ServerForm";
import ServerTable from "../components/ServerTable";
import api from "../services/api";

function Dashboard() {
  // ============================
  // STATE
  // ============================
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);

  // ============================
  // LOAD DATA
  // ============================
  const loadTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Gagal mengambil data :", error);
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // LOAD PERTAMA
  // ============================
  useEffect(() => {
    loadTasks();
  }, []);

  // ============================
  // RENDER
  // ============================
  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>

      {/* Dashboard Cards */}
      <div className="row g-3 mb-4">
        <DashboardCard
          title="Total Server"
          value={tasks.length}
          color="primary"
        />
        <DashboardCard
          title="Running"
          value={tasks.filter((task) => task.status === "Running").length}
          color="success"
        />
        <DashboardCard
          title="Stopped"
          value={tasks.filter((task) => task.status === "Stopped").length}
          color="danger"
        />
        <DashboardCard
          title="Maintenance"
          value={tasks.filter((task) => task.status === "Maintenance").length}
          color="warning"
        />
      </div>

      {/* Form */}
      <ServerForm
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        loadTasks={loadTasks}
      />

      {/* Table */}
      <ServerTable
        tasks={tasks}
        loading={loading}
        onEdit={setEditingTask}
        loadTasks={loadTasks}
      />
    </div>
  );
}

export default Dashboard;
