import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-60 bg-gray-300">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <main className="p-4 flex-1 overflow-y-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
