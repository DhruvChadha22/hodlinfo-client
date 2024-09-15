import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
    minuteTimer: number;
    isDarkTheme: boolean;
    handleThemeChange: () => void;
}

export const Header = ({
    minuteTimer,
    isDarkTheme,
    handleThemeChange,
}: Props) => {
    return (
        <div style={{padding: "20px 30px 0px"}}>
            <div className="align-items-center justify-content-sm-center row">
                <div className="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">
                    <a href="/">
                        <div className="padding-none text-center-xs col-12 col-sm-12 col-md-11 col-lg-11">
                            {isDarkTheme
                                ? (
                                    <img src="/logo-dark.png" style={{padding: "10px"}} height={67} width={299} />
                                )
                                : (
                                    <img src="/logo-light.png" style={{padding: "10px"}} height={67} width={299} />
                                )
                            }
                        </div>
                    </a>
                </div>
                <div className="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">
                    <div className="btn-group">
                        <button type="button" aria-haspopup="true" aria-expanded="false" className="header-button dropdown-toggle btn btn-secondary">
                            INR
                        </button>
                    </div>
                    <div className="btn-group">
                        <button type="button" aria-haspopup="true" aria-expanded="false" className="header-button dropdown-toggle btn btn-secondary">
                            BTC
                        </button>
                    </div>
                    <div className="btn-group">
                        <a target="_blank" href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn" type="button" aria-haspopup="true" aria-expanded="false" className="header-button btn btn-secondary">
                            BUY BTC
                        </a>
                    </div>
                </div>
                <div className="right-header col-12 col-sm-12 col-md-5 col-lg-4">
                    <div className="d-inline-flex flex-wrap align-items-center justify-content-center">
                        <div className="progress-bar-wrapper">
                            <CircularProgressbar value={minuteTimer} maxValue={60} text={minuteTimer.toString()} styles={buildStyles({textColor: "#3DC6C1", pathColor: "#3DC6C1", textSize: "45px"})}/>
                        </div>
                        <a className="color-white" href="#">
                            <div className="d-flex telegram-logo-text header-telegram-button btn align-items-center pointer color-white">
                                <div className="d-inline-block">
                                    <img src="/telegram-icon.png" className="telegram-logo" />
                                </div>
                                <div className="text-nowrap d-inline-block color-white">
                                    Connect Telegram
                                </div>
                            </div>
                        </a>
                        <div className="margin-10 d-inline-block">
                            <label className="switch">
                                <input type="checkbox" checked={isDarkTheme} onChange={handleThemeChange} />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
