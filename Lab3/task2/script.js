const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let text = input.value.trim();
  if (text === "") return;

  addTask(text);
  input.value = "";
});

function addTask(text) {
  //li
  const li = document.createElement("li");
  li.className = "item";

  //checkbox
  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.className = "check";

  //task text
  const span = document.createElement("span");
  span.className = "text";
  span.textContent = text;

  //delete (trash)
  const del = document.createElement("span");
  del.className = "trash";
  del.textContent = "🗑";

  //done/not done
  cb.addEventListener("change", function () {
    if (cb.checked) li.classList.add("done");
    else li.classList.remove("done");
  });

  //delete
  del.addEventListener("click", function () {
    list.removeChild(li);
  });

  li.appendChild(cb);
  li.appendChild(span);
  li.appendChild(del);

  list.appendChild(li);
}
