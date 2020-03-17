function menu() {
  const mainMenus = document.querySelectorAll('.menu_main');
  const menuItems = document.querySelectorAll('.menu__item');
  const menuLinks = document.querySelectorAll('.menu__link');
  const subMenus = document.querySelectorAll('.menu_sub');
  
  menuLinks.onclick = clickMenu;

  function clickMenu() {
    let thisSubMenu = this.nextElementSibling;
    if(thisSubMenu) {
      thisSubMenu.className = 'menu_active';
      return false;
    }
  };
};
menu();