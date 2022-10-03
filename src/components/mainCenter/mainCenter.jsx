import { useEffect, useState } from "react";
import useStart from "../../hooks/useStart";
import "./mainCenter.scss"

function MainCenter() {
    const { yesFooter, chat } = useStart()
    const [resolt, setResolt] = useState([]);

    useEffect(() => {
        setResolt(chat)
    }, [chat]);
    return ( 
        <>
       <ul className={`${yesFooter ? "center" : "setCenter"}`}>
          {resolt?.menga?.map(e => (
            <li key={e.id} className={e.kimdan == resolt?.id ? "centerItem" : "setCenterItem"}>
                <img width={35} height={35} className={e.kimdan == resolt?.findUser?.id && resolt?.menga[e.forId + 1]?.kimdan == resolt?.findUser?.id ? "none" : "img"} src={e.kimdan == resolt.id ? resolt.findUser.img : resolt.User.img} alt="userImage" />
                <div className={e.kimdan == resolt?.findUser?.id && resolt?.menga[e.forId + 1]?.kimdan == resolt?.findUser?.id ? "father" : ""}>
                  <h3>{e.title}</h3>
                  <p>{e.data}</p>
                  <span>
                    {e.kimga == resolt?.findUser?.id ? !e.oqildi ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#66b6f5" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#66b6f5" className="bi bi-check2-all" viewBox="0 0 16 16">
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                    </svg> : ""}
                  </span>
                </div>
            </li>
          ))}
       </ul>
        </>
    );
}

export default MainCenter;