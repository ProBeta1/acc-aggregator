import React, { Component } from 'react'
import Typical from 'react-typical'
import '../styles/landing.css'


export default class Landing extends Component {

    render() {
        return (
            <div className="front-page">
                <div className="main-headings">
                    <div className="headingMain">
                        <div className='head1'><span className="name">TEAM Nadaan Hacker's</span></div>
                        <div className='head2'><span className="tagline"><Typical
                            loop={Infinity}
                            wrapper="p"
                            steps={[
                                'Get Started for Free',
                                200,
                                ' ',
                                200,
                                ' ',
                                200,
                                ' ',
                                200]}
                        />
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}