/* Pokazywanie i chowanie hasła (w trakcie lub po zakończeniu jego napisania) */
const input = document.getElementById('login-pass');
    eyeIcon = document.getElementById('login-eye');

eyeIcon.addEventListener("click", ()=>{
    //Zmiana typu wprowadzania z hasła (zakropkowanego) na tekst (ujawnienie wpisanego hasła)
    if(input.type == 'password'){
        //Ustaw typ wejścia jako tekst
        input.type="text";

        //Ikona zmiany
        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove('fa-eye-slash');
    }else{
        //Zmiana na hasło
        input.type = "password";

        //Ikona zmiany
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
});