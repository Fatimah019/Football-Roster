import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";
import Header from "../Header"
import styles from "./appshell.module.css"

const AppShell = () => {

    const handleFilter = (val) => {
        console.log(val, "vvvvv")
    }
    return (
        <div className={styles.app}>
            <SideBar />
            <main>
                <Header handleFilter={handleFilter} />
                <div className={styles.content}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AppShell;
