import styles from "./components/Site.module.css";
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from './components/pages/_styles';

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    FILA: '/fila',
    PRICES: '/prices',
    PROTECTEDPAGE: '/protected',
    LOGIN: '/login',
} as const

export const App = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.FILA}>FILA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>PRICES</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTEDPAGE}>ProtectedPage</NavLink></S.NavWrapper>
                    {/*<S.NavWrapper><NavLink to={PATH.LOGIN}>login</NavLink></S.NavWrapper>*/}
                </div>
                <div className={styles.content}>

                    <div className={styles.horizontalNavigation}>
                        <NavLink className={styles.linkLikeButton} to={PATH.ADIDAS}>на главную</NavLink>
                        <button className={styles.buttonLikeLink} onClick={()=> navigate(-1)}>назад</button>
                    </div>
                    <Outlet/>
                    {/*<Routes>*/}
                    {/*  <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*  <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*  <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*  <Route path={PATH.PAGE3} element={<Fila/>}/>*/}
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
