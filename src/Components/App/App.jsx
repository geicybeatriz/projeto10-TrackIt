import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../Context/context";
import Login from "../Login"
import Register from "../Register"
import Habits from "../Habits"
import { useState } from "react";

export default function App(){
    const [apiData, setApiData] = useState({});

    return (
        <>
            <UserContext.Provider value={{apiData, setApiData}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />}/>
                        <Route path="/cadastro" element={<Register />}/>
                        <Route path="/habitos" element={<Habits/>}/>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}