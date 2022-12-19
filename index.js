function validateForm(){
    var x = document.forms['Login']['.userName'].value;
    if(x == ''){
        alert('Name must be entered');
        return false;

    }
    
}