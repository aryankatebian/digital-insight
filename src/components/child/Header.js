import React from 'react'
import '../../scss/_header.scss'
import MdPerson from 'react-ionicons/lib/MdPerson'
import IosPaper from 'react-ionicons/lib/MdPaper'
import IosBrush from 'react-ionicons/lib/MdBrush'
import IosChatbubbles from 'react-ionicons/lib/IosChatbubbles'

export const Header = () => {
    return (
        <header className="header">
            <div className="top-menu">
                <ul>
                    <li className="active">
                        <a href="/">
                            <MdPerson color="white" />
                            <br />
                            <span className="link">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="/resume">
                            <IosPaper color="white" />
                            <br />
                            <span className="link">Resume</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <IosBrush color="white" />
                            <br />
                            <span className="link">Works</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <IosChatbubbles color="white" />
                            <br />
                            <span className="link">Blog</span>
                        </a>
                    </li>

                </ul>
            </div>

        </header>
    )
}
