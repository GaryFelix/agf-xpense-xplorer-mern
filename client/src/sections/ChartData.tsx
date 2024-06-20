import { report } from "../assets/images/index";

export const ChartData = () => {
  return (
    <section className="flex justify-center items-center px-10 bg-black min-h-screen gap-10 max-md:flex max-md:flex-col-reverse max-md:justify-center max-md:items-center max-lg:flex-col-reverse">
      <img src={report} alt="xpenseReport" className="w-[50%] max-lg:w-[80%] max-sm:w-full" draggable="false" />
      <div className="w-[50%] max-lg:w-full max-lg:pt-10">
        <h3 className="text-[50px] text-left font-teko max-md:text-[50px] max-lg:text-center max-lg:text-[60px]">
          Effortlessly Track Finances with Charts
        </h3>
        <p className="text-[25px] text-justify font-montserrat max-lg:text-[22px] max-lg:text-center max-sm:pt-6">
          Effortlessly track your finances with our intuitive charts, making it
          easy to visualize your income and expenses at a glance. Stay on top of
          your financial health with clear, concise with our <span className="text-[#40f440]"> AGF Xpense Xplorer</span>
        </p>
      </div>
    </section>
  );
};
