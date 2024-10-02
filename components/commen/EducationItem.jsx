const EducationItem = ({ title, description, institute }) => {
  return (
    <div
      className="flex gap-1 md:gap-4"
    
    >
      <div className="w-2 h-[50px] bg-[#55e6a5] rounded-full" />
      <div className="space-y-[2px] bg-gradient-to-b from-[#0d1b29]/90 to-[#0d1b29] md:p-8 p-5 rounded-xl w-full md:w-[calc(100%-50px)] cursor-pointer border border-transparent hover:border-[#55e6a5] transition-all duration-300">
        <div className="flex gap-1 items-baseline">
          <h3 className="md:text-xl text-base font-semibold text-white">
            {title}
          </h3>
          <p className="md:text-sm text-xs text-white">{description}</p>
        </div>
        <p className="md:text-sm text-xs text-white/70">{institute}</p>
      </div>
    </div>
  );
};
export default EducationItem;
