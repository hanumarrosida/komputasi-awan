function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-3 shadow-sm">
      <span className="navbar-brand mb-0 h1 d-flex align-items-center gap-2">
        {/* SVG Icon Awan */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-cloud-fill"
          viewBox="0 0 16 16"
        >
          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 1.93 5.364 4.482A4.501 4.501 0 0 1 13 15.5H3.5a3.5 3.5 0 0 1-.055-6.993l.055-.007a5.5 5.5 0 0 1 4.906-5.158z" />
        </svg>
        Server Monitoring Dashboard
      </span>
    </nav>
  );
}

export default Navbar;
