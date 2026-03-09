import "../styles/MainLayout.scss"
import { Outlet } from 'react-router';
import ThemeProvider from '@rescui/ui-contexts/lib/theme-provider';

export default function MainLayout() {
    return (
    <div className="global-layout">
        <ThemeProvider theme="dark">
            <div className="overview-page">
                <Outlet />
            </div>
        </ThemeProvider>
    </div>
    );
}
