let alumnos=[]

function prueba(formulario){
    const {nombre,edad}=formulario //constante
    //alumno.push({nombre,edad})
    let datosalumnos={nombre:nombre.value,edad:edad.value} //que quiero que se guarde
    alumnos.push(datosalumnos)
    console.log(alumnos)
    formulario.reset()
}

function reporte() {
    let suma=0
    alumnos.forEach(sumaedades)
    alert(`La suma de las edades es ${suma}`)

    function sumaedades(item){
        suma+=parseInt(item.edad)
        return suma
    }
}

 //como hacer que este resultado salga en el html
