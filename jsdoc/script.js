let submit = document.querySelector('input[type="button"]');

submit.addEventListener("click", (e) => {
  const nom = document.querySelector("#nom").value;
  const prenom = document.querySelector("#prenom").value;
  const nationalite = document.querySelector("#nationalite").value;
  const specialite = document.querySelector("#specialite").value;

  const table = document.querySelector("tbody");

  const allTr = table.querySelectorAll("tr");
  const content = allTr.length;

  const info = `<tr id="${content + 1}">
  <td data-title="N°">${content + 1}</td>
  <td data-title="TÂCHES ">${nom}</td>
  <td data-title="DESCRIPTION DE LA TÂCHE ">${prenom}</td>
  <td data-title="DATE">${nationalite}</td>
  <td data-title="HEURE">${specialite}</td>
  <td data-title="MODIFICATION" ><button class="edite"  id="edite-${
    content + 1
  }">Modifier</button> <button class="delete" id="delete-${content + 1}">Supprimer</button></td>
</tr>`;

  table.innerHTML += info;
  console.log(table);

});


