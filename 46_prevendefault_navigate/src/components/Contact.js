import React from 'react';
import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return (
        <>
            {/* Mashead header*/}
            <header className="masthead">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            {/* Mashead text and app badges*/}
                            <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                <h1 className="display-1 lh-1 mb-3">Trang liên hệ.</h1>
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
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1 p-5">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            {/* Name input*/}
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name..."
                                    data-sb-validations="required"
                                />
                                <label htmlFor="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">
                                    A name is required.
                                </div>
                            </div>
                            {/* Email address input*/}
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    data-sb-validations="required,email"
                                />
                                <label htmlFor="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">
                                    An email is required.
                                </div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">
                                    Email is not valid.
                                </div>
                            </div>
                            {/* Phone number input*/}
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="phone"
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    data-sb-validations="required"
                                />
                                <label htmlFor="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">
                                    A phone number is required.
                                </div>
                            </div>
                            {/* Message input*/}
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    type="text"
                                    placeholder="Enter your message here..."
                                    style={{ height: "10rem" }}
                                    data-sb-validations="required"
                                    defaultValue={""}
                                />
                                <label htmlFor="message">Message</label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="message:required"
                                >
                                    A message is required.
                                </div>
                            </div>

                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">
                                        https://startbootstrap.com/solution/contact-forms
                                    </a>
                                </div>
                            </div>

                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">
                                    Error sending message!
                                </div>
                            </div>

                            <div className="d-grid">
                                <button
                                    className="btn btn-primary rounded-pill btn-lg"
                                    id="submitButton"
                                    type="submit"
                                    onClick={(event) => handleSubmit(event)}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact