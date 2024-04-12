
const quadradoPreto = document.querySelector (".quadrado");

quadradoPreto.addEventListener ("click", () => {
    const eAzul = quadradoPreto.classList.contains("azul")
    if (eAzul){
    quadradoPreto.classList.remove("azul")
    }
    else{
    quadradoPreto.classList.add("azul")
}})
