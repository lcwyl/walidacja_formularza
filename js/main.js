let form = document.querySelector("#form");
let checkAll = document.querySelector("#checkall")

const validate = e => {
    let name = document.querySelector("#name");
    let email = document.querySelector("#email")
    let check1 = document.querySelector("#check1")
    let errors = document.querySelector("#errors");


    errors.innerHTML = ""; //reset errors

    //trim - usuwa białe znaki w input
    if (name.value.trim() === "") {
        let liErr = document.createElement("li");
        errors.appendChild(liErr)
        liErr.innerText = "Uzpełnij pole tekstowe"

    }

    if (email.value.trim() === "") {
        let liErr = document.createElement("li");
        errors.appendChild(liErr);
        liErr.innerText = "Uzupełnij pole email"

    }

    if (!email.value.includes("@")) {
        let liErr = document.createElement("li");
        errors.appendChild(liErr);
        liErr.innerText = "Wprowadź poprawny adres email"
    }

    if (!check1.checked) {
        let liErr = document.createElement("li");
        errors.appendChild(liErr);
        liErr.innerText = "zaznacz zgodę1"
    }

    if (errors.children.length > 0) {
        e.preventDefault();
    } 
    else {
        alert("wysłano newsletter")
    }

}

const checkCheckbox = e => {
    let check1 = document.querySelector("#check1");
    let check2 = document.querySelector("#check2")

    check1.checked = e.target.checked; //dodajdemy stan naszego checkox, czyli przypisujemy stan naszego klikniętego checkboxa
    check2.checked = e.target.checked;

    check1.disabled = e.target.checked;
    check2.disabled = e.target.checked;
}
checkAll.addEventListener("change", checkCheckbox)

form.addEventListener("submit", validate);