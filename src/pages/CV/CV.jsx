import React from 'react'
import './cv.scss';

const CV = () => {
    return (
        <div className="CV-body">
            <article className="container">
                <div className="row">

                    <div className="col py-3">
                        <h2 className="headline p-2">Personprofil</h2>
                        <p className="pl-3">Jeg er 35 år gammel og er i god fysisk form. Jeg går op i at leve sundt og jeg ryger ikke. Som person er jeg meget åben og jeg anser
                        jeg mig selv for at være ansvarlig, ambitiøs, lærenem, hjælpsom, tålmodig og nem at omgås. Jeg er god til at holde overblikket og er
                        ligeledes meget selvstændig. Jeg har altid haft en evne til at kommunikere med- og tilpasse mig andre mennesker ligegyldig køn, alder
                        og baggrund. Jeg er også god til at formidle min viden videre til andre, på sådan en måde, så det er nemt forståeligt og tilpasset til
                        hver enkelt persons individuelle niveau. Jeg har typisk en smittende gejst, er positiv og i godt humør.</p>

                        <h2 className="my-3 p-2 headline">Uddannelse</h2>
                        <h4 className="pl-3">Webudvikler</h4>
                        <p className="pl-4">VidenDjurs, Grenaa - 2019 -</p>

                        <h4 className="pl-3">Lærer</h4>
                        <p className="pl-4">VIA University College, Århus, 2012-2014</p>
                        <p className="pl-4">Læste engelsk, matematik og idræt - udover obligatoriske pædagogiske fag.</p>

                        <h4 className="pl-3">Højere Forberedelseseksamen (HF)</h4>
                        <p className="pl-4">VUC Hornslet, 2010-2012</p>
                        <p className="pl-4">Fik karakteren 12 i samtlige 17 eksamener (se bilag)</p>

                        <h2 className="my-3 p-2 headline">Erhvervserfaring</h2>
                        <p className="pl-4 font-italic">Jeg har haft job lige siden jeg var 14 år gammel og har igennem tiden arbejdet med lidt af hvert. Nedenfor er
                        fremhævet det mest relevante, men en komplet liste findes i pdf-dokumentet her.</p>
                        <h4 className="pl-3">Tekniker</h4>
                        <p className="pl-4">Refurb - Genbrugt IT, Hornslet, 2017 - 2019</p>
                        <p className="pl-4">Refurbishment af telefoner (Android og iOS), laptops og stationære computere med henblik på gensalg. Reperation/Udskiftning af hardware, samt genopsætning af software</p>

                        <h4 className="pl-3">Produktionsmedarbejder</h4>
                        <p className="pl-4">Carletti - Skødstrup, 2014 - 2017</p>
                        <p className="pl-4">Indstilling og betjening af produktionsmaskiner i eget IT-system. Truck-kørsel og lagerarbejde.</p>

                        <h2 className="my-3 p-2 headline">IT-kompetencer</h2>
                        <p className="pl-4">
                           Webudvikler: VS Code, HTML 5, CSS, SASS, Javascript, React, Bootstrap, Wordpress, Strapi
                        </p>
                        <p className="pl-4">
                        Selvlært IT-nørd gennem 25 år:
                        Grafik/billedbehandling: Photoshop. Videoredigering: Sony Vegas, Camtasia Studio. Windows+Office-pakken: Superbruger. Hardware: udskiftning/opgradering/fejlfinding og samle PC fra bunden af. Support: TeamViewer. 
                        </p>

                        <h2 className="my-3 p-2 headline">Fritid</h2>
                        <p className="pl-4">
                        Generelt har jeg en meget bred smag og mange forskellige interesser, men jeg har altid været lidt af en ’nørd’, hvor min primære interesse ligger
                        indenfor science fiction og fantasy. Det gælder både når det kommer til film, tv og bøger, men computerspil og software har altid fyldt mest. <br/><br/>
 
                        Dog har jeg også altid været meget fysisk aktiv. Dette er bl.a. kommet til udtryk i mit valg af 10.klasse idrætslinjen, mange års mountainbiking, taekwondo og senest styrketræning, som jeg har dyrket i 8 år nu. <br/><br/>
 
                        Størstedelen af min fritid prioriterer jeg at bruge sammen med min kæreste, hvor vi har en fælles interesse i gaming, tv-serier og film. Når der er tid
                        og råd til det, elsker vi at rejse ud og se verden sammen. Senest har vi været i London, hvor vi bl.a. var på den fantastiske Harry Potter Studio Tours.
                        </p>

                    </div>

                </div>
            </article>
        </div>
    )
}

export default CV

