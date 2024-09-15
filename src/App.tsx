import "./App.css";
import axios from "axios";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

type ResData = {
    id: string;
    name: string;
    last: string;
    buy: string;
    sell: string;
    volume: string;
    base_unit: string;
}[];

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
    const [minuteTimer, setMinuteTimer] = useState<number>(60);
    const [data, setData] = useState<ResData>();

    useEffect(() => {
        getFreshData().then((data) => setData(data));
    }, []);

    useEffect(() => {
        if (minuteTimer === 0) {
            getFreshData();
            setMinuteTimer(60);
        } 
        else {
            setTimeout(() => setMinuteTimer(minuteTimer - 1), 1000);
        }
    }, [minuteTimer]);

    const getFreshData = async () => {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}`);
        const newData = await response.data;
        setData(newData);
        return newData;
    };

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div>
            <div className={isDarkTheme ? "theme-dark" : "theme-light"} style={{paddingBottom: "47px"}}>
                <Header minuteTimer={minuteTimer} isDarkTheme={isDarkTheme} handleThemeChange={handleThemeChange} />
                <Content data={data} />
                <Footer />
            </div>
            <div className="d-flex justify-content-center" style={{border: "solid 1px #191d28", backgroundColor: "#191d28", position: "fixed", left: 0, alignItems: "center", width: "100vw", height: "47px", bottom: 0, zIndex: 8}}>
                <button className="add-button btn btn-outline-info" style={{display: "block"}}>
                    Add hodlinfo to home screen
                </button>
            </div>
        </div>
    );
};

export default App
