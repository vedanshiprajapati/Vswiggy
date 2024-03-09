const Shimmer = () => {
  return (
    <div className="w-[240px] ml-[0] mr-[40px] my-[20px]">
      <div className="w-[240px] rounded-[20px] h-[160px] ml-[0] mr-[40px] my-[20px] bg-[linear-gradient(0deg,_rgb(63,_63,_63)_0%,_rgba(255,_255,_255,_0),_50%)]"></div>
      <div className="Shimmer-card-details">
        <h2 className="w-[130px] h-[30px] ml-[10px] rounded-[5px] animate-pulse bg-slate-200"></h2>
        <p className="w-[200px] h-[12px] mt-[5px] ml-[10px] rounded-[3px] animate-pulse bg-slate-200"></p>
      </div>
    </div>
  );
};

export default Shimmer;
