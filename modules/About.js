let About = {
    render : async () => {
        return `
            <section class="container aboutMe">
                <div class="row rowAboutMe">
                    <div class="col-12 ">
                          <h2 class="text-center myName mb-3">ACERCA DE MÍ</h2>                         
                          <div class="row containerAboutMeTitles text-justify">
                             <p class="aboutMeTitles">EXPERIENCIA</p>
                             <p class="containerAboutMeTitlesP">Laboratoria junio 2019 - diciembre 2019.<br>
                              En Laboratoria, un bootcamp intensivo de seis meses donde capacitan a mujeres en el ambito de la tecnología, aprendí 
                               a programar especializandome en el desarrollo front-end, realicé múltiples proyectos, aprendí a trabajar con la metodología Agile, 
                               desarrollando habilidades como son la comunicación eficaz, dar y recibir feedback, así como trabajar colaborativamente.
                              </p>
                             <p class="containerAboutMeTitlesP">Servicio de Administración Tributaria  junio 2018 - junio 2019.<br>
                                En el SAT estuve a cargo del Control de Gestión en la Administración 
                                Central de Fiscalización Estratégica. Dicha labor me permitió desarrollar
                                mi capacidad de organización, responsabilidad, autogestión, compromiso y trabajo en equipo.
                              </p>
                          </div>
                          <div class="row containerAboutMeTitles text-justify">
                            <p class="aboutMeTitles  ">FORMACIÓN</p>
                            <p class="containerAboutMeTitlesP ">
                                Soy egresada de la licenciatura en Historia de México por la
                                FES "Acatlán", UNAM. Durante los cuatro años de estudio desarrollé habilidades de análisis,
                                investigación y facilidad para expresarme y comunicarme a nivel escrito y oral.
                            </p>
                           </div>
                          <div class="row containerAboutMeTitles text-justify">
                            <p class="aboutMeTitles">TIEMPO LIBRE</p>
                            <p class="containerAboutMeTitlesP">Una de las actividades que me gusta hacer en mi tiempo libre es deporte, porque gracias a ello y además de hacerme
                             saludable soy una persona constante, disciplinada y resiliente.
                            </p>
                          </div>
                          <div id="btnCV" class="row containerAboutMeTitles">
                          <div  class="d-flex justify-content-end mt-3">
                            <a href="css/img/Avellaneda_Viridiana_CV2.pdf" target="_blank"  class="d-none d-sm-block btn btn btn-outline-dark btn-block mt-0 ml-1 mr-1 btnAboutMe">Abrir currículum</a>
                            <a href="css/img/Avellaneda_Viridiana_CV2.pdf" target="_blank"  class="d-block d-sm-none btn btn btn-outline-dark btn-block mt-0 ml-1 mr-1 btnAboutMe">CV</a>
                            <a href="css/img/Avellaneda_Viridiana_CV2.pdf" download="Acme Documentation (ver. 2.0.1).pdf" class="d-none d-sm-block btn btn btn-outline-dark btn-block mt-0 ml-1 btnAboutMe">Descargar currículum</a>
                          </div>
                          </div>
                    </div>
                </div>
            </section>
        `
    },
    after_render: async () => {}

};

export default About;
