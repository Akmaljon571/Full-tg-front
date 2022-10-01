import useStart from "./hooks/useStart";
import { Footer, Header, Main } from "./page";
import Prive from "./prive.app";

function Public() {
    const { mainData } = useStart()
    return (
        <div className="Mai-Father">
            {!mainData?.token ?
                 <Prive /> :
                 <>
                    <Header />
                    <Main />
                    <Footer />
                 </>
             }
        </div>
     );
}

export default Public;