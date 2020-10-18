import React, { useState } from 'react';
import RunInc_IMG from '../../gfx/Site_RunInc.jpg';
import Scuba_IMG from '../../gfx/Site_Scuba.jpg';
import Gods_IMG from '../../gfx/Site_Gods.jpg';



const Project = () => {

    const [projects] = useState([

    // Diving Djursland //
        { img: "/divingdjursland.png", title: 'Diving Djursland',  img_alt: 'Diving Djursland frontpage', date: '12.10.2020', link: 'http://divingdjursland.kenneth-sorensen.dk/', github: "https://github.com/KHS-85/divingdjursland", used: 'React, Bootstrap 4, SCSS, Strapi, Photoshop', id: 9,
        comment: 'Getting better at React and also implemented my own database using Strapi which means this site is getting its content dynamicly. This can then be altered directly from the content management system.' },

    // KenShop //
        { img: "/webshop.png", title: "Kenneth's Webshop",  img_alt: 'webshop frontpage', date: '21.08.2020', link: 'http://kenn490m2.web.videndjurs.dk/', github: "https://github.com/KHS-85/", used: 'Wordpress and Photoshop', id: 8,
        comment: 'My first project created entirely in Wordpress. The content is mostly meant as a joke and and is only there to demonstrate the functionality of the webshop'},

    // Tentrees //
        { img: "/tentrees.png", title: 'Tentrees',  img_alt: 'tentrees frontpage', date: '30.06.2020', link: 'http://tentrees.kenneth-sorensen.dk/', github: "https://github.com/KHS-85/tentrees", used: 'React, SCSS', id: 8,
        comment: 'Tried to recreate the frontpage from clothing store; tentrees, using React, SCSS and my own topnav-menu'},

    // Møllerup Gods //
        { img: Gods_IMG, title: 'Møllerup Gods',  img_alt: 'Møllerup Gods frontpage', date: '28.03.2020', link: 'http://kenn490m4.web.videndjurs.dk/', github: "https://github.com/KHS-85/moellerrup", used: 'React, Bootstrap 4, SCSS, Photoshop', id: 6,
        comment: 'More practice in Bootstrap 4 and React; specifically state which is used on the news section of the page' },

    // ScubaLiving //
        { img: Scuba_IMG, title: 'ScubaLiving',  img_alt: 'Scuba Living frontpage', date: '23.03.2020', link: 'http://kenn490m5.web.videndjurs.dk/', github: "https://github.com/KHS-85/scubaliving", used: 'React, Bootstrap 4, SCSS, Photoshop', id: 5,
        comment: 'Here you can hopefully see that I am getting much better at making responsive sites that scale correctly on all devices. Also practiced making forms with HTML5 validation, which you can see on the login-page' },

    // RunInc //
        { img: RunInc_IMG, title: 'RunInc',  img_alt: 'RunInc frontpage', date: '27.02.2020', link: 'http://kenn490m3.web.videndjurs.dk/', github: "https://github.com/KHS-85/runinc/commits/ResponsiveTest", used: 'React, Bootstrap 4, SCSS, Photoshop', id: 4,
        comment: 'This project was created with React, which is a Javascrip library. This is also where I used Bootstrap 4 for the first which is a CSS framework directed at responsive, mobile-first front-end web development.' },     

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

