

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    
    event.preventDefault();

    const formEL = event.currentTarget;

    let formData = {};
    


    if (formEL.password.value === "" || formEL.email.value === "") {
        alert("Всі поля повинні бути заповнені");
    }
    else {
        formData = {
    email: formEL.elements.email.value,
    password: formEL.elements.password.value,
        };
        console.log(formData);
        // const formData = new FormData(event.currentTarget);
        //     formData.forEach((value, name) => {
        //         console.log(value);
        //         console.log(name);
    // })
}
    onResetFormData()
};

function onResetFormData() {
    formRef.reset();
};
