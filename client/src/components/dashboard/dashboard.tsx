// import { useUser } from "@clerk/clerk-react";
import { siteLogo } from "../../assets/images/index";
import { NavLink } from "react-router-dom";
import { CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import { useXpenseRecords } from "../../contexts/xpense-record-context";
import { UserButton } from "@clerk/clerk-react";
// import { useState } from "react";
// import { XpenseXplorerRecord } from "./xpense-xplorer-record";
// import { XpenseXplorerList } from "./xpense-xplorer-list";

export const Dashboard = () => {
    Chart.register(CategoryScale);
    Chart.register(LinearScale);
    Chart.register(BarElement);
//   const { user } = useUser();

    const { records } = useXpenseRecords();

    // const [income, setIncome] = useState();
 
    // records.map((record)=> {
    //     if(record.transactionType === 'income'){
    //         setIncome((record.amount));
    //     }
    // })

  return (
    <section className="flex w-[100vw] h-[100vh]">
        <nav className="flex flex-col justify-start items-start bg-black rounded-[10px]">
            <img src={siteLogo} alt="logo" width={300} height={150} />
            <ul className="flex flex-col w-full h-full items-start pt-10">
                <NavLink to="/dashboard" className="text-[20px] font-montserrat text-white border rounded-[10px] hover:text-[#40f440] py-2 px-2 mb-4 w-full text-left">Home</NavLink>
                <NavLink to="/new-record" className="text-[20px] font-montserrat text-white border rounded-[10px] hover:text-[#40f440] py-2 px-2 mb-4 w-full text-left">Add or View Records</NavLink>
                <NavLink to="" className="text-[20px] font-montserrat text-white border rounded-[10px] hover:text-[#40f440] py-2 px-2 mb-4 w-full text-left"><UserButton showName /></NavLink>
            </ul>
        </nav>
      <div className="dashboard-container w-full">
        {/* <h1>Welcome {user?.firstName} for Xpense Xplorer</h1> */}
        {/* <XpenseXplorerRecord />
        <XpenseXplorerList /> */}
        <div className="charts w-full flex flex-wrap">
            <div className="border rounded-[10px] w-[40vw] h-[40vh]">
                <Bar 
                    data={{
                        labels: records.map((record) => {
                            if(record.date === record.date){
                                return record.date;
                            }
                        }),
                        datasets: [
                            {
                                label: "Total Income",
                                data: records.map((record) => {
                                    if(record.transactionType === 'income'){
                                        return record.amount;
                                    }
                                }),
                            },
                            {
                                label: "Total Expense",
                                data: records.map((record) => {
                                    if(record.transactionType === 'expense'){
                                        return record.amount;
                                    }
                                }),
                                backgroundColor: [
                                    "rgba(255, 255, 255, 0.8)",
                                    "rgba(250, 192, 19, 0.8)",
                                    "rgba(220, 292, 29, 0.8)",
                                ]
                            }
                        ]
                    }}
                />
            </div>
            <div className="w-[30vw] rounded-[10px] h-[40vh] border">Chart2</div>
            <div className="w-full rounded-[10px] h-[50vh] border">Chart3</div>
        </div>
      </div>
    </section>
  );
};
