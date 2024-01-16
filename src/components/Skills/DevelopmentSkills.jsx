const DevelopmentSkills = () => {
  return (
    <div className="gap-2 bg-transparent xl:gap-6 stats">
      <div className="flex flex-row items-center gap-4 ">
        <div className="stat-figure text-neutral-content">
          <i className="fa-brands fa-react"></i>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl font-semibold leading-tight text-neutral-content xl:text-3xl stat-title">
            React
          </div>
          <div className="text-xs lg:text-sm h-fit stat-value text-primary">
            Intermediate-advanced
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="text-base stat-title ">Page Views</div>
        <div className="stat-value text-secondary">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="text-base stat-value ">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
  );
};

export default DevelopmentSkills;
