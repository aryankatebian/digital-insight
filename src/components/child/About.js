import React from 'react'
import '../../scss/_about.scss'
import MdFemale from 'react-ionicons/lib/MdFemale'
import ChartWrapper from '../charts/ChartWrapper';
import ChartWrapper2 from '../charts/ChartWrapper2';


const About = () => {
    return (
        <>
            <div className="section">
                <h1 className="title">About Me</h1>
                <div className="section-flex">
                    <div className="about">
                        <p>After 3 years of academic education in IT and 3 years of self studying, I've learned coding and new technologies to make complex web applications and worked as contractor to make web applications for startup businesses and individual clients, now seeking a professional environment in which I can apply my web development skills and gain experience in a challenging and rewarding career.</p>
                    </div>
                    <div className="about-list">
                        <ul>
                            <li><strong>age .....</strong><div className="float-right">25</div></li>
                            <li><strong>gender .....</strong><div className="float-right"><MdFemale color="white" /></div></li>
                            <li><strong>occupation .....</strong><div className="float-right">Web Developer</div></li>
                            <li><strong>mobile .....</strong><div className="float-right">07-8282-222</div></li>
                            <li><strong>email .....</strong><div className="float-right">emma_doe@gmail.com</div></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="section">
                <h1 className="title">Skills</h1>
                <div className="section-flex" id="chart">
                    <ChartWrapper />
                </div>
                <div className="section-flex" id="bubble-chart">
                    <ChartWrapper2 />
                </div>
            </div>
        </>
    )
}

export default About
