import { services1, services2, services3, services4 } from "../assets/images/index.jsx";


export const Services = () => {
  return (
    <section className="w-full min-h-screen p-10 flex flex-col justify-center items-center">
      <div>
        <h2 className="text-4xl font-teko max-sm:text-[40px]">
          Explore the Powerful Features of{" "}
          <span className="text-[#40f440]"> AGF Xpense Xplorer</span>
        </h2>
        <p className="text-2xl font-montserrat max-sm:text-[20px] mb-4">
          You can benefit all these features to achieve your Financial Goals
        </p>
      </div>
      {/* cards */}
      <div className="flex gap-5 pt-10 max-md:flex-col max-md:items-center max-md:w-full max-md:gap-10 max-lg:flex-wrap max-lg:gap-10 max-lg:justify-center ">
        {/* card1 */}
        <div className="max-lg:w-[50%] max-md:w-full border rounded-[10px] px-6 pb-4 max-md:pb-5 max-md:px-2 flex flex-col justify-center items-center bg-[#126b09fb]">

          <img src={services1} alt="service1" className="w-[200px] max-md:w-[250px] max-xl:w-[250px]" draggable="false" />
          
          <h3 className="text-[30px] font-teko max-md:text-[40px] max-xl:text-[40px]">Category wise selection</h3>

            <p className="text-[20px] font-montserrat max-md:text-[20px] max-xl:text-[20px]">You can choose the category of your income or expense.</p>
        </div>
        {/* card2 */}
        <div className="max-lg:w-[50%] max-md:w-full px-6 pb-4 border rounded-[10px] max-md:pb-5 max-md:px-2 flex flex-col justify-center items-center bg-[#126b09fb]">
          <img src={services2} draggable="false" alt="service1" className="w-[200px] max-md:w-[250px] max-xl:w-[250px]" />
          <h3 className="text-[30px] pt-10 font-teko max-md:text-[40px] max-xl:text-[40px]">Income v/s Expense Chart</h3>
          <p className="text-[20px] font-montserrat max-md:text-[20px] max-xl:text-[20px]">All the income and expense are shown in the Bar Chart.</p>
        </div>
        {/* card3 */}
        <div className="max-lg:w-[50%] max-md:w-full px-6 pb-4 border rounded-[10px] max-md:pb-5 max-md:px-2 flex flex-col justify-center items-center max-md:pt-4 bg-[#126b09fb]">
          <img src={services3} draggable="false" alt="service1" className="w-[300px] pb-10 max-md:w-[250px] max-xl:w-[250px]" />
          <h3 className="text-[30px] font-teko max-md:text-[40px] max-xl:text-[40px]">Income and Expense in Timeline</h3>
          <p className="text-[20px] font-montserrat max-md:text-[20px] max-xl:text-[20px]">View all the income and expenses in the Timeline reports.</p>
        </div>
        {/* card4 */}
        <div className="max-lg:w-[50%] max-md:w-full px-6 pb-4 border rounded-[10px] max-md:pb-5 max-md:px-2 flex flex-col justify-center items-center max-md:pt-4 bg-[#126b09fb]">
          <img src={services4} draggable="false" alt="service1" className="w-[200px] pb-8 max-md:w-[200px] max-xl:w-[250px]" />
          <h3 className="text-[30px] font-teko max-md:text-[40px] max-xl:text-[40px]">Attractive Dashboard</h3>
          <p className="text-[20px] font-montserrat max-md:text-[20px] max-xl:text-[20px]">Experience an attractive dashboard to view all your reports.</p>
        </div>
      </div>
    </section>
  );
};
