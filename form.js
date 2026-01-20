document.getElementById("testDriveForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let model = document.getElementById("model").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("formMessage");


    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName || !email || !password || !model || !date) {
        message.textContent = "Моля, попълнете всички полета.";
        message.style.color = "red";
        return;
    }

    if (!emailRegex.test(email)) {
        message.textContent = "Моля, въведете валиден имейл адрес.";
        message.style.color = "red";
        return;
    }

    if (!passwordRegex.test(password)) {
        message.textContent = "Паролата трябва да съдържа главна, малка буква, цифра и символ.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Заявката за тест драйв е изпратена успешно!";
    message.style.color = "green";

    this.reset();
});
