import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';
const HistoricOverview = () => {
    const [data, setData] = useState({});
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});
    useEffect(() => {
        setData({
            options: {
                chart: {
                    id: "basic-bar",
                    type: "line",
                    width: "100%",
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
                    data: [30, 40, 45, 50, 0,50,60,45,14],
                    stroke: {
                        show: false
                    },
                    markers: {
                        size: 0
                    },
                    color: '#DB8C313D'
                }
            ],
        });
        setData2(
            {
                options: {
                    chart: {
                        id: "basic-bar",
                        type: "line",
                        width: "100%",
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
                        data: [30, 40, 45, 40,30,20],
                        stroke: {
                            show: false
                        },
                        markers: {
                            size: 0
                        },
                        color: '#2FFE82'
                    }
                ],
            }
        )
        setData3({
            options: {
                chart: {
                    id: "basic-bar",
                    type: "line",
                    width: "100%",
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
                    color: '#DB4831'
                }
            ],
        })
    }, []);
    return (
        <div className="w-full px-7 grid grid-cols-3 gap-3">
            <div className="w-full bg-[#151618] h-[110px] flex  rounded-[10px] p-3">
                <div className='mr-3'>
                    <div className="flex items-center">
                        <img src="./assets/images/icons/SgnalsYellowIcon.svg" />
                        <h1 className="ml-3 font-bold text-white text-[14px]">SINAIS</h1>
                    </div>
                    <p className="text-[25px] mt-2 text-white font-bold">51</p>
                </div>
                {data.options && (
                    <Chart
                        options={data.options}
                        series={data.series}
                        type="area"
                        height={60}
                    />
                )}
            </div>
            <div className="w-full bg-[#151618]  h-[110px] flex  rounded-[10px] p-3">
                <div className='mr-3'>
                    <div className="flex items-center">
                        <img src="./assets/images/icons/winIcon.svg" />
                        <h1 className="ml-3 font-bold text-white text-[14px]">WIN</h1>
                    </div>
                    <p className="text-[25px] text-[#2FFE82] mt-2  font-bold">35</p>
                </div>
                {data.options && (
                    <Chart
                        options={data2.options}
                        series={data2.series}
                        type="area"
                        height={60}
                    />
                )}
            </div>
            <div className="w-full bg-[#151618] h-[110px] flex rounded-[10px] p-3">
                <div className='mr-3'>
                    <div className="flex items-center">
                        <img src="./assets/images/icons/losIcon.svg" />
                        <h1 className="ml-3 font-bold text-white text-[14px]">LOSS</h1>
                    </div>
                    <p className="text-[25px] mt-2 text-[#DB4831] font-bold">16</p>
                </div>
                {data.options && (
                    <Chart
                        options={data3.options}
                        series={data3.series}
                        type="area"
                        height={60}
                    />
                )}
            </div>
        </div>
    )
}

export default HistoricOverview