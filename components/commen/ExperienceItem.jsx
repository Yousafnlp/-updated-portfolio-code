const ExperienceItem = ({ title, years, description, institute }) => {
  return (
    <div
      className="flex gap-2 sm:gap-4"
  
    >
      <div className="w-2 h-[130px] bg-[#55e6a5] rounded-full" />
      <div className="space-y-[2px] bg-gradient-to-b from-[#0d1b29]/90 to-[#0d1b29] p-5 md:p-8 rounded-xl w-full sm:w-[calc(100%-50px)] cursor-pointer border border-transparent hover:border-[#55e6a5] transition-all duration-300 leading-[1]">
        <h3 className="md:text-xl text-base font-semibold text-white">
          {title}
        </h3>
        <p className="md:text-base text-sm text-white">{institute}</p>
        <p className="md:text-sm text-xs text-white/70">{years}</p>
        <p className="md:text-sm text-xs text-white pt-[3px]">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
