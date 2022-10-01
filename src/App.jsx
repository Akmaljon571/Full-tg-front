import { useState, useRef } from 'react';
import { Header, Main, Footer } from './page'
import './App.scss';
import "antd/dist/antd.css"
import Public from './public.app';
import Prive from './prive.app';
import Top from './components/top/top';
import useStart from './hooks/useStart';
import { useEffect } from "react"

function App() {
   const { mainData } = useStart()
   const token = JSON.parse(localStorage.getItem("frontToken"))
   const [not, setNot] = useState(token || "");
   useEffect(() => {
    if (mainData) {
      setNot(mainData.token)
    }else{
      setNot(null)
    }
   }, [mainData]);
    return (
      <>
        <Top />
        {not ? <Public /> : <Prive />}
      </>
    )
}

export default App;
