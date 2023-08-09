/**
 * Created by Rover Global on 1/26/2023.
 */

function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('bx-show');
    icon.classList.toggle('bx-hide');
    anchor.querySelector("span").textContent = icon.matches('.bx-hide') ? "****" : anchor.querySelector("span").dataset.text;
}