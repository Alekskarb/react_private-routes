import {Link, Outlet,  useSearchParams} from "react-router-dom";

function MainLayout() {

    return (
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
            <Outlet context={{name: 'Alex'}}/>
            {/*<input type="number" value={params} onChange={(e)=> {setParams({num: e.target.value})}}/>*/}
        </>
    );
}

export default MainLayout;
