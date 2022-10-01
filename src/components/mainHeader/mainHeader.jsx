import { useEffect, useState } from "react";
import useStart from "../../hooks/useStart";
import "./mainHeader.scss"
function MainHeader() {
    const { chat, yesFooter, setYesFooter } = useStart()
    const [data, setdata] = useState({});
    useEffect(() => {
        setdata(chat)
    }, [chat]);
    return ( 
        <div className={`${yesFooter ? "Maintop" : "MaintopYes"}`}>
          <div className="left">
            <h4>{data?.findUser?.name}</h4>
            <p>last seen {data?.findUser?.isOnline}</p>
          </div>
          <div className="rigth">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search header_menu" viewBox="0 0 16 16">
               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <svg onClick={() => {setYesFooter(!yesFooter)}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill={`${yesFooter ? "#4082bc" : "#52616e"}`} className="bi bi-folder2-open header_menu" viewBox="0 0 16 16">
                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots-vertical header_menu" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg>
          </div>
        </div> 
    );
}

export default MainHeader;