import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
  const [user, setUser] = useState(false);
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };
  const handleUser = () => {
    if (!user) {
      setUser(true);
    } else {
      setUser(false);
    }
  };
  return (
    <div data-theme={theme ? "lemonade" : "night"}>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <Header toggleTheme={toggleTheme}></Header>

          <Outlet></Outlet>
          <Footer></Footer>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link
                onClick={handleUser}
                // to={"/logIn"}
                className={user ? "hidden " : " "}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                onClick={handleUser}
                className={
                  "btn btn-ghost normal-case text-xl " + (user ? " " : "hidden")
                }
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
