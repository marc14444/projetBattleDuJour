let submit = document.querySelector('input[type="button"]');
submit.addEventListener("click", (e) => {
  const nom = document.querySelector("#nom").value;
  const prenom = document.querySelector("#prenom").value;
  const nationalite = document.querySelector("#nationalite").value;
  const specialite = document.querySelector("#specialite").value;

  const table = document.querySelector("tbody");

  const allTr = table.querySelectorAll("tr");
  const content = allTr.length;
  // console.log(content);

  const info = `<tr id="${content + 1}">
  <td data-title="N°">${content + 1}</td>
  <td data-title="NOM">${nom}</td>
  <td data-title="PRENOM">${prenom}</td>
  <td data-title="NATIONALITE">${nationalite}</td>
  <td data-title="SPECIALITE">${specialite}</td>
  <td data-title="MODIFICATION" ><i class="edite"  id="edite-${
    content + 1
  }">Edite</i> <i class="delete" id="delete-${content + 1}">Delete</i></td>
</tr>`;

  table.innerHTML += info;
  console.log(table);
});
