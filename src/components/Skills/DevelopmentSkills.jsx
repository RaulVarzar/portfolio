const DevelopmentSkills = () => {
  return (
    <div className="bg-transparent stats">
      <div className=" stat">
        <div className="stat-figure text-neutral-content">
          <i className="fa-brands fa-react"></i>
        </div>
        <div className="text-2xl stat-title">React</div>
        <div className="leading-none h-fit text-md stat-value text-primary">
          25.6K
        </div>
        <div className="stat-desc">21% more than last month</div>
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
