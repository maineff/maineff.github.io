function funct(params) {
    var valeur = document.querySelector('input[name=choice]:checked').value;
    switch (valeur) {
        case "slice":
            localStorage.setItem('win2',"slice");
            switch(localStorage.getItem('star'))
            {
              case "0":
                document.location.href="win2.html";
                localStorage.setItem('star',"1");
                break;
              case "1":
                document.location.href="win2.html";
                localStorage.setItem('star',"2");
                break;
              case "2":
                document.location.href="win2.html";
                localStorage.setItem('star',"3");
                break;
              default:
                break;
            }
            break;
        case "cube":
            document.location.href="end2.html";
            localStorage.setItem('end2',"cube");
        break;
        case "stick":
            ddocument.location.href="end2.html";
            localStorage.setItem('end2',"stick");
        break;
    
        default:
            break;
    }
}