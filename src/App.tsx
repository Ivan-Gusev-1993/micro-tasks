import styles from "./components/Site.module.css";
import {NavLink, Outlet} from 'react-router-dom';
import {S} from './components/pages/_styles';

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    NONAME: '/abibas',
    PRICES: '/prices',
} as const

export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.NONAME}>NONAME</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>PRICES</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                    {/*<Routes>*/}
                    {/*  <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*  <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*  <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*  <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*  <Route path={PATH.PRICES} element={<Prices/>}/>*/}
                    {/*  /!*<Route path={'/adidas/:id'} element={<Model/>}/>*!/*/}
                    {/*  <Route path={'/:model/:id'} element={<Model/>}/>*/}

                    {/*  <Route path={'/*'} element={<Error404/>}/>*/}

                    {/*  /!*<Route path={'/page/error'} element={<Error404/>}/>*!/*/}
                    {/*  /!*<Route path={'/*'} element={<Navigate to={'/page/error'}/>}/>*!/*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
