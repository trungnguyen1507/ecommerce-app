import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark border-0">
                <img src="/assets/bg-img.jpg" className="card-img" alt="..." />
            </div>
            <Products />
        </div>
    );
};

export default Home;
