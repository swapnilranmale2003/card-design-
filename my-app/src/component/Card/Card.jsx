    import React from "react";
    import "./Card.css";
    function Card() {
    return (
        <div>
        <div>
            <img src="assets/profile.jpeg" alt="" />
        </div>
        <div className="card">
            <div className="developer-name">
            <div className="title">
                <h1>Kaye Morris</h1>
                <h3>UX Developer</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus dolores vel dignissimos!
                </p>
            </div>
            <div className="btn">
                <button>Follow Account</button>
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default Card;
