import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function StoreCard() {
  // create a css stylesheet object for active links
  const activeStyle = {
    fontWeight: "bold",
    paddingBottom: 10 + "px",
    // here we use a string concatenation to combine multiple data types into a single string.
    borderBottom: "2px solid #000000",
  };

  // Returns the current location object, which represents the current URL in web browsers.
  const location = useLocation();
  // A URL pathname, beginning with a /. and then we use split function to exclude the forward slash.
  const currentUrl = location.pathname.split("/");

  return (
    <>
      <Container className="store-feed-container" fluid>
        {/* Categories Tab bar  */}
        <Row className="py-1 mx-3">
          {/* To keep track of the currentURL location in our application and let the user know which section of the application they are on*/}
          <h3 className="pb-3 heading">
            <span className="current-url">{currentUrl}</span> in and around Johannesburg
          </h3>

          {/* Shopping categories tabs */}
          <div className="shopping-categories d-flex gap-5 py-2 align-center">
            <div className="icon-link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M820.23-524.15v319.53q0 27.62-18.5 46.12-18.5 18.5-46.11 18.5H204.85q-27.62 0-46.12-18.5-18.5-18.5-18.5-46.12v-321.07q-25.31-18.69-37.04-49t-.5-64.69l38.93-128.31q8-24.46 25.8-38.39Q185.23-820 211.46-820h536q26.23 0 43.92 13.04 17.7 13.04 25.93 37.73l40.46 129.85q11.23 34.38-.5 65.23-11.73 30.84-37.04 50Zm-252-15.85q38.54 0 57.54-21.58 19-21.57 16-44.57L615.15-780H500.23v168q0 29.46 20.15 50.73Q540.54-540 568.23-540Zm-180 0q32.23 0 52.12-21.27 19.88-21.27 19.88-50.73v-168H345.31l-26.62 176.92q-2.46 18.62 16.27 40.85T388.23-540Zm-178 0q26.46 0 44.96-18t23.04-44.92L303.31-780h-91.85q-13.08 0-20.77 5.77-7.69 5.77-11.54 17.31l-36.92 126.3q-9.85 31.54 8.42 61.08T210.23-540Zm540 0q35.92 0 57.39-28 21.46-28 10.61-62.62l-38.92-127.84Q775.46-770 767.77-775q-7.69-5-20.77-5h-89.85l25.08 177.08Q686.77-576 705.27-558t44.96 18ZM204.85-180h550.77q10.76 0 17.69-6.92 6.92-6.93 6.92-17.7v-300.46q-8.08 2.77-15.35 3.93-7.26 1.15-14.65 1.15-27 0-47.5-10.54t-38.96-33.61q-15.69 19.53-38.69 31.84-23 12.31-55.93 12.31-23.92 0-45.5-11.15-21.57-11.16-43.42-33-20.08 21.84-44.5 33Q411.31-500 389.15-500q-25.15 0-49.03-9.62-23.89-9.61-41.89-34.53-29.46 29.46-51.5 36.8-22.04 7.35-36.5 7.35-7.38 0-14.88-1.15-7.5-1.16-15.12-3.93v300.46q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92Zm550.77 0H204.85 755.62Z" />
                </svg>
              </div>
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="all-stores"
                  className="category-name"
                >
                  All stores
                </NavLink>
              </div>
            </div>
            <div className="icon-link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M640-120q-83.08 0-141.54-58.46Q440-236.92 440-320q0-83.08 58.46-141.54Q556.92-520 640-520q83.08 0 141.54 58.46Q840-403.08 840-320q0 83.08-58.46 141.54Q723.08-120 640-120Zm0-40q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-455.38-40q-27.62 0-46.12-18.5Q120-237 120-264.62v-274.76q0-8 3.04-18.31 3.04-10.31 6.04-18.31l89.23-199.38h-32.16q-13.15 0-20.42-7.27-7.27-7.27-7.27-20.43v-9.23q0-13.15 7.27-20.42Q173-840 186.15-840h227.7q13.15 0 20.42 7.27 7.27 7.27 7.27 20.42v9.23q0 13.16-7.27 20.43t-20.42 7.27h-32.16l99.85 225.84q-8.23 4.62-16.39 11-8.15 6.39-16.23 14.23L338.77-775.38h-77.54L160-546.31v281.69q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92h186.92q2.69 11 6.96 21.12 4.27 10.11 9.35 18.88H184.62ZM640-575.38q-25.85-6.93-42.92-27.85Q580-624.15 580-652.31q0-28.15 17.08-49.08 17.07-20.92 42.92-27.84v153.85q6.92-25.85 27.85-42.93 20.92-17.08 49.07-17.08 28.16 0 49.08 17.08 20.92 17.08 27.85 42.93H640Z" />
                </svg>
              </div>
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="groceries"
                  className="category-name"
                >
                  Grocery
                </NavLink>
              </div>
            </div>
            <div className="icon-link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M160-120v-40h66.92v-139.54q-31.92-7.38-49.42-30.19-17.5-22.81-17.5-53.35V-660h173.85v276.92q0 29-17.89 52.58-17.88 23.58-49.04 30.96V-160h66.93v40H160Zm40-362.31h93.85V-620H200v137.69Zm46.92 146.16q19.31 0 33.12-13.81 13.81-13.81 13.81-33.12v-59.23H200v59.23q0 19.31 13.81 33.12 13.81 13.81 33.11 13.81Zm270 216.15q-16.5 0-28.25-11.75T476.92-160v-387.38q0-12.87 8.08-23.01 8.08-10.15 19.77-14.53l38-14.77q26.31-9.62 41-25.27 14.69-15.66 14.69-51.19v-132.94q0-13.29 8.85-22.1 8.84-8.81 21.92-8.81h58.46q13.08 0 21.93 8.85 8.84 8.84 8.84 21.92v133.08q0 35.53 15.08 51.19 15.08 15.65 41.38 25.27l38.77 14.77q11.69 4.44 19 14.57 7.31 10.12 7.31 22.97V-160q0 16.5-11.75 28.25T800-120H516.92Zm121.54-636.15h40V-800h-40v43.85Zm-121.54 300H800v-91.23l-38.77-14.77q-38-14-60.38-39-22.39-25-22.39-74.54v-40.46h-40v40.46q0 49.54-22.38 74.54-22.39 25-60.39 39l-38.77 14.77v91.23Zm0 296.15H800v-107.69H516.92V-160Zm0-147.69H800v-108.46H516.92v108.46Zm-270-134.62Zm270 134.62v-108.46 108.46Z" />
                </svg>
              </div>
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="alcohol"
                  className="category-name"
                >
                  Alcohol
                </NavLink>
              </div>
            </div>
            <div className="icon-link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M460-102v-58.46q-125-11.69-206.42-93.12Q172.15-335 160.46-460H102v-40h58.46q11.69-125 93.12-206.42Q335-787.85 460-799.54V-858h40v58.46q125 11.69 206.42 93.12Q787.85-625 799.54-500H858v40h-58.46q-11.69 125-93.12 206.42Q625-172.15 500-160.46V-102h-40Zm20-98q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-160q-49.5 0-84.75-35.25T360-480q0-49.5 35.25-84.75T480-600q49.5 0 84.75 35.25T600-480q0 49.5-35.25 84.75T480-360Zm0-40q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" />
                </svg>
              </div>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="local"
                className="category-name"
              >
                Local
              </NavLink>
            </div>
            <div className="icon-link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M260.23-240q42.77 0 72.92-29.67 30.16-29.67 30.16-72.64 0-27.84-14.85-53.92-14.84-26.08-41.46-38.54l-14.46-8.61v-244.31q0-13.62-8.89-22.96-8.88-9.35-23.42-9.35-12.85 0-22.58 9.35-9.73 9.34-9.73 22.96v244.31l-14.46 8.61q-27.38 13.46-41.84 38.65-14.47 25.19-14.47 53.81 0 42.97 30.16 72.64Q217.46-240 260.23-240Zm-.38 40q-59.23 0-100.97-41.62-41.73-41.61-41.73-101.46 0-40.55 19.31-72.66t51.46-50.72v-221.23q0-30.37 21.31-51.34 21.31-20.97 51-20.97 31.23 0 51.77 20.97 20.54 20.97 20.54 51.34v221.23q31.38 18.61 51.08 51.23 19.69 32.61 19.69 72.92 0 58.85-42.12 100.58Q319.08-200 259.85-200Zm264.3-167.69q-42.61-27.62-72.61-73.08-30-45.46-30-108.46 0-87.82 61.45-149.3Q544.43-760 632.22-760q87.78 0 149.32 61.47 61.54 61.48 61.54 149.3 0 63-30 108.46-30 45.46-72.62 73.08H524.15Zm12.62-40h194.31q33.15-25.54 52.57-60.93 19.43-35.38 19.43-80.61 0-70.44-50.2-120.61Q702.68-720 632.19-720q-70.5 0-120.57 50.16-50.08 50.17-50.08 120.61 0 46 21.04 81.38 21.04 35.39 54.19 60.16ZM632.31-200q-20.93 0-36.62-15.69Q580-231.38 580-252.31h104.62q0 20.93-15.7 36.62Q653.23-200 632.31-200Zm-96.93-87.69v-40h193.85v40H535.38Zm-275.15-54.62Zm372.08-221.54Z" />
                </svg>
              </div>

              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="wholesale"
                  className="category-name"
                >
                  Wholesale
                </NavLink>
              </div>
            </div>
            <div className="icon-link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M240-160q-16.08 0-28.04-11.96T200-200v-365.08q-33.15-19.69-56.58-48.5Q120-642.38 120-680q0-49.85 35.08-84.92Q190.15-800 240-800h480q49.85 0 84.92 35.08Q840-729.85 840-680q0 37.62-23.42 66.42-23.43 28.81-56.58 48.5V-200q0 16.08-11.96 28.04T720-160H240Zm0-40h480v-388l21.54-13.23q22.61-14.08 40.54-33.23Q800-653.62 800-680q0-33-23.5-56.5T720-760H240q-33 0-56.5 23.5T160-680q0 26.62 17.81 45.88 17.81 19.27 40.65 33.35L240-588v388Zm224.31-102.77q6.61 6.39 15.81 6.39 9.19 0 15.57-6.39l123.08-121.54q6.61-6.61 6.61-15.81 0-9.19-6.61-15.57L495.69-578.77q-6.38-6.61-15.57-6.61-9.2 0-15.81 6.61L342.77-455.69q-6.39 6.38-6.39 15.57 0 9.2 6.39 15.81l121.54 121.54ZM480-343.69 383.69-440 480-537.85 577.85-440 480-343.69ZM480-480Z" />
                </svg>
              </div>
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="convenience"
                  className="category-name"
                >
                  Convenience
                </NavLink>
              </div>
            </div>
            <div className="icon-link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M234-120v-368.85h40V-160h300v-184.54l98.85-99.61q31.3-31.31 48.46-71.54 17.15-40.23 17.15-84.31 0-43.85-16.88-83.69-16.89-39.85-47.96-71.16L634-795.46 498.54-660h-140l-63 63L267-624.54 342.46-700h140L634-851.54l68.15 67.39q36.93 36.92 56.23 84.34 19.31 47.43 20.08 99.81-.77 52.38-20.08 99.81-19.3 47.42-56.23 84.34L614-328.46V-120H234Zm176.23-176.23L216.85-488.85q-8.7-8.69-12.77-19.84Q200-519.85 200-532q0-12.15 4.08-22.81 4.07-10.65 12.77-19.34L287-644.54l110.15 108.39q25.7 25.69 38.89 58.34 13.19 32.66 13.19 68.81 0 30.77-9.61 59.58-9.62 28.8-29.39 53.19Z" />
                </svg>
              </div>
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="pets"
                  className="category-name"
                >
                  Pets
                </NavLink>
              </div>
            </div>
            <div
              className="
                        icon-link"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M226.15-120 87.69-503.08l190.77-113.84V-840h80v223.08l190.77 113.84L410.77-120H226.15Zm435.39 0q-8.5 0-14.25-5.76t-5.75-14.27q0-8.51 5.75-14.24t14.25-5.73h140v-110.77h-140q-8.5 0-14.25-5.76-5.75-5.75-5.75-14.27 0-8.51 5.75-14.24t14.25-5.73h140v-110.77h-140q-8.5 0-14.25-5.76-5.75-5.75-5.75-14.27 0-8.51 5.75-14.24t14.25-5.73h140v-110.77h-140q-8.5 0-14.25-5.76-5.75-5.75-5.75-14.26 0-8.52 5.75-14.25t14.25-5.73h140v-110.77h-140q-8.5 0-14.25-5.75-5.75-5.76-5.75-14.27 0-8.52 5.75-14.25t14.25-5.73h146.15q27.62 0 46.12 18.5 18.5 18.5 18.5 46.12v513.84q0 27.62-18.5 46.12-18.5 18.5-46.12 18.5H661.54Zm-407.08-40h128l118-326-147.08-87.85h-69.84L136.46-486l118 326Zm64-206.92Z" />
                </svg>
              </div>
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="beauty"
                  className="category-name"
                >
                  Beauty
                </NavLink>
              </div>
            </div>
            <div className="icon-link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M455.38-300h49.24v-100h100v-49.23h-100v-100h-49.24v100h-100V-400h100v100ZM304.62-164.62q-26.66 0-45.64-18.98T240-229.23V-620q0-26.65 18.98-45.63 18.98-18.99 45.64-18.99h350.76q26.66 0 45.64 18.99Q720-646.65 720-620v390.77q0 26.65-18.98 45.63-18.98 18.98-45.64 18.98H304.62Zm0-40h350.76q9.24 0 16.93-7.69Q680-220 680-229.23V-620q0-9.23-7.69-16.92-7.69-7.7-16.93-7.7H304.62q-9.24 0-16.93 7.7Q280-629.23 280-620v390.77q0 9.23 7.69 16.92 7.69 7.69 16.93 7.69Zm-46.16-550.76v-40h443.08v40H258.46ZM280-644.62v440-440Z" />
                </svg>
              </div>
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="pharmacy"
                  className="category-name"
                >
                  Pharmacy
                </NavLink>
              </div>
            </div>
            <div className="icon-link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M140-200q-8.5 0-14.25-5.66T120-219.69q0-4.93 2.08-9.26 2.07-4.34 6.23-6.9L460-480.77v-71.54q0-8.5 5.92-14.25t14.31-5.75q30.39 0 52.39-21.86 22-21.87 22-52.23 0-30.37-21.54-51.98Q511.54-720 480.77-720q-30.39 0-52.5 21.31-22.12 21.32-22.12 51.77h-40q0-47.23 33.31-80.16Q432.77-760 480.77-760t80.92 32.81q32.93 32.81 32.93 80.81 0 42.38-26.74 73.61-26.73 31.23-67.88 38.31v53.69l332.46 244.92q4.16 2.49 6.23 6.72 2.08 4.23 2.08 9.21 0 8.46-5.75 14.19-5.75 5.73-14.25 5.73H140Zm61.54-40h557.69L480-445.38 201.54-240Z" />
                </svg>
              </div>
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="retail"
                  className="category-name"
                >
                  Retail
                </NavLink>
              </div>
            </div>
          </div>

          {/* filters */}
          <div className="filters">
            <div className="filter">
              <NavLink>Fastest</NavLink>
            </div>
            <div className="filter">
              <NavLink>Offers</NavLink>
            </div>
            <div className="filter">
              <NavLink>In-store prices</NavLink>
            </div>
            <div className="filter">
              <NavLink>EBT</NavLink>
            </div>
            <div className="filter">
              <NavLink>Pickup</NavLink>
            </div>
            <div className="filter">
              <NavLink>New</NavLink>
            </div>
          </div>
        </Row>
        {/* end of tabs */}
      </Container>
      <Outlet />
    </>
  );
}
