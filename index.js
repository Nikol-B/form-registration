    const form = document.querySelector('form');
    const error = document.querySelector('#error');
    const success = document.querySelector('#success');
    const mainContainer = document.querySelector('.main-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const public = document.querySelector('#public').checked;
        const username = document.querySelector('#username').value;
        const role = document.querySelector('#role').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const passwordRepeat = document.querySelector('#password_repeat').value;
        const consent = document.querySelector('#consent').checked;



       if (!username || !role || !email || !password || !passwordRepeat) {
            error.textContent = 'Пожалуйста, заполните все поля';
            document.querySelectorAll('input').forEach(input => {
                if (!input.value) {
                    input.style.borderColor = 'red';
                } 
                else {
                    input.style.borderColor = 'green';
                }
            });
            return;
        }

        if (password !== passwordRepeat) {
            error.textContent = 'Пароли не совпадают';
            document.querySelectorAll('input[type="password"]').forEach(input => {
                input.style.borderColor = 'red';
            });
            return;
        }
        if (password.length < 7) {
            error.textContent = 'Пароль должен содержать не менее 7 символов';
            document.querySelectorAll('input[type="password"]').forEach(input => {
                input.style.borderColor = 'red';
            });
            return;
        }
        document.querySelectorAll('input[type="password"]').forEach(input => {
            input.style.borderColor = 'green';
        });



        if (!consent) {
            error.textContent = 'Вы должны дать согласие на обработку персональных данных';
            return;
        }


        const data = {
            public,
            username,
            role,
            email,
            password,
            passwordRepeat
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(() => {

                form.style.display = 'none',
                    mainContainer.style.display = 'flex';
            })
    })


