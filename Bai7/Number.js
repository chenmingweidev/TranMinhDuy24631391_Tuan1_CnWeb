    let select = document.getElementById("number");

    for (let i = 1; i <= 30; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
