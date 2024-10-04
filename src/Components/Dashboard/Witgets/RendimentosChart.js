import { useState, useEffect } from "react";
import Chart from 'react-apexcharts';

const RendimentosChart = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            options: {
                chart: {
                    id: "basic-bar",
                    type: "line",
                    sparkline: {
                        enabled: true
                    },
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [
                {
                    name: "Rendimentos",
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                    stroke: {
                        show: false
                    },
                    markers: {
                        size: 0
                    }
                }
            ]
        });
    }, []);

    return (
        <div className=" bg-[#151618] mt-4 mr-4  rounded-[10px]">
            <h1 className="text-white font-bold mt-4 ml-4">RENDIMENTOS</h1>
            <div className="flex  p-2 items-end">
                <div className="text-white flex flex-col mr-3 mb-10">
                    {
                        [
                            30, 40, 45, 50, 49, 60, 70, 91,
                            30, 40, 45, 50, 49
                        ].reverse().map((num) => (
                            <p>{num}</p>
                        ))
                    }
                </div>

                <div>

                    <div className="w-full ml-3">
                        {data.options && (
                            <Chart

                                options={data.options}
                                series={data.series}
                                type="area"
                                width="500"
                            />
                        )}
                    </div>
                    <div className="text-white flex gap-6">
                        <p>1991</p> <p>1992</p> <p>1993</p> <p>1994</p> <p>1995</p> <p>1996</p> <p>1997</p> <p>1998</p> <p>1999</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RendimentosChart;