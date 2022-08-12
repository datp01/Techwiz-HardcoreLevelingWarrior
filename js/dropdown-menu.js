var selectField = document.getElementById("select-field");
var selectText = document.getElementById("select-text");
var options = document.getElementsByClassName("option");
var list = document.getElementById("list");

selectField.onclick = function () {
  list.classList.toggle("hide");
};

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
  };
}
