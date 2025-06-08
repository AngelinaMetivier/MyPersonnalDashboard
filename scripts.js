// GERER LA TO DO LIST

let checkBoxes = document.querySelectorAll("input[type=checkbox]");
let inputTexts = document.querySelectorAll("#to-do-list input[type=text]");

checkBoxes.forEach((checkBox, index) => {
    checkBox.addEventListener("click", () => {
        let inputText = inputTexts[index];

        // Si la case est cochée, vider le champ de texte
        if (checkBox.checked) {
            inputText.value = "";
        }

        // Vérifier si le champ de texte est vide, et décocher la case
        if (inputText.value === "") {
            checkBox.checked = false;
        }
    });
});