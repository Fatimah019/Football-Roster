import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";
import Header from "../Header"
import styles from "./appshell.module.css"

const AppShell = () => {
    return (
        <div className={styles.app}>
            <SideBar />
            <main>
                <Header />
                <div className={styles.content}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AppShell;
