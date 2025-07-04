import {Outlet} from "react-router-dom";

const Croses = () => {
    return (
        <div>
            <div>Header</div>
            <Outlet/>
            <div>Footer</div>
        </div>
    );
};

export default Croses;