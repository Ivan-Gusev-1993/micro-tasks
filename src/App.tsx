import React from 'react';
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Fila} from "./components/pages/Fila";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from './components/pages/_styles'
import {Model} from "./components/pages/Model";

const PATH = {
    PAGE1: "/Adidas",
    PAGE2: "/Puma",
    PAGE3: "/Fila",
    PAGE4: "/adidas/:id",
    ERROR: "/page/error",
} as const;

function App() {
    return (

        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Fila</NavLink></S.NavWrapper>
                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/Adidas"}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Fila/>}/>
                        <Route path={PATH.PAGE4} element={<Model/>}/>

                        <Route path={'/*'} element={<Error404/>}/>

                        {/*<Route path={'/page/error'} element={<Error404/>}/>*/}
                        {/*<Route path={'/*'} element={<Navigate to={'/page/error'}/>}/>*/}
                    </Routes>

                </S.Content>
            </S.Body>
            <S.Footer>shoes 2025</S.Footer>
        </div>
    );
}

export default App;