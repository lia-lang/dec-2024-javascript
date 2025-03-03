function checkAge() {

    const age = document.getElementById("age").value;

    if (age < 18) {
        document.getElementById("message").textContent = "Вибачте, ви ще занадто молоді!";
    } else if (age >= 18) {
        document.getElementById("message").textContent = "Вітаємо, вам більше 18 років!";
    } else {
        document.getElementById("message").textContent = "Будь ласка, введіть правильний вік.";
    }
}
