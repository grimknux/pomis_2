import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <Header />

      <div className="d-flex flex-grow-1">

        {/* Sidebar (fixed width) */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-grow-1 p-4">
          {children}
        </main>

      </div>
    </div>
  );
}
