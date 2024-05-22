let alumnos=[]


function prueba(formulario){
    const {nombre, nota1, nota2, nota3} = formulario;
    if (isNaN(nota1.value) || isNaN(nota2.value) || isNaN(nota3.value)) {
        alert('Por favor, ingresa solo números en los campos de notas');
        return false;
    }
    let datosalumnos = {nombre: nombre.value, nota1: nota1.value, nota2: nota2.value, nota3: nota3.value};
    alumnos.push(datosalumnos);
    console.log(alumnos);
    formulario.reset();
    return false;
}


function reporte(){
    let ultimoAlumno = alumnos[alumnos.length - 1];
    let suma = parseInt(ultimoAlumno.nota1) + parseInt(ultimoAlumno.nota2) + parseInt(ultimoAlumno.nota3);
    let promedio = suma / 3;
    let resultado = document.getElementById('resultado1');
    resultado.innerHTML = `El promedio de las notas del último alumno es ${promedio}`;
}


function reporte2(){
    let suma = 0;
    let totalNotas = 0;
    alumnos.forEach(alumno => {
        suma += parseInt(alumno.nota1) + parseInt(alumno.nota2) + parseInt(alumno.nota3);
        totalNotas += 3;
    });
    let promedio = suma / totalNotas;
    let resultado = document.getElementById('resultado2');
    resultado.innerHTML = `El promedio del curso es = ${promedio}`;
}
