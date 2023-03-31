export default function hideAllPopups() {
  let modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.add("hidden");
  }
}
