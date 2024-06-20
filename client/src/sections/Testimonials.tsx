import { testimonial1, testimonial2 } from "../assets/images/index";

export const Testimonial = () => {
  return (
    <section className="flex flex-col justify-center items-center p-10 ">
      <div>
        <h3 className="text-[60px] font-teko max-sm:text-[40px] max-lg:text-[45px]">
          What our customer feels about{" "}
          <span className="text-[#40f440]"> AGF Xpense Xplorer</span>
        </h3>
        <p className="text-[22px] mb-10 font-montserrat max-sm:text-[20px] max-sm:pb-10 max-lg:text-[25px] max-lg:pb-8">
          People are getting smart in managing their financial expenses
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src={testimonial1}
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px]"
            draggable="false"
          />
          <h3 className="text-[30px] font-bold font-palanquin max-sm:py-3 max-lg:mt-2">Jenefer Jane</h3>
          <p className="text-[22px] px-20 mt-2 font-montserrat max-sm:text-[20px] max-lg:text-[25px] max-lg:pt-2">
            "AGF Xpense Xplorer has completely transformed how I manage my
            finances. The intuitive interface and reports make tracking expenses
            effortless. I've never felt more in control of my budget!"
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-14">
          <img
            src={testimonial2}
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px]"
            draggable="false"
          />
          <h3 className="text-[30px] font-bold font-palanquin max-sm:py-3 max-lg:mt-2">Italo Mela</h3>
          <p className="text-[22px] px-20 mt-2 font-montserrat max-sm:text-[20px] max-lg:text-[25px] max-lg:pt-2">
          "AGF Xpense Xplorer is a game-changer. The detailed charts and easy-to-use interface have helped me save more and spend wisely. It's the best financial tool I've ever used!"
          </p>
        </div>
      </div>
    </section>
  );
};
