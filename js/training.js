document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameRegex = /^[A-Za-z\u0600-\u06FF ]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    nameInput.addEventListener("input", () => {
        validateField(nameInput, nameRegex);
    });

    emailInput.addEventListener("input", () => {
        validateField(emailInput, emailRegex);
    });

    messageInput.addEventListener("input", () => {
        messageInput.value.trim().length >= 5
            ? setValid(messageInput)
            : setInvalid(messageInput);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valid = true;

        if (!validateField(nameInput, nameRegex)) valid = false;
        if (!validateField(emailInput, emailRegex)) valid = false;
        if (messageInput.value.trim().length < 5) {
            setInvalid(messageInput);
            valid = false;
        }

        if (valid) {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            const whatsappMessage = `
مرحبا 👋
لدي رسالة جديدة من نموذج التواصل:

👤 الاسم: ${name}
📧 البريد الإلكتروني: ${email}
📝 الرسالة:
${message}
            `;

            const whatsappNumber = "201094949848";

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            Swal.fire({
                icon: "success",
                title: "تم الإرسال بنجاح!",
                text: "سيتم تحويلك إلى واتساب لإرسال الرسالة.",
                confirmButtonText: "حسنًا",
                confirmButtonColor: "#0d6efd"
            }).then(() => {
                window.open(whatsappURL, "_blank");
            });

            form.reset();
            clearValidation(nameInput);
            clearValidation(emailInput);
            clearValidation(messageInput);
        }
    });

    function validateField(input, regex) {
        if (!input.value.trim() || !regex.test(input.value.trim())) {
            setInvalid(input);
            return false;
        }
        setValid(input);
        return true;
    }

    function setInvalid(input) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }

    function setValid(input) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }

    function clearValidation(input) {
        input.classList.remove("is-valid", "is-invalid");
    }
});
