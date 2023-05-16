import React from "react";
import whyChoose from "../mockData/whyChoose";

const WhyChoose = () => {
  return (
    <div className="mb-40 mt-24">
      <div className="mb-[7.5rem] flex flex-col md:flex-row text-center md:text-start justify-between md:gap-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-7">
          Why should an agency choose us
        </h1>
        <p className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto">
          Our security guard agency app offers a comprehensive platform for
          managing client contracts, guard assignments, and real-time incident
          reporting. Increase efficiency and transparency in your security
          operations with our easy-to-use app.
        </p>
      </div>

      <div className="max-sm:block grid grid-cols-12 gap-10">
        {whyChoose.map((choose) => (
          <div
            className={`max-sm:border-b-2 max-sm:rounded-none max-sm:w-[100%] bg-gradient-to-r from-[#F8F8F8] max-sm:from-white to-[#EFEFEF] max-sm:to-white rounded-xl p-6 ${
              choose.id < 4 ? "col-span-10 md:col-span-6 xl:col-span-4" : ""
            } ${
              choose.id === 4 &&
              "col-span-10 md:col-span-6 xl:col-span-4 xl:col-start-3"
            } ${
              choose.id === 5 &&
              "col-span-10 md:col-span-6 xl:col-span-4 md:col-start-4 xl:col-start-7"
            }`}
            key={choose.id}
          >
            <div>
              <div className="max-sm:flex">
                <div>
                  <h2 className="text-2xl font-medium max-sm:text-lg">
                    {choose.number}
                  </h2>
                  <h2 className="max-sm:text-[1.5rem] text-[2rem] font-bold mt-2 mb-5">
                    {choose.title}
                  </h2>
                </div>
                <img
                  src={choose.img}
                  alt="why choose img"
                  className="max-sm:w-28"
                />
              </div>
              <p className="max-sm:w-[100%]">{choose.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
