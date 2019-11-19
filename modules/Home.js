
let Home = {
    render: async () => {
        return `
            <div class="container position-absolute container1">
                <div class="row row1">
                    <div class="col-sm-12 col-md-4 containerRetract">
                        <img src="css/img/me2.jpg" alt="retract" class="myRetract">
                    </div>
                    <div class="col-sm-12 col-md-8 colName">
                        <p class="myName">VIRIDIANA </p>
                        <p class="job">AVELLANEDA MEDINA</p>
                        <p class="job">DESARROLLADORA FRONT-END</p>
                    </div>
                </div>
            </div>`;
    },
    after_render: async () => {}

};

export default Home;
