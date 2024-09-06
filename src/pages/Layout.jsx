import {Menu} from "../Components/Menu/Menu"
import {Outlet} from "react-router-dom"

export function Layout() {

    return(
        <div className="flex">
            <Menu />
            <main>
                <Outlet />
            </main>
        </div>
    )
}