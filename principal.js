const{cursos,ensenarCurso1, ensenarCurso2, ensenarCurso3} =require('./cursos');
let{titulo:{calculo:{nombreC, idC,duracionC,valorC}, fisica:{nombreF, idF,duracionF,valorF}, programacion:{nombreP, idP,duracionP,valorP}}} = cursos;

ensenarCurso1(nombreC,idC,valorC,duracionC,function(nombrec,id,duracion,valor){});
ensenarCurso2(nombreF,idF,valorF,duracionF,function(nombre,id,duracion,valor){});
ensenarCurso3(nombreP,idP,valorP,duracionP,function(nombre,id,duracion,valor){});



