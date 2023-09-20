import './App.css';
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import {AuthProvider} from "./contect/AuthProvider";
import {useState} from "react";

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
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
