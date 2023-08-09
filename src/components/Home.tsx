import Header from "./Header";

export default function Home() {
    return (
        <>
            <div>
                <Header />
                <section id="home" className="section">
                    <div className="container">
                        <div className="hero__wrapper">
                            <div className="hero__content">
                                <h2 className="hero__title">Today's Special</h2>
                                <h2 className="highlight">Italian Pizza</h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                                    aliquam quod minima! Vel necessitatibus ratione in unde,
                                    consequuntur officia illum.
                                </p>

                                <div className="hero__btns">
                                    <button className="view__more-btn">View menu</button>
                                    <span className="play__btn"><i className="ri-play-fill"></i></span>
                                </div>
                            </div>

                            <div className="hero__img">
                                <img src="./images/hero-img.png" alt="hero-img" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
