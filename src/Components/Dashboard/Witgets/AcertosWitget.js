import { useState, useEffect } from "react";
import Chart from 'react-apexcharts';

const AcertosWitget = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            options: {
                chart: {
                    id: "basic-donut",
                    type: "donut",
                    sparkline: {
                        enabled: true
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#34C759', '#FF3737'], // Green for acertos, Red for perdas
                labels: ['Acertos', 'Perdas'],
                plotOptions: {
                    pie: {
                        donut: {
                            size: '70%'
                        }
                    }
                }
            },
            series: [44, 56] // Example data for acertos and perdas
        });
    }, []);

    return (
        <div className="flex bg-[#151618] rounded-[10px] p-2 mt-4 mr-4   flex-col text-white ">

            <div className="justify-start">
                    <h1 className="font-bold mt-2 ml-2">MÉDIA DE ACERTOS</h1>
            </div>
            <div className="w-full relative ml-3 flex h-full items-center justify-center">
                {data.options && (
                    <Chart
                        options={data.options}
                        series={data.series}
                        type="donut"
                    />
                )}
                <h1 className="absolute font-bold text-[20px] top-[45%]">44</h1>
            </div>

        </div>
    );
};

export default AcertosWitget;