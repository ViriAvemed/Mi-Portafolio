"use strict";

import Home         from './modules/Home.js'
import About        from './modules/About.js'
import Error404     from './modules/Error404.js'
import Projects     from './modules/Projects.js'
import Contact      from './modules/Contact.js'
import Skills       from './modules/Skills.js'

import Navbar       from './modules/Navbar.js'
import Utils        from './modules/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : Home
    , '/about'      : About
    , '/projects'   : Projects
    , '/contact'    : Contact
    , '/skills'     : Skills
};

const router = async () => {

    // Lazy load view element:
    const header = document.getElementById('header_container');
    const content = document.getElementById('page_container');

    header.innerHTML = await Navbar.render();
    await Navbar.after_render();


    let request = Utils.parseRequestURL();

    let parsedURL = (request.resource ? '/' + request.resource : '/')
        + (request.id ? '/:id' : '')
        + (request.verb ? '/' + request.verb : '');
    

    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();
  
};


window.addEventListener('hashchange', router);
window.addEventListener('load', router);
