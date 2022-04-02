import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../Context/context";
import Login from "../Login"
import Register from "../Register"
import Habits from "../Habits"
import HistoricPage from "../Historic";
import TodayPage from "../Today";
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
                        <Route path="/hoje" element={<TodayPage />} />
                        <Route path="/historico" element={<HistoricPage />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}