import { Menu } from './Menu';

const Sidebar = ({ goToSection, activeSection }) => {
  return (
    <div className="sticky top-0 left-0 z-50 self-start w-0 h-screen drawer xl:w-fit xl:drawer-open ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle peer" />
      <label
        htmlFor="my-drawer"
        className="absolute left-0 px-5 py-2 text-2xl transition-transform duration-300 rounded-r-lg cursor-pointer peer-checked:-translate-x-48 md:text-3xl top-3 bg-base-100 md:top-6 drawer-button xl:hidden "
      >
        <i className="fa-solid fa-bars text-neutral-content opacity-90"></i>
      </label>
      <div className="flex flex-col items-center justify-center h-fit w-fit drawer-content"></div>
      <div className="overflow-hidden overflow-x-hidden drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="grid min-h-full px-10 max-xl:backdrop-blur-md max-xl:backdrop-brightness-75 xl:bg-transparent xl:px-0 text-base-content">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="absolute right-0 cursor-pointer top-16 xl:hidden"
          >
            <div className="px-4 py-2 rounded-none bg-opacity-60 bg-base-200 rounded-l-xl">
              <i className="px-2 text-2xl fa-solid text-neutral-content fa-caret-left"></i>
            </div>
          </label>
          <div className="w-0.5 h-full bg-gradient-to-t fixed opacity-40 right-0 inset-y-0 my-auto from-transparent via-neutral to-transparent"></div>
          <Menu activeSection={activeSection} goToSection={goToSection} />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
