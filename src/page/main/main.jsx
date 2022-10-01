import { useEffect, useState } from 'react';
import MainHeader from '../../components/mainHeader/mainHeader'
import useStart from '../../hooks/useStart'
import './main.scss'

function Main() {
    const { chat } = useStart()
    const [data, setData] = useState({});
    
    useEffect(() => {
        setData(chat)
        console.log(data);
    }, [chat]);


    return (
       <main className='main'>{ data?.findUser ? 
         <section className='main_Section'>
            <MainHeader />
         </section> : <h4 className='ortadagiYozuv'>Select a chat to start messaging</h4>
       }</main>
    )
}

export default Main