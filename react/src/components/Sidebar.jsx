import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (to) => path === to || path.startsWith(to + "/");

  return (
    <>
      <div
        className="offcanvas-md offcanvas-start border-end"
        tabIndex="-1"
        id="sidebarMenu"
        style={{
          width: "260px",
          backgroundColor: "var(--sidebar-bg)",
          color: "var(--sidebar-text)",
          "--bs-offcanvas-bg": "var(--sidebar-bg)",
          "--bs-offcanvas-color": "var(--sidebar-text)",
          "--bs-offcanvas-width": "260px",
        }}
      >
        {/* Mobile header */}
        <div className="offcanvas-header d-md-none">
          <h5 className="offcanvas-title text-white">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        {/* Sidebar body */}
        <div
          className="offcanvas-body p-0"
          style={{
            height: "100%",
            backgroundColor: "var(--sidebar-bg)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ul className="nav flex-column p-2 menu-scroll" style={{ flex: 1 }}>

            {/* ✅ Dashboard (active example) */}
            <li className="nav-item mb-1">
              <Link
                className={`nav-link d-flex align-items-center ${
                  isActive("/dashboard") ? "active-link" : "text-white"
                }`}
                to="/dashboard"
                data-bs-dismiss="offcanvas"
              >
                <i className="bi bi-speedometer2 me-2"></i>
                Dashboard
              </Link>
            </li>

            {/* ✅ Submenu Example */}
            <li className="nav-item mb-1">
              <button
                className="btn w-100 text-start text-white d-flex justify-content-between align-items-center submenu-btn"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-idgen"
              >
                <span>
                  <i className="bi bi-card-list me-2"></i>
                  ID Generation
                </span>
                <i className="bi bi-chevron-down"></i>
              </button>

              <div
                className={`collapse ${
                  isActive("/bulk-print") || isActive("/bulk-upload") ? "show" : ""
                }`}
                id="submenu-idgen"
              >
                <ul className="nav flex-column ms-3 mt-1">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        isActive("/bulk-print") ? "active-link" : "text-white"
                      }`}
                      to="/bulk-print"
                      data-bs-dismiss="offcanvas"
                    >
                      <i className="bi bi-printer me-2"></i>
                      Bulk Print
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        isActive("/bulk-upload") ? "active-link" : "text-white"
                      }`}
                      to="/bulk-upload"
                      data-bs-dismiss="offcanvas"
                    >
                      <i className="bi bi-upload me-2"></i>
                      Bulk Upload
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* ✅ Another section */}
            <li className="nav-item mb-1">
              <Link
                className={`nav-link ${
                  isActive("/webex-meeting") ? "active-link" : "text-white"
                }`}
                to="/webex-meeting"
                data-bs-dismiss="offcanvas"
              >
                <i className="bi bi-camera-video me-2"></i>
                Webex Meetings
              </Link>
            </li>

            <li className="nav-item mb-1">
              <Link
                className={`nav-link ${
                  isActive("/srf-incoming") ? "active-link" : "text-white"
                }`}
                to="/srf-incoming"
                data-bs-dismiss="offcanvas"
              >
                <i className="bi bi-inbox me-2"></i>
                Incoming Requests
              </Link>
            </li>

          </ul>

          <div className="sidebar-footer p-3 border-top" style={{ color: "var(--sidebar-text)" }}>
            <div className="small">© 2025 Online Customer Service</div>
          </div>
        </div>
      </div>
    </>
  );
}
