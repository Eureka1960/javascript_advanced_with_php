if (document.getElementById('student_form')) {
    const validated = false;
    let errors = [];
    //Prevent the default form behavior
    document.getElementById('student_form').addEventListener('submit', e => {
        e.preventDefault();
        const student_form = document.getElementById('student_form').elements;
        //Call the validation function
        form_validation(student_form);
    });

    //Form validation function
    function form_validation(student_form = null, errors_array = []) {
        if (student_form == null) {
            //Make some code here
            console.log('Make some codes here...');
            console.log(errors_array);
        } else {
            let field_error_name = "";
            let field_name = "";
            let newForm = {};
            for (let field of student_form) {
                if (field['value'] == "" && field['type'] != 'submit') {
                    field_error_name = field['name'] + '_error';
                    errors_array.push(field_error_name);
                    field_name = field.getAttribute('data-field_name');
                    document.getElementById(field_error_name).setAttribute('class', 'text-danger');
                    document.getElementById(field_error_name).innerHTML = `Le champs ${field_name} ne doit pas être vide.`;
                }
            }

            //Check if error array length is equal to 0
            if (errors_array.length == 0) {
                for (let field of student_form) {
                    let field_error_name = "";
                    //Make condition to skip thos fields name which are emmpty and make new Object after
                    if (field['name'] != "") {
                        field_error_name = field['id'] + '_error';
                        document.getElementById(field_error_name).removeAttribute('class', 'text-success');
                        document.getElementById(field_error_name).innerHTML = "";
                        newForm[field['name']] = field['value'];
                    }
                }

                //get url from the action form
                const url = document.getElementById('student_form')['action'];

                //Initialize the ajax request
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-type', 'application/x-WWW-form-urlencoded');
                xhr.onreadystatechange = function() {
                    if (this.status == 200 && this.readyState == 4) {
                        const response = JSON.parse(this.responseText);
                        const notification_mgs = document.getElementById('show_notification');
                        if (response.error_message) {
                            let output = "<ul>";
                            response.error_message.forEach(error => {
                                output += '<li>' + error + '</li>';
                            });
                            output += "</ul>";
                            notification_mgs.setAttribute('class', 'alert alert-danger');
                            notification_mgs.innerHTML = output;
                        }

                        if (response.success_message) {
                            notification_mgs.setAttribute('class', 'alert alert-success');
                            notification_mgs.innerHTML = response.success_message;
                            document.getElementById('student_form').reset();
                        }
                        console.log(JSON.parse(this.responseText));
                    }
                }
                xhr.send('student=' + JSON.stringify(newForm));
            }
        }
    }

    //Listend to the gender change select
    document.getElementById('gender').addEventListener('change', function() {
        if (this.value == 'F' || this.value == 'M') {
            errors = [];
            form_validation(null, errors);
            document.getElementById('gender_error').innerText = "";
        } else {
            errors.push('gender_error');
            form_validation(null, errors);
        }
    });

    //Get the value of the full_name field on key up
    document.getElementById('full_name').addEventListener('keyup', function() {
        const input_full_name_value = this.value;
        const field_id = this.id;
        const field_name = this.getAttribute('data-field_name');
        const field_name_size = 7;
        checkFieldSize(field_name_size, input_full_name_value, field_id, field_name);
    });

    //Get the value of the user_name field on key up
    document.getElementById('user_name').addEventListener('keyup', function() {
        const input_user_name_value = this.value;
        const field_id = this.id;
        const field_name = this.getAttribute('data-field_name');
        const field_name_size = 3;
        checkFieldSize(field_name_size, input_user_name_value, field_id, field_name);
    });

    //Get the value of the description field on key up
    document.getElementById('description').addEventListener('keyup', function() {
        const input_description_value = this.value;
        const field_id = this.id;
        const field_name = this.getAttribute('data-field_name');
        const field_name_size = 20;
        checkFieldSize(field_name_size, input_description_value, field_id, field_name);
    });

    //Check if the size of the input field is valid
    function checkFieldSize(field_size, input_name_value, field_id, field_name) {
        let field_error = "";
        if (input_name_value.length < field_size) {
            field_error = field_id + '_error';
            errors.push(field_error)
            form_validation(null, errors);
            document.getElementById(field_error).setAttribute('class', 'text-danger');
            document.getElementById(field_error).innerHTML = `Vous avez saisi ${input_name_value.length} caractère${input_name_value.length > 1 ? 's' : ''} - Minimum(${field_size}) caractères`;
        } else {
            field_error = field_id + '_error';
            errors = [];
            form_validation(null, errors);
            field_name = capitalize(field_name);
            document.getElementById(field_error).setAttribute('class', 'text-success');
            document.getElementById(field_error).innerText = `${field_name} fournit est valide.`;
        }
    }

    //Get email input value by key up event and validate it
    document.getElementById('email').addEventListener('keyup', function() {
        const input_email = this.value;
        const field_name = capitalize(this.getAttribute('data-field_name'));
        if (emailValidation(input_email)) {
            errors = [];
            form_validation(null, errors);
            document.getElementById('email_error').setAttribute('class', 'text-success');
            document.getElementById('email_error').innerHTML = `${field_name} est valide.`;
        } else {
            errors.push('email_error');
            form_validation(null, errors);
            document.getElementById('email_error').setAttribute('class', 'text-danger');
            document.getElementById('email_error').innerHTML = `${field_name} n'est pas valide.`;
        }
    });

    //password validation on key up event 
    document.getElementById('password').addEventListener('keyup', function() {
        const input_password = this.value;
        const field_name = this.getAttribute('data-field_name');
        if (passwordValidation(input_password)) {
            errors = [];
            form_validation(null, errors)
            document.getElementById('password_error').setAttribute('class', 'text-success');
            document.getElementById('password_error').innerHTML = `${field_name} est valide.`;
        } else {
            errors.push('password_error');
            form_validation(null, errors);
            document.getElementById('password_error').setAttribute('class', 'text-danger');
            document.getElementById('password_error').innerHTML = `${field_name} n'est pas valide.`;
        }
    });


    //Make the string capitalize
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    //Make email validation
    function emailValidation(input_email) {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(input_email).toLowerCase());
    }
    //Make password validation
    function passwordValidation(input_password) {
        const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return reg.test(String(input_password));
    }

    //Remove element in errors array
    function remove_from_errors(element) {
        const index = errors.indexOf(element);
        if (index !== -1) errors.splice(index, 1);
        return errors;
    }
}