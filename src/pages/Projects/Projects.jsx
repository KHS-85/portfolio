import React from 'react'
import Project from './Project'
import './projects.scss';

const Projects = () => {
    return (
        <div className="projects-body">
            <article className="container">
                <div className="row">
                    <div className="col py-3 my-3">
                        <p className="projects-intro">
                        Below is a collection of all the projects I have created since I started studying to become a web developer on the 20th of january 2020.
                        Everything has been written in 
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"> Visual Studio Code</a> 
                        , a source-code editor developed by Microsoft. <br/> <br/>
                         You can view a live version of all my websites as well as the source code on my 
                         <a href="https://github.com/KHS-85/" target="_blank" rel="noopener noreferrer"> Github</a>.
                        </p> 
                        <p className="projects-intro">
                            If you want to learn more about the tools and languages I use for making my websites you can read about them here:
                            <br/><br/>
                            <ul className="pl-5">
                            <li><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"> Sass</a></li>
                            <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"> Bootstrap</a></li>
                            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React</a></li>
                            <li><a href="https://www.adobe.com/dk/products/photoshop.html" target="_blank" rel="noopener noreferrer"> Photoshop</a></li>
                            </ul>

                        </p>
                        
                        <Project />
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Projects
