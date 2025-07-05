import {createBrowserRouter} from "react-router-dom";
import {App} from "../App.tsx";
import {Error404} from "../components/pages/Error404.tsx";
import {Adidas} from "../components/pages/Adidas.tsx";
import {Puma} from "../components/pages/Puma.tsx";
import {Fila} from "../components/pages/Fila.tsx";
import {Prices} from "../components/pages/Prices.tsx";
import {Model} from "../components/pages/Model.tsx";
import {ProtectedPage} from "../components/pages/ProtectedPage.tsx";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    FILA: '/fila',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTEDPAGE: '/protectedPage',
} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            }, {
                path: PATH.PUMA,
                element: <Puma/>,
            }, {
                path: PATH.FILA,
                element: <Fila/>,
            }, {
                path: PATH.PRICES,
                element: <Prices/>,
            }, {
                path: PATH.MODEL,
                element: <Model/>
            }, {
                path: PATH.PROTECTEDPAGE,
                element: <ProtectedPage/>
            }

        ]


    },

]);