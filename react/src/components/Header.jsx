export default function Header() {
  return (
    <nav
      className="navbar navbar-dark px-3"
      style={{ position: "sticky", top: 0, zIndex: 1030, backgroundColor: "#2f6f4f" }}
    >
      {/* Mobile toggle button */}
      <button
        className="btn btn-outline-light d-md-none me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarMenu"
      >
        <i className="bi bi-list"></i>
      </button>

      <span className="navbar-brand mb-0 h1">Online Customer Service</span>
    </nav>
  );
}
