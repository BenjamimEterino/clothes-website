function changeDisplay(list) {
    var menu = document.getElementById(list);

    if (menu.style.display == "block") {
       menu.style.display="none"
    } else {
        menu.style.display="block"
    }
}

function changeButton(x) {
    x.classList.toggle("change");
  }