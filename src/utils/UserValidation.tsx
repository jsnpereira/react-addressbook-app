export default new class UserValidation {

    checkUsername(errors: any, value:String){
        if (!this.checkValueEmpty(value)) {
            errors.username.error = true;
            errors.username.message = 'E-mail is required';
            errors.buttonStatus.disabled = true;
        } else {
            errors.username.error = false;
            errors.username.message = '';
            errors.buttonStatus.disabled = false;
        }
    }

     checkEmail(errors: any, value:String){
        if (!this.checkValueEmpty(value)) {
            errors.email.error = true;
            errors.email.message = 'E-mail is required';
            errors.buttonStatus.disabled = true;
        } else if (!this.checkUsernameMinimum(value)) {
            errors.email.error = true;
            errors.email.message = 'E-mail must be type the minimum 6 letters';
            errors.buttonStatus.disabled = true;
        }  else if (!this.checkUsernameMaximum(value)) {
            errors.email.error = true;
            errors.email.message = 'E-mail must be type the maximum 30 letters';
            errors.buttonStatus.disabled = true;
        } else {
            errors.email.error = false;
            errors.email.message ='';
            errors.buttonStatus.disabled = false;
        }
    }

    checkPassword(errors: any, value:String){
        if (!this.checkValueEmpty(value)) {
            errors.password.error = true;
            errors.password.message = 'Password is required';
            errors.buttonStatus.disabled = true;
        } else {
            errors.password.error = false;
            errors.password.message = '';
            errors.buttonStatus.disabled = false;
        }
    }

    checkName(errors: any, value:String){
        if (!this.checkValueEmpty(value)) {
            errors.name.error = true;
            errors.name.message = 'Name is required';
            errors.buttonStatus.disabled = true;
        } else if (!this.checkNameMinimum(value)) {
            errors.name.error = true;
            errors.name.message = 'Name must be type the minimum 3 letters';
            errors.buttonStatus.disabled = true;
        }  else if (!this.checkNameMaximum(value)) {
            errors.name.error = true;
            errors.name.message = 'Name must be type the maximum 40 letters';
            errors.buttonStatus.disabled = true;
        } else {
            errors.name.error = false;
            errors.name.message = '';
            errors.buttonStatus.disabled = false;
        }
    }

    checkConfirmPassword(errors: any, firstPassword:String, secondPassword:String){
         if(!this.checkValueEmpty(secondPassword)){
             errors.confirm.error = true;
             errors.confirm.message = 'Confirm password is required';
             errors.buttonStatus.disabled = true;
         } else if(!(firstPassword == secondPassword)){
             errors.confirm.error = true;
             errors.confirm.message = 'The confirm password not match first password';
             errors.buttonStatus.disabled = true;
         } else {
             errors.confirm.error = false;
             errors.confirm.message = '';
             errors.buttonStatus.disabled = false;
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
        return value.length <= 30;
    }


}