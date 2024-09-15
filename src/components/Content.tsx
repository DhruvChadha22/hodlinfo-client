import { formatCurrency } from "../lib/utils";

type Props = {
    data?: {
        id: string;
        name: string;
        last: string;
        buy: string;
        sell: string;
        volume: string;
        base_unit: string;
    }[];
};

export const Content = ({ data }: Props) => {
    return (
        <div>
            <div className="top d-flex justify-content-around">
                <div className="d-flex flex-col align-items-center justify-content-center">
                    <p className="text-size-xl text-cyan">0.1 %</p>
                    <p className="text-size-md text-grey">5 mins</p>
                </div>
                <div className="d-flex flex-col align-items-center justify-content-center">
                    <p className="text-size-xl text-cyan">0.96 %</p>
                    <p className="text-size-md text-grey">1 Hour</p>
                </div>
                <div className="d-flex flex-col align-items-center justify-content-center">
                    <p className="text-size-lg text-grey" style={{paddingTop: "1rem"}}>Best Price to Trade</p>
                    <p className="text-size-2xl">₹ 38,79,134</p>
                    <p className="text-size-sm text-grey">Average BTC/INR net price including commission</p>
                </div>
                <div className="d-flex flex-col align-items-center justify-content-center">
                    <p className="text-size-xl text-cyan">2.73 %</p>
                    <p className="text-size-md  text-grey">1 Day</p>
                </div>
                <div className="d-flex flex-col align-items-center justify-content-center">
                    <p className="text-size-xl text-cyan">7.51 %</p>
                    <p className="text-size-md text-grey">7 Days</p>
                </div>
            </div>
            <div>
                <table className="tbl">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Last</th>
                            <th>Buy / Sell Price</th>
                            <th>Volume</th>
                            <th>Base Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((rec, index) => (
                            <tr key={rec.id}>
                                <td>{index + 1}</td>
                                <td>{rec.name}</td>
                                <td>{formatCurrency(rec.last)}</td>
                                <td>{formatCurrency(rec.buy)} / {formatCurrency(rec.sell)}</td>
                                <td>{rec.volume}</td>
                                <td>{rec.base_unit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
