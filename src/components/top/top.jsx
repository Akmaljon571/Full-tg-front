import { MinusOutlined, SwitcherOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./top.scss"

function Top() {
    const [none, setNone] = useState(false);
    const Exit = () => {
      setNone(true)
    }
    return ( 
        <div className="Project-top">
            <div className="Project-top-left">
                <MinusOutlined className="svg-1 svg" />
                <SwitcherOutlined className="svg" />
                <svg onClick={Exit} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#52616e" className="bi bi-x svg svg-3" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                {none && <span className="oqParda"></span> }
            </div>
        </div>
     );
}

export default Top;