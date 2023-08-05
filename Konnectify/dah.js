/**
 * Created by Rover Global on 1/27/2023.
 */
function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('bx-show');
    icon.classList.toggle('bx-hide');
    anchor.querySelector("span").textContent = icon.classList.contains('bx-show') ? "Read more" : anchor.querySelector("span");
}