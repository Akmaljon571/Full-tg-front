import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStart from "./hooks/useStart";

function Prive() {
    const { setMainData, port } = useStart()
    const [not, setNot] = useState(false);
    const pas = useRef()
    const navigate = useNavigate()

    const btn = () => {
       if (pas.current.value == "") {
        setNot(true)
        setTimeout(() => {
            setNot(false)
        }, 1000);
       } else {
        fetch(port + "/login", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
              password: pas.current.value,
              data: `${new Date().getHours()}:${new Date().getMinutes()}`
            }),
            })
            .then((response) => response.json())
            .then((json) => {
               if (!json.token) {
                setNot(true)
                setTimeout(() => {
                    setNot(false)
                }, 1000);
               } else {
                setMainData(json)
                navigate("/")
               }
            });
       }
    }
    return ( 
        <div className="prive">
            <h3 className="prive_h3">Enter your local passcode</h3>
            <span className={`${not ? "not prive_span" : "prive_span"}`}>your passcode</span>
            <input ref={pas} className={`${not ? "notInput prive_input" : "prive_input"}`} type="password" />
            <button onClick={btn} className="prive_btn">submit</button>
            <a className="prive_link" href="#">Log out</a>
        </div>
     );
}

export default Prive;