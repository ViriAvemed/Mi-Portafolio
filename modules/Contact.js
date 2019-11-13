let Contact = {
    render: async () => {
        return `
        <section id="id-contact" class="section-contact">
            <div class="container">
                <div class="row d-flex row-contact">
                    <div class="col col-contact">
                        <p class="d-block d-lg-none text-center myName " >CONTACTO</p>
                        <p class="d-none d-lg-block myName text-center ">INFORMACIÓN DE CONTACTO</p>
                        <div class="row-contact-icon  row justify-content-center">
                            <div class="grow col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                                <a href="https://github.com/ViriAvemed" target="_blank"><img class="reds" src="css/img/logotipo-de-github.png" alt="Github"></a><br>
                            </div>
                            <div class=" grow col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                                <a href="https://www.linkedin.com/in/viridiana-avellaneda-269a90161/" target="_blank"><img class="reds"  src="css/img/linkedin.png" alt="Linkedin"></a>
                            </div>
                            <div class="grow col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                            <a href="mailto:viridiana.avem@gmail.com"><img title="viridiana.avem@gmail.com" class="reds" src="css/img/gmail.png" alt="gmail"></a>
                                
                            </div>                
                        </div>
                  
                    </div>
                </div>
            </div>
        </section>
  

        `
    },
    after_render: async () => {

    }

};

export default Contact;
