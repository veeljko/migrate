import "../styles/MainLayout.scss"
import { Outlet } from 'react-router';
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function MainLayout() {
  return (
    <div className="global-layout">
      <div className="overview-page">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
