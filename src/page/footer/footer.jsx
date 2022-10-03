import { useEffect, useState } from 'react';
import useStart from '../../hooks/useStart'
import './footer.scss'

function Footer() {
    const { chat, yesFooter, setYesFooter } = useStart()
    const [data, setData] = useState({});
    
    useEffect(() => {
        setData(chat)
    }, [chat]);

    return (
        <footer className="footer">{ data?.findUser ? 
         <section className={`${yesFooter ? "footerSection" : "none"}`}>
           <div className="top">
            <h4>User Info</h4>
            <svg onClick={() => setYesFooter(!yesFooter)} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x header_menu" viewBox="0 0 16 16">
                 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
           </div>
           <div className="footer_user">
              <img width={70} height={70} src={data?.findUser.img} alt="" />
              <div className="ota">
                 <h2>{data?.findUser?.name}</h2>
                 <p>last seen today at{data?.findUser?.isOnline}</p>
              </div>
           </div>
           <hr className='hr' />
           <div className="footer_info">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            <div className="footer_info_d">
              <p>{data?.findUser?.nomer}</p>
              <span>Mobile</span>
            </div>
            <div className="footer_info_d">
              <p>{chat?.findUser?.status}</p>
              <span>Bio</span>
            </div>
            <div className="footer_info_d">
              <p>{data?.findUser?.nik}</p>
              <span>UserName</span>
            </div>
            <hr className='he' />
           </div>
           <hr className='hrData' />
           <div className="footer_qon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg>
            <span className='qonsss' >Notifications</span>
            <label htmlFor="check">
                <span className="ota">
                    <input className="input" id="check" type="checkbox" />
                    <span className="bola"></span>
                    <span className="bg-sun"></span>
                    <span className="bg-moon"></span>
                </span>
            </label>
           </div>
         </section> : ""
       }</footer>
    )
}

export default Footer