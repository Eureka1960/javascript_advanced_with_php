if (document.getElementById('student_form')) {
    const validated = false;
    //Prevent the default form behavior
    document.getElementById('student_form').addEventListener('submit', e => {
        e.preventDefault();
        const student_form = document.getElementById('student_form').elements;
        //Call the validation function
        form_validation(student_form);
    });

    //Form validation function
    function form_validation(student_form) {
        if (student_form == null) {
            //Make some code here
            console.log('Make some codes here...');
        } else {
            let field_error_name = "";
            let field_name = "";
            for (let field of student_form) {
                if (field['value'] == "" && field['type'] != 'submit') {
                    field_error_name = field['name'] + '_error';
                    field_name = field.getAttribute('data-field_name');
                    document.getElementById(field_error_name).innerHTML = `Le champs ${field_name} ne doit pas être vide.`;
                }
            }
        }
    }

    //Listend to the gender change select
    document.getElementById('gender').addEventListener('change', function() {
        if (this.value == 'F' || this.value == 'M') {
            document.getElementById('gender_error').innerText = "";
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
            document.getElementById(field_error).setAttribute('class', 'text-danger');
            document.getElementById(field_error).innerHTML = `Vous avez saisi ${input_name_value.length} caractère${input_name_value.length > 1 ? 's' : ''} - Minimum(${field_size}) caractères`;
        } else {
            field_error = field_id + '_error';
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
            document.getElementById('email_error').setAttribute('class', 'text-success');
            document.getElementById('email_error').innerHTML = `${field_name} est valide.`;
        } else {
            document.getElementById('email_error').setAttribute('class', 'text-danger');
            document.getElementById('email_error').innerHTML = `${field_name} n'est pas valide.`;
        }
    });

    //password validation on key up event 
    document.getElementById('password').addEventListener('keyup', function() {
        const input_password = this.value;
        const field_name = this.getAttribute('data-field_name');
        if (passwordValidation(input_password)) {
            document.getElementById('password_error').setAttribute('class', 'text-success');
            document.getElementById('password_error').innerHTML = `${field_name} est valide.`;
        } else {
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

    //Check if the no error in validation form

}