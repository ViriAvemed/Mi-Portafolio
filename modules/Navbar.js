let Navbar = {
    render: async () => {
        let view = `
 

           <div class="wrapper2">
        <span class="menu">...</span>
        <div class="overlay">
            <ul>
                <li style="list-style:none;"><a href="#">INICIO</a></li>
                <li style="list-style:none;"><a href="./#/About/">ACERCA DE MÍ</a></li>
                <li style="list-style:none;"><a href="./#/Projects/">MIS PROYECTOS</a></li>
                <li style="list-style:none;"><a href="./#/Skills/">HABILIDADES</a></li>
                <li style="list-style:none;"><a href="./#/Contact/">CONTACTO</a></li>
            </ul>
        </div>
    </div>
        `;
        return view
    },
    after_render: async () => {

//NAVBAR

        $(document).ready(()=> {

            $('span').click(()=> {
                $('.overlay').toggleClass('anim');
            });

            $('.animation').click(()=>{
                $('.anim').toggleClass('reverse-animation');
            })
        });
    }

};

export default Navbar;
