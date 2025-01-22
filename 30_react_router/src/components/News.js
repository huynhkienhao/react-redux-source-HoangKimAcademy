import React from 'react'
import { Link } from 'react-router-dom'

function News() {
    return (
        <>
            {/* Mashead header*/}
            <header className="masthead">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            {/* Mashead text and app badges*/}
                            <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                <h1 className="display-1 lh-1 mb-3">Trang danh sách tin tức.</h1>
                                <div className="d-flex flex-column flex-lg-row align-items-center">
                                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                                        <img
                                            className="app-badge"
                                            src="assets/img/google-play-badge.svg"
                                            alt="..."
                                        />
                                    </a>
                                    <a href="#!">
                                        <img
                                            className="app-badge"
                                            src="assets/img/app-store-badge.svg"
                                            alt="..."
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Masthead device mockup feature*/}
                            <div className="masthead-device-mockup">
                                <svg
                                    className="circle"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient
                                            id="circleGradient"
                                            gradientTransform="rotate(45)"
                                        >
                                            <stop className="gradient-start-color" offset="0%" />
                                            <stop className="gradient-end-color" offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx={50} cy={50} r={50} />
                                </svg>
                                <svg
                                    className="shape-1 d-none d-sm-block"
                                    viewBox="0 0 240.83 240.83"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(120.42 -49.88) rotate(45)"
                                    />
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(-49.88 120.42) rotate(-45)"
                                    />
                                </svg>
                                <svg
                                    className="shape-2 d-none d-sm-block"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={50} cy={50} r={50} />
                                </svg>
                                <div className="device-wrapper">
                                    <div
                                        className="device"
                                        data-device="iPhoneX"
                                        data-orientation="portrait"
                                        data-color="black"
                                    >
                                        <div className="screen bg-black">
                                            {/* PUT CONTENTS HERE:*/}
                                            {/* * * This can be a video, image, or just about anything else.*/}
                                            {/* * * Set the max width of your media to 100% and the height to*/}
                                            {/* * * 100% like the demo example below.*/}
                                            <video
                                                muted="muted"
                                                autoPlay=""
                                                loop=""
                                                style={{ maxWidth: "100%", height: "100%" }}
                                            >
                                                <source src="assets/img/demo-screen.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Quote/testimonial aside*/}
            <aside className="text-center bg-gradient-primary-to-secondary">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xl-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2025/1/20/edit-anh-man-hinh-2025-01-19-luc-212643-173729694092686798157-1737355237742451309372.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <Link tp='/details' className="btn btn-primary">
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2025/1/20/edit-anh-man-hinh-2025-01-19-luc-212643-173729694092686798157-1737355237742451309372.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <Link to='/details' className="btn btn-primary">
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2025/1/20/edit-anh-man-hinh-2025-01-19-luc-212643-173729694092686798157-1737355237742451309372.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <Link to='/details' className="btn btn-primary">
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2025/1/20/edit-anh-man-hinh-2025-01-19-luc-212643-173729694092686798157-1737355237742451309372.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <Link to='/details' className="btn btn-primary">
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default News