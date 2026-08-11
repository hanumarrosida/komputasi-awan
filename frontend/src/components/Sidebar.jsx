function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ minHeight: "100vh", width: "250px" }}>
      <h5>Menu</h5>
      <hr />
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Servers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Add Server
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
