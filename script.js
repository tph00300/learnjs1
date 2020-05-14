const title = document.querySelector("#title");

function handleClick(event)
{
  title.style.color="blue";
}
window.addEventListener("click",handleClick);