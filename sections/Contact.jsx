import React from "react";

const Contact = () => {
  return (
    <>
      <div className="space-y-6 bg-gradient-to-b from-[#0d1b29]/90 to-[#0d1b29] mt-10 md:mt-20  p-4 md:p-6 rounded-xl w-full cursor-pointer border border-transparent hover:border-[#55e6a5] transition-all duration-300" id="contact">
        <div className="text-3xl font-semibold text-white w-fit">contact</div>
        <div className="flex gap-2">
          <h3 className="text-base md:text-[1.2rem] font-semibold text-white leading-[1]">
            Email:
          </h3>
          <p className="text-sm md:text-base text-white/70">
            yousaf.dev.web@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
