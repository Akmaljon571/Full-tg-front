import { useEffect, useRef, useState } from 'react'
import { MenuOutlined } from "@ant-design/icons";
import './header.scss'
import useStart from "../../hooks/useStart"
import { useNavigate } from 'react-router-dom';

function Header() {
    const search = useRef()
    const navigate = useNavigate()
    const baza = JSON.parse(localStorage.getItem("baza"))
    const { mainData, setOzgar, ozgar, setMainData, chat, setChat, port } = useStart()
    const [bazacha, setbazacha] = useState(baza?.users);
    const [none, setNone] = useState(0);
    if (!ozgar) {
        setOzgar(ozgar+1)
    }
    console.log(chat);
    useEffect(() => {
       setbazacha(mainData?.users)
    }, [ozgar, mainData]);

    const isSearch = () => {
        if (search.current.value == "") {
            setbazacha(mainData.users)
        } else {
           const natija = mainData.users.filter(e => e.nik.toLowerCase().includes(search.current.value.toLowerCase()))
           setbazacha(natija)
        }
    }
    const lock = () => {
        setMainData("")
        localStorage.clear()
        setChat("")
        navigate("/")
    }

    const findUser = (id) => {
        setNone(id)
        fetch(port + "/postChat/" + id, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;',
            token: mainData.token
        },
        })
        .then((response) => response.json())
        .then((json) => setChat(json));
        setbazacha(baza.users)
        setOzgar(ozgar + 1)
    }
    return (
        <header className="header">
            <div className="header_top">
                <MenuOutlined className="header_menu" />
                <input className='header_input' onChange={isSearch} ref={search} type="text" placeholder='Search' />
                <svg onClick={lock} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-unlock-fill header_menu" viewBox="0 0 16 16">
                   <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
                </svg>
            </div>
            <ul className="header_main">
                {bazacha.map(e => (
                    <li onClick={() => findUser(e.id)} key={e.id} className={`${none == e.id ? "header_list listActive" : "header_list"}`}>
                         <img className='header_img' width={50} height={50} src={e.img[0]} alt="rasm" />
                            <div>
                                <h3 className='header_h3'>{e.name}</h3>
                               { e.kimdan.id > e.kimga.id ? 
                                 <>
                                 <span className={`${!e.kimdan.oqildi ? "header_text" : "header_text-text"}`}>{e.kimdan.title}</span>
                                 <span className='header_data'>{e.kimdan.data}</span> 
                                 {!e.kimdan.oqildi && <span className='header_sms'>1</span>}
                                 </> : e.kimdan.id < e.kimga.id ? <>
                                 <span className='header_text-text'>{e.kimga.title}</span>
                                 <span className='header_data'>{e.kimga.data}</span> 
                                 <span className='header_check'>{!e.kimga.oqildi ?<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#68abe7" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#68abe7" className="bi bi-check2-all" viewBox="0 0 16 16">
                                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                                        </svg>}</span>
                                 </> : e.kimdan ?
                               <> 
                                 <span className={`${!e.kimdan.oqildi ? "header_text" : "header_text-text"}`}>{e.kimdan.title}</span>
                                 <span className='header_data'>{e.kimdan.data}</span> 
                                 {!e.kimdan.oqildi && <span className='header_sms'>1</span>}
                               </> : e.kimga ?
                                 <>
                                 <span className='header_text-text'>{e.kimga.title}</span>
                                 <span className='header_data'>{e.kimga.data}</span> 
                                 <span className='header_check'>{!e.kimga.oqildi ?<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#68abe7" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                            </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#68abe7" className="bi bi-check2-all" viewBox="0 0 16 16">
                                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                                        </svg>}</span>
                                 </> : ""
                               }
                            </div>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header