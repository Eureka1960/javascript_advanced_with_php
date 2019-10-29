// getUser();

// document.getElementById('user_form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const elements = document.getElementById('user_form').elements;
//     validateForm(elements);
// });


// //Validation form function
// function validateForm(elements) {
//     let field_size = 3;
//     let field_name = "";
//     let field_error = "";
//     let error_array = [];
//     let newForm = {};
//     for (let el of elements) {
//         if (el['value'] == "") {
//             error_array.push(el['name'])
//             field_error = el['name'] + '_error';
//             field_name = el.getAttribute('data-field_name');
//             document.getElementById(field_error).innerText = `Champs (${field_name}) ne doit pas être vide !`;
//         }

//         if (el['value'] != "" && el['name'] == "email" && el['value'].length < 6) {
//             error_array.push(el['name'])
//             field_error = el['name'] + '_error';
//             field_name = el.getAttribute('data-field_name');
//             document.getElementById(field_error).innerText = `${field_name} doit avoir minimume (6 caractères) !`;
//         }

//         if (el['name'] == "email" && el['value'] != "" && el['value'].length >= 6) {
//             field_error = el['name'] + '_error';
//             document.getElementById(field_error).innerText = "";
//         }

//         if (el['value'] != "" && el['name'] == "name" && el['value'].length < 3) {
//             error_array.push(el['name'])
//             field_error = el['name'] + '_error';
//             field_name = el.getAttribute('data-field_name');
//             document.getElementById(field_error).innerText = `${field_name} doit avoir minimume (3 caractères) !`;
//         }

//         if (el['value'] != "" && el['name'] == "name" && el['value'].length >= 3) {
//             field_error = el['name'] + '_error';
//             document.getElementById(field_error).innerText = "";
//         }

//         if (el['name'] == "password" && el['value'] != "" && el['value'].length < 6) {
//             error_array.push(el['name'])
//             field_error = el['name'] + '_error';
//             field_name = el.getAttribute('data-field_name');
//             document.getElementById(field_error).innerText = `${field_name} doit avoir minimume (6 caractères) !`;
//         }

//         if (el['name'] == "password" && el['value'] != "" && el['value'].length >= 6) {
//             field_error = el['name'] + '_error';
//             document.getElementById(field_error).innerText = "";
//         }
//     }

//     if (error_array.length == 0) {
//         for (let field of elements) {
//             if (field['name'] != "") {
//                 newForm[field['name']] = field['value'];
//             }
//         }
//         // newForm = JSON.stringify(newForm);
//         // fetch('backborn.php', { method: 'POST', body: newForm })
//         //     .then(data => console.log(data))
//         //     .catch(err => console.log(err))

//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', 'backborn.php', true);
//         xhr.setRequestHeader('Content-type', 'application/x-WWW-form-urlencoded');
//         xhr.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 document.getElementById('user_form').reset();
//                 getUser();
//                 document.getElementById('show_notification').innerText = "User registered succefully !";
//             }
//         }

//         xhr.send("user=" + JSON.stringify(newForm));
//     }
// }

// function getUser() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'backborn.php');
//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // console.log("Salut, les codeurs !");
//             let output_table = "";
//             const users = JSON.parse(this.responseText);
//             if (users != null) {
//                 users.forEach(user => {
//                     output_table += `
//                     <tr>
//                         <td>${user.name}</td>
//                         <td>${user.email}</td>
//                         <td>${user.password}</td>
//                     </tr>
//                     `;
//                 });
//             } else {
//                 output_table += "<p style='color:red'>Aucune information pour le moment !</p>"
//             }
//             document.querySelector('tbody').innerHTML = output_table;
//         }
//     }
//     xhr.send();
// }