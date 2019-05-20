console.log('Inscribirme a curso');

const{cursos} =require('./cursos');;
let estudiante ={
	nombre: 'Juan',
	cedula: 0,
	idCurso:0


};
const opciones1 =[{
	id:{
		demand:true,
		alias:'i'
	},
	nombre:{
		demand:'jasnkjas',
		alias:'n'
	},
	cedula:{
		demand: true,
		alias:'c'
	}

}];
const argv = require('yargs')
			.command('inscribir','Hacer inscipcion',opciones1)
			.argv
console.log(argv.nombre);
console.log(argv);
let idBuscar = argv.id;

let buscarCurso = opciones1.find(opciones1 => opciones1.id == idBuscar);



let crearArchvo = (cursos,estudiante)=>{
	texto ='el nombre del estidiante es '+ estudiante.nombre+' su cedula es '+ estudiante.cedula+ 'y esta matriculado en el curso '+buscarCurso(opciones1) ;
	fs.writeFile('cursoMatriculados.txt', texto,(err)=>{

		if(err) throw(err);
		console.log('se ha creado el archivo ');
	});
}


crearArchvo(cursos,estudiante);