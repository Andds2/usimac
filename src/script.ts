const chx_btn = document.getElementById('chx-btn') as HTMLButtonElement
const espec_infos = document.getElementById('espec-info') as HTMLDivElement
const btn_menu_resp = document.getElementById('btn-menu-responsive') as HTMLDivElement
const menu_aside = document.getElementById('menu-aside') as HTMLElement
const menu_responsive = document.getElementById('menu-responsive') as HTMLDivElement

let tem_espec: boolean = false
let menu_open: boolean = false

chx_btn.addEventListener('click', () => tem_espec = show_espec())
btn_menu_resp.addEventListener('click', () => menu_open = menu_resp())

const show_espec = (): boolean => {

    if(!tem_espec){
        espec_infos.style.height = 'auto'
        return true
    } else {
        espec_infos.style.height = '0'
        return false
    }
}

const menu_resp = ():boolean => {
    if(!menu_open){
        menu_aside.style.height = '25vh'
        menu_responsive.style.display = 'flex'
        return true
    } else {
        menu_aside.style.height = '10vh'
        menu_responsive.style.display = 'none'
        return false
    }
}