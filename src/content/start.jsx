import { createContext, useEffect, useState } from "react";

export const State = createContext()


export const StatePriveder = ({ children }) => {
    const baza = JSON.parse(localStorage.getItem("baza"))
    const [mainData, setMainData] = useState(baza || "");
    const [port, setPort] = useState("http://localhost:6060");
    const [ozgar, setOzgar] = useState(0);
    const [chat, setChat] = useState([]);

    useEffect(() => {
        if (mainData) {
            fetch(port + "/user/" + mainData.data.id)
            .then((response) => response.json())
            .then((data) => setMainData(data));
        }
    }, [ozgar]);
    useEffect(() => {
        if (mainData) {
            localStorage.setItem("frontToken", JSON.stringify(mainData?.token))
            localStorage.setItem("baza", JSON.stringify(mainData))
        }
    }, [mainData]);

    const data = {mainData, setMainData, ozgar, setOzgar, port, chat, setChat}

    return <State.Provider value={data}>{ children }</State.Provider>
}