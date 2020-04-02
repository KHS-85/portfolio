import React, { useState } from 'react';
import Batman_IMG from '../../gfx/Site_Batman.jpg';
import USO_IMG from '../../gfx/Site_USO.jpg';
import Strand_IMG from '../../gfx/Site_Strand.jpg';
import RunInc_IMG from '../../gfx/Site_RunInc.jpg';
import Scuba_IMG from '../../gfx/Site_Scuba.jpg';
import Gods_IMG from '../../gfx/Site_Gods.jpg';

const Project = () => {

    const [projects] = useState([

    // Batman //
        { img: Batman_IMG, title: 'Batman',  img_alt: 'Batman frontpage', date: '20.01.2020', link: 'http://kenn490m.web.videndjurs.dk/Batman/', github: "https://github.com/KHS-85", used: 'Google Fonts', id: 1,
         comment: 'This is the very first site that I created. Nothing fancy to see here, it was merely created to practice basic HTML and CSS.' },

    // USO //
        { img: USO_IMG, title: 'USO',  img_alt: 'USO frontpage', date: '30.01.2020', link: 'http://kenn490m.web.videndjurs.dk/USO/', github: "https://github.com/KHS-85", used: 'Google Fonts, Photoshop', id: 2,
        comment: 'The second site that I created as a project for class. This was mostly just used for more practice in basic HTML and CSS' },

    // Grenå Strand //
        { img: Strand_IMG, title: 'Grenå Strand',  img_alt: 'Grenå Strand frontpage', date: '06.02.2020', link: 'http://kenn490m.web.videndjurs.dk/Strand/', github: "https://github.com/KHS-85", used: 'Sass, Google Fonts', id: 3,
        comment: 'This site was created to practice the use of Sass which is not really apparent unless you view the source code' },

    // RunInc //
        { img: RunInc_IMG, title: 'RunInc',  img_alt: 'RunInc frontpage', date: '27.02.2020', link: 'http://kenn490m3.web.videndjurs.dk/', github: "https://github.com/KHS-85/runinc/commits/ResponsiveTest", used: 'React, Bootstrap 4, Photoshop', id: 4,
        comment: 'This project was created with React, which is a Javascrip library. This is also where I used Bootstrap 4 for the first which is a CSS framework directed at responsive, mobile-first front-end web development.' },

    // ScubaLiving //
        { img: Scuba_IMG, title: 'ScubaLiving',  img_alt: 'Scuba Living frontpage', date: '23.03.2020', link: 'http://kenn490m5.web.videndjurs.dk/', github: "https://github.com/KHS-85/scubaliving", used: 'React, Bootstrap 4, Photoshop', id: 5,
        comment: 'Here you can hopefully see that I am getting much better at making responsive sites that scale correctly on all devices. Also practiced making forms with HTML5 validation, which you can see on the login-page' },

    // Møllerup Gods //
        { img: Gods_IMG, title: 'Møllerup Gods',  img_alt: 'Møllerup Gods frontpage', date: '28.03.2020', link: 'http://kenn490m4.web.videndjurs.dk/', github: "https://github.com/KHS-85/moellerrup", used: 'React, Bootstrap 4, Photoshop', id: 6,
        comment: 'More practice in Bootstrap 4 and React; specifically state which is used on the news section of the page' },


         

    ]);
    return (
        
        <div className="Project-body">
             {projects.map(project => {
                return (

            <article className="container">
                <section key={project.id} className="row my-5 website-block">
                    
                    <div className="col-12 col-sm-12 col-md-6 p-0">

                    {/* Website Image */}

                        <div className="">
                            <img className="project-img img-fluid" src={project.img} alt={project.img_alt}/>
                        </div>

                    </div>


                    {/* Website Content */}

                    <div className="col text-left">
                        <h3 className="pb-2"><strong>{project.title}</strong></h3>
                        <p><strong>Finished:</strong> {project.date}</p>
                        <p><strong>Comments:</strong> {project.comment}</p>
                        <p><strong>What I used:</strong> {project.used}</p>
                        
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark m-2">Visit Site</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark m-2">Source code on GitHub</a>

                    </div>

                </section>

            </article>
                )
            })}
        </div>
    )
}

export default Project

