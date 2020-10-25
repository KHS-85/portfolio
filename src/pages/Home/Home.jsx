import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss';

const Home = () => {
    return (
        <div className="home-body">
            <article className="container">
                <div className="row">

                    {/* Left panel - About Me */}
                    <div className="my-5 aboutMe text-left col-xs-12 col-lg-6 ">
                        <h1 className="mb-4 pt-3">Kenneth Sørensen</h1>
                        <p>Jeg er 35 år gammel og er født og opvokset på Djursland. På nuværende tidspunkt er jeg bosat i Hornslet, lidt nord for Århus, sammen med min skønne kæreste.</p>

                        <p>Igennem årene har jeg arbejdet med lidt af hvert, men interessen har altid ligget indenfor IT. Derfor besluttede jeg mig også for, at starte på
                            Webudvikler-udannelsen hos VidenDjurs i Grenaa, som jeg færdiggør marts 2021. </p>

                        <p>Interessen for computer, og alt hvad der har med IT at gøre, startede tidligt i min barndom, hvor jeg fik min første Commodore 64.
                            Allerede dengang begyndte jeg at kode mine egne små programmer og spil - og sidenhen har jeg været bredt omkring med bl.a. at lave mine egne spil/mods,
                            designe hjemmesider, lege med video- og fotoredigering samt grafisk design.
                        </p>

                        <p> Uddannelsen som Webdesigner/Frontendudvikler passer perfekt til mig, da den kombinerer mange af de ting jeg elsker at arbejde med - særligt kodning
                            og det grafiske/designmæssige element. Jeg håber derfor også at komme ud på en arbejdsplads, hvor jeg kan få lov at arbejde med netop disse områder.
                        </p>

                        <p>Som person er jeg imødekommende og kommer som regel godt ud af det med alle. Jeg er både pålidelig og ansvarsfuld, samt hurtig til at sætte mig ind i nye ting.

                        </p>

                    </div>

                    {/* Right Panel - Images */}
                    <div className="col-xs-12 col-lg-6 my-5">
                        <div className="profilePicturePanel">
                            <img src="/KennethBW.jpg" alt="Kenneth profile" className="profilePicture"/>
                        </div>
                    </div>

                </div>
            </article>
        </div>
    )
}

export default Home
