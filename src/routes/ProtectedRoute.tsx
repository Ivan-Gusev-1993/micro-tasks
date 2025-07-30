import type {ReactNode} from "react";
import {Login} from "../components/pages/Login.tsx";

type Props = {
    children: ReactNode
}

export const ProtectedRoute = ({children} : Props) => {
        const logged = false
    return logged ? children : <Login/> //<Navigate to={'/error'}/>
};
