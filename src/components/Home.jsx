import React from "react";
import Products from "./Products";
import bg from "../assets/bg-img.jpg";

const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark border-0">
                <img src={bg} className="card-img" alt="..." />
            </div>
            <Products />
        </div>
    );
};

export default Home;
