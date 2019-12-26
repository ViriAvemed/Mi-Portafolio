let Projects = {
    render: async () => {
        return /*html*/ `
            <section id="id-projects">
                <div class="container">
                    <div class="row rowProjects">
                        <div class="col myProjects">
                            <h2 class="text-center myName mb-4">MIS PROYECTOS</h2>
                            <div class="row mt-5">
                            <div class="card border rounded col-sm-12 col-md-4">
                                    <img src="css/img/changarro.PNG" class="card-img-top img-fluid imagen" alt="">
                                    <div class="card-body">
                                        <p class="card-title font-weight-bold">Changarro</p>
                                        <p class="card-text text-justify">
                                        Web-app creada para tomar la orden del restaurante Pan D´ Monium , realizada con HTML5, CSS3, Angular, Angular Material y Firebase.
                                        </p>
                                        <div class="d-flex justify-content-center ">
                                            <a href="https://viriavemed.github.io/Changarro/" class="btn btn-dark btn-block">Proyecto</a>
                                            <a href="https://github.com/ViriAvemed/Changarro"  target="_blank" class="btn btn-dark btn-block mt-0 ml-1">Código</a>
                                        </div>
                                    </div>
                                </div>
                            <div class="card border rounded col-sm-12 col-md-4 ">
                                    <img src="css/img/movies.png" class="card-img-top img-fluid imagen" alt="">
                                    <div class="card-body">
                                        <p class="card-title font-weight-bold">Movies App </p>
                                        <p class="card-text text-justify">
                                            Wep app responsive que muestra información de películas apartir del consumo de un API, realizada con REACT JS, 
                                           HTML5, Bootstrap React y scss.
                                        </p>
                                        <div class=" d-flex justify-content-center ">
                                            <a class="btn btn-dark btn-block" href="https://viriavemed.github.io/MoviesApp/#/" target="_blank" >Proyecto</a>
                                            <a class="btn btn-dark btn-block mt-0 ml-1" href="https://github.com/ViriAvemed/MoviesApp" target="_blank" >Código</a>
                                        </div>
                                    </div>
                                </div>
                            <div class="card border rounded col-sm-12 col-md-4">
                                    <img src="css/img/dataLovers.PNG" class="card-img-top img-fluid imagen" alt="">
                                    <div class="card-body">
                                       <p class="card-title font-weight-bold">Data-League of Legends </p>
                                       <p class="card-text text-justify">
                                       Permite ordenar y filtrar las  características de los campeones del juego en línea
                                       League of Legends. Realizado con HTML5, CSS3 y JavaScript.
                                       </p>
                                        <div class=" d-flex justify-content-center">
                                           <a  class="btn btn-dark btn-block" href="https://viriavemed.github.io/Data-League-of-Legends/src/" target="_blank" >Proyecto</a>
                                           <a  class="btn btn-dark btn-block mt-0 ml-1"  href="https://github.com/ViriAvemed/MEX-Data-Lovers-008"  target="_blank" >Código</a>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }

    , after_render: async () => {

    }
};
export default Projects;
