import './App.css';
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import {AuthProvider} from "./contect/AuthProvider";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/users' element={<Users/>}/>
                    </Route>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
