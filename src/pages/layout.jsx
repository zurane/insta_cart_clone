import React from "react";
import logo from "../assets/Instacart_Logo_Kale.svg";
import Tabs from "../components/Tabs";
import Banner from "../components/banner";
import ReferenceLink from "../components/ReferenceFloatingLink";

export default function Layout() {
    return (
        <>
            <header>
                {/* Navigation  bar */}
                <div className="navigation-bar">
                    
                    {/* Burger menu and logo */}
                    <div className="menu-wrap-container">
                        <svg
                            width="23"
                            height="23"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 12h18"></path>
                            <path d="M3 6h18"></path>
                            <path d="M3 18h18"></path>
                        </svg>
                        <img src={logo} alt="Instacart_Lo go_Kale.svg" width={120} />
                    </div>
                    {/* End of burger menu and logo */}


                    {/* Search bar */}

                    <div className="search-bar">
                        <form className="form">
                            <button type="submit" aria-label="Search" disabled>
                                <svg
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"></path>
                                </svg>
                            </button>
                            <input
                                type="text"
                                aria-label="search"
                                placeholder="Search products, stores, and recipes"
                            />
                        </form>
                    </div>
                    {/* End of search bar */}

                    {/* Location */}
                    <div className="location">
                        <svg
                            width="23"
                            height="23"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                            <path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2Zm0 11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"></path>
                        </svg>
                        <span>91115</span>
                    </div>

                    {/* End of location */}

                    {/* Login buttons and cart */}
                    <div className="login-buttons">
                        <a className="login-btn" href="/">
                            Log in
                        </a>
                        <div className="shopping-cart">
                            <svg
                                width="25"
                                height="25"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 2v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1Zm6 16c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm8.01 2c0-1.1.89-2 1.99-2s2 .9 2 2-.9 2-2 2-1.99-.9-1.99-2Z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="cart-item-counter">0</span>
                        </div>
                    </div>
                </div>
                {/* End of login buttons and cart */}
            </header>
            <main>
                <Tabs />
            </main>
            <Banner />
            <ReferenceLink/>
        </>
    );
}
