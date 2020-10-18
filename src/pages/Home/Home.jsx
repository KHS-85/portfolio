import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss';

const Home = () => {
    return (
        <div className="home-body">
            <article className="container">
                <div className="row">
                    <div className="col py-3">
                        <h1 className="mb-5">Welcome to my portfolio</h1>
                        <p>This site is still under construction and so far the only page with content is my <Link to="/Projects">projects </Link></p>
                        
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Home
