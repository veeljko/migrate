import "../styles/MainLayout.scss"
import { Outlet } from 'react-router';

export default function MainLayout() {
    return (
    <div className="global-layout">
        <div className="overview-page">
            <Outlet />
        </div>
    </div>
    );
}
