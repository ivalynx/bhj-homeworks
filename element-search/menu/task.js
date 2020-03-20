function menu() {
  const menuLinks = document.querySelectorAll('.menu__link');
  
  for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = clickMenu;
  }

  function clickMenu() {
    let thisSubMenu = this.closest('.menu__item').querySelector('.menu_sub');
    if(thisSubMenu) { 
      if(thisSubMenu.className == 'menu menu_sub') {
        thisSubMenu.className = 'menu menu_sub menu_active';
      } else {
        thisSubMenu.className = 'menu menu_sub';
      }      
      return false;
    }
  };
};

// function menuUpgraded() {
//   const mainMenus = document.querySelectorAll('.menu_main');
//   for(let i = 0; i < mainMenus.length; i++) {
//     const number = i;
//     const nameOfConst = menuItems + number;
//   }

//   const menuItems = document.querySelectorAll('.menu__item');
//   const menuLinks = document.querySelectorAll('.menu__link');
//   const subMenus = document.querySelectorAll('.menu_sub');

// };

menu();
