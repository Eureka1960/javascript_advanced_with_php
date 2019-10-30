<div class="container">
    <div class="col-12">
        <div class="row">
            <div class="col-6">
                <h4>Register Form</h4>
                <div id="show_notification"></div>
                <form method="POST" action="model/tables/Student.model.php" id="student_form" autocomplete="off">
                    <div class="form-group">
                        <label for="full_name">Nom complet</label>
                        <input type="text" name="full_name" id="full_name" data-field_name="nom complet" class="form-control ">
                        <label>
                            <span><strong class="text-danger" id="full_name_error"></strong></span>
                        </label>
                    </div>
                    <div class="form-group ">
                        <label for="gender ">Genre</label>
                        <select name="gender" id="gender" data-field_name="genre" class="form-control ">
                            <option value="" disabled selected>Veuillez selectionner un genre</option>
                            <option value="F">Féminin</option>
                            <option value="M">Masculin</option>
                        </select>
                        <label>
                            <span><strong class="text-danger" id="gender_error"></strong></span>
                        </label>
                    </div>
                    <div class="form-group ">
                        <label for="user_name ">Pseudonime</label>
                        <input type="text " name="user_name" id="user_name" data-field_name="pseudonyme" class="form-control ">
                        <label>
                            <span><strong class="text-danger" id="user_name_error"></strong></span>
                        </label>
                    </div>
                    <div class="form-group ">
                        <label for="email ">E-mail</label>
                        <input type="email " name="email" id="email" data-field_name="email" class="form-control ">
                        <label>
                            <span><strong class="text-danger" id="email_error"></strong></span>
                        </label>
                    </div>
                    <div class="form-group ">
                        <label for="password ">Mot de passe</label>
                        <input type="password " name="password" id="password" data-field_name="mot de passe" class="form-control ">
                        <label>
                            <span><strong class="text-danger" id="password_error"></strong></span>
                        </label>
                    </div>
                    <div class="form-group ">
                        <label for="desciption ">Biographie</label>
                        <textarea name="description" id="description" data-field_name="description" cols="30 " rows="2 " class="form-control "></textarea>
                        <label>
                            <span><strong class="text-danger" id="description_error"></strong></span>
                        </label>
                    </div>
                    <div class="form-group ">
                        <button type="submit" class="btn btn-primary float-right">Enregistrer</button>
                    </div>
                </form>
    
            </div>
            <div class="col-6 ">
                <h4>Liste de tous les élèves</h4>
            </div>
        </div>
    </div>
</div>