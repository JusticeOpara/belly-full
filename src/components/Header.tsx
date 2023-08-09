

export default function Header() {
    return (
        <header >
            <nav className="w-full h-[80px] text-lg">
                <div className="w-[1140px] m-auto py-0 px-5 bg-red-400">
               
                    <div className="flex justify-between items-center">
                        <div className="logo">
                            <h1>Pizza<span className=" bg-primary">Day</span></h1>
                        </div>

                        <div className="navigation">
                            <ul className="flex justify-center 2.7rem">
                                <li className="nav__item">
                                    <a href="#home" className="small-text-color font-medium cursor-pointer transition-[0.3]">Home</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#menu" className="">Menu</a>
                                 
                                </li>
                                <li className="nav__item">
                                    <a href="#about" className="">About Us</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#blog" className="nav__link">Blog</a>
                                </li>
                            </ul>
                        </div>

                        <span className="mobile__menu"><i className="ri-menu-line"></i></span>
                    </div>
                </div>
            </nav>
        </header>

// .container {
//     width: 1140px;
//     margin: auto;
//     padding: 0px 20px;
//   }
  
//   .highlight {
//     color: var(--primary-color);
//   }
  
//   section {
//     padding: 60px 0px;
//   }

        // .nav {
        //     width: 100%;
        //     height: 80px;
        //     line-height: 80px;
        //     z-index: 9999;
        //   }

        //   .nav__wrapper {
        //     display: flex;
        //     align-items: center;
        //     justify-content: space-between;
        //   }

        //   .nav__menu {
        //     display: flex;
        //     align-items: center;
        //     column-gap: 2.7rem;
        //   }

        //   .nav__link {
        //     color: var(--small-text-color);
        //     font-weight: 500;
        //     cursor: pointer;
        //     transition: 0.3s;
        //   }

        //   .nav__link:hover {
        //     color: var(--primary-color);
        //   }

        //   .nav__item:nth-child(1) a {
        //     color: #fff;
        //     position: relative;
        //     z-index: 9;
        //   }

        //   .nav__item:nth-child(1) a::before {
        //     content: "";
        //     width: 40px;
        //     height: 2px;
        //     background: var(--primary-color);
        //     color: var(--primary-color);
        //     position: absolute;
        //     top: 120%;
        //     left: 0;
        //     z-index: 999;
        //   }

        //   .mobile__menu {
        //     color: #fff;
        //     font-size: 1.3rem;
        //     cursor: pointer;
        //     display: none;
        //   }

        //   .nav.header__sticky {
        //     position: fixed;
        //     top: 0;
        //     left: 0;
        //     background: var(--card-bg);
        //   }
    )
}
