import { Menu } from "./Menu";

const Sidebar = ({ goToSection, activeSection }) => {
  return (
    <>
      <div className="sticky top-0 left-0 z-50 self-start w-0 h-screen drawer 2xl:w-fit 2xl:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center h-fit w-fit drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="absolute text-4xl top-6 drawer-button 2xl:hidden left-6"
          >
            <i className="fa-solid fa-bars text-neutral-content opacity-60"></i>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="grid min-h-full px-10 bg-base-300 2xl:bg-transparent 2xl:px-0 text-base-content">
            <div className="w-0.5 h-full bg-gradient-to-t fixed opacity-40 right-0 inset-y-0 my-auto from-transparent via-neutral to-transparent"></div>
            <Menu activeSection={activeSection} goToSection={goToSection} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
