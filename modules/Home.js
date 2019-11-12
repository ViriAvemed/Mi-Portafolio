
let Home = {
    render: async () => {
        return `
<div class="container position-absolute container1">
    <div class="row row1">
        <div class="col-4 containerRetract">
            <img src="css/img/me2.jpg" alt="retract" class="myRetract">
        </div>
        <div class="col-8 colName">
            <p class="myName">VIRIDIANA </p>
            <p class="job">AVELLANEDA MEDINA</p>
            <p class="job">DESARROLLADORA FROND-END</p>
        </div>
    </div>
</div>`;
    },
    after_render: async () => {}

};

export default Home;
