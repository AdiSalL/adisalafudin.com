import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Drawer = () => {
  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-circle bg-dark swap swap-rotate"
        >
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu flex justify-between p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div>
            <a
              href="/"
              className="btn btn-ghost text-2xl flex flex-row-reverse justify-between items-center"
            >
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex items-center">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="swap swap-rotate">
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>

                  {/* close icon */}
                  <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </div>
              <div>adisalafudin</div>
            </a>
            <ul>
              <li className="mt-2 font-bold">
                <a href="" className="p-5">
                  Home
                </a>
              </li>
              <li className="">
                <a className="p-5">About</a>
              </li>
              <li className="">
                <a className="p-5">Project</a>
              </li>
            </ul>
          </div>

          {/* Sidebar content here */}

          <ul className="flex flex-row items-start  justify-around">
            <li>
              <a
                href="https://www.instagram.com/adi.salafudin/"
                className="btn text-2xl hover:btn-outline"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="" className="btn text-2xl hover:btn-outline">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="" className="btn text-2xl hover:btn-outline">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="" className="btn text-2xl hover:btn-outline">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
