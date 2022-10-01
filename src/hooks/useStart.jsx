import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const { mainData, setMainData, ozgar, setOzgar, port, chat, setChat } = useContext(State)

   return { mainData, setMainData, ozgar, setOzgar, port, chat, setChat }
  
}

export default useStart;