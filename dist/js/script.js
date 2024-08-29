"use strict";
const chx_btn = document.getElementById('chx-btn');
const espec_infos = document.getElementById('espec-info');
const btn_menu_resp = document.getElementById('btn-menu-responsive');
const menu_aside = document.getElementById('menu-aside');
const menu_responsive = document.getElementById('menu-responsive');
let tem_espec = false;
let menu_open = false;
chx_btn.addEventListener('click', () => tem_espec = show_espec());
btn_menu_resp.addEventListener('click', () => menu_open = menu_resp());
const show_espec = () => {
    if (!tem_espec) {
        espec_infos.style.height = 'auto';
        return true;
    }
    else {
        espec_infos.style.height = '0';
        return false;
    }
};
const menu_resp = () => {
    if (!menu_open) {
        menu_aside.style.height = '25vh';
        menu_responsive.style.display = 'flex';
        return true;
    }
    else {
        menu_aside.style.height = '10vh';
        menu_responsive.style.display = 'none';
        return false;
    }
};
