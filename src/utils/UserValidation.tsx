export default new class UserValidation {

     checkUsername(errors: any, value:String){
        if (!this.checkValueEmpty(value)) {
            errors.username.error = true;
            errors.username.message = "Username is required";
        } else if (!this.checkUsernameMinimum(value)) {
            errors.username.error = true;
            errors.username.message = "Username must be type the minimum 6 letters";
        }  else if (!this.checkUsernameMaximum(value)) {
            errors.username.error = true;
            errors.username.message = "Username must be type the maximum 15 letters";
        } else {
            errors.username.error = false;
        }
    }

    checkPassword(errors: any, value:String){
        if (!this.checkValueEmpty(value)) {
            errors.password.error = true;
            errors.password.message = "Password is required";
        } else {
            errors.password.error = false;
        }
    }

    checkName(errors: any, value:String){
        if (!this.checkValueEmpty(value)) {
            errors.name.error = true;
            errors.name.message = "Name is required";
        } else if (!this.checkNameMinimum(value)) {
            errors.name.error = true;
            errors.name.message = "Name must be type the minimum 3 letters";
        }  else if (!this.checkNameMaximum(value)) {
            errors.name.error = true;
            errors.name.message = "Name must be type the maximum 40 letters";
        } else {
            errors.name.error = false;
        }
    }

    checkConfirmPassword(errors: any, firstPassword:String, secondPassword:String){
         if(!this.checkValueEmpty(secondPassword)){
             errors.confirm.error = true;
             errors.confirm.message = "Confirm password is required";
         } else if(!(firstPassword == secondPassword)){
             errors.confirm.error = true;
             errors.confirm.message = "The confirm password not match first password";
         } else {
             errors.confirm.error = false;
         }
    }

    private checkNameMinimum(value:String ){
        return value.length >= 3;
    }

    private checkNameMaximum = (value:String) => {
        return value.length <= 40;
    }

    private checkValueEmpty = (value: String) =>{
        return value.length > 0;
    }

   private checkUsernameMinimum = (value:String) => {
        return value.length >= 6;
    }

    private checkUsernameMaximum = (value:String) => {
        return value.length <= 15;
    }


}