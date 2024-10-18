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
                    },
                    color: '#2FFE82' 
                }
            ],
        });
    }, []);

    return (
        <div className=" bg-[#151618] mt-4 mr-4 w-full md:w-[60%]  max-h-[385px]  rounded-[10px]">
            <div className="flex md:mb-4  w-full justify-between p-4 py-4">
                <h1 className="text-white font-bold md:ml-7">RENDIMENTOS</h1>
                <select class="appearance-none text-white font-bold  w-[160px] bg-[#1B985E] text-[14px] text-white  rounded-[10px] custom-select py-1 px-4">
                    <option>ULTIMOS 7 DIAS</option>
                </select>
            </div>
            <div className=" w-full h-[85%] flex  p-4 pt-0 mt-2 items-end">
                <div className="text-white text-[14px] flex flex-col mr-3 mb-10">
                    {
                        [
                            30, 40, 45, 50, 49, 60, 70, 91,
                            30, 40, 45, 50, 49
                        ].reverse().map((num) => (
                            <p>{num}</p>
                        ))
                    }
                </div>

                <div className="w-full">
                    <div className="w-[95%] md:w-full ml-3">
                        {data.options && (
                            <Chart
                                options={data.options}
                                series={data.series}
                                type="area"
                                height={'40%'}
                            />
                        )}
                    </div>
                    <div className="text-white text-[14px] mb-4 flex gap-1 md:gap-6">
                    <p>07/09</p><p>07/09</p><p>07/09</p><p>07/09</p><p>07/09</p> <p>07/09</p><p>07/09</p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RendimentosChart;