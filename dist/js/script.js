"use strict";
const chx_btn = document.getElementById('chx-btn');
const espec_infos = document.getElementById('espec-info');
let tem_espec = false;
chx_btn.addEventListener('click', () => tem_espec = show_espec());
const show_espec = () => {
    if (!tem_espec) {
        espec_infos.style.height = '150px';
        chx_btn.style.backgroundColor = 'var(--clr1)';
        return true;
    }
    else {
        espec_infos.style.height = '0';
        chx_btn.style.backgroundColor = 'transparent';
        return false;
    }
};
const btn_menu_resp = document.getElementById('btn-menu-responsive');
const menu_aside = document.getElementById('menu-aside');
const menu_responsive = document.getElementById('menu-responsive');
let menu_open = false;
btn_menu_resp.addEventListener('click', () => menu_open = menu_resp());
const menu_resp = () => {
    if (!menu_open && window.screen.width <= 768) {
        menu_aside.style.height = '25vh';
        menu_responsive.style.display = 'flex';
        return true;
    }
    else if (window.screen.width <= 768) {
        menu_aside.style.height = '10vh';
        menu_responsive.style.display = 'none';
        return false;
    }
    else {
        return false;
    }
};
const paginas = {
    home: document.getElementById('pg-home'),
    pedidos: document.getElementById('pg-pedidos')
};
const botoes = {
    home: document.getElementById('btn-home'),
    pedidos: document.getElementById('btn-pedidos')
};
botoes.home.addEventListener('click', () => { pagination('home'); if (window.screen.width <= 768)
    document.body.style.height = '350vh'; });
botoes.pedidos.addEventListener('click', () => { pagination('pedidos'); if (window.screen.width <= 768)
    document.body.style.height = '150vh'; });
const pagination = (page) => {
    Object.keys(paginas).forEach(key => {
        paginas[key].style.display = 'none';
        botoes[key].classList.remove('btn-active');
    });
    paginas[page].style.display = 'flex';
    botoes[page].classList.add('btn-active');
};
