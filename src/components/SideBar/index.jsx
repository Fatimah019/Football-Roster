import React from "react";
import styles from "./sidebar.module.css"
import { NavLink } from "react-router-dom"
import classNames from "classnames/bind";
import { ReactComponent as SideBarBallIcon } from "../../assets/icons/ball_icon.svg"
import { ReactComponent as Bars } from "../../assets/icons/bars.svg"
import { ReactComponent as UsersLine } from "../../assets/icons/user_line.svg"

const cx = classNames.bind(styles);

const navLinkData = [
    {
        url: "/roaster",
        icon: <Bars />
    },
    {
        url: "/formation-overview",
        icon: <UsersLine />
    }
]

const NavLinks = ({ url, icon }) => {
    return <NavLink
        to={`${url}`}
        className={({ isActive }) => {
            return cx({ nav_links: true, active: isActive });
        }}
    >
        {icon}
    </NavLink>
}

const SideBar = () => {
    return (
        <div className={styles.side_bar}>
            <div className={styles.side_bar_ball_icon}>
                <SideBarBallIcon />
            </div>
            <ul className={styles.side_bar_list}>
                {
                    navLinkData?.map((link, index) => {
                        return <li key={index}>
                            <NavLinks url={link?.url} icon={link?.icon} />
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default SideBar