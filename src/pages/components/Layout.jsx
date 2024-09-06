import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Layout = () => {
  const location = useLocation();
  const showFooter = location.pathname !== "/contact";

  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Renders the current route's component */}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
