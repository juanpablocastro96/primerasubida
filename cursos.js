let cursos ={
		titulo:{
			calculo:{
				nombre:'calculo',
				id:0,
				duracion:50,
				valor:30000,
				alias:'c'
			},
			fisica:{
				nombre:'fisica',
				id:1,
				duracion:20,
				valor:35000,
				alias:'f'
			},
			programacion:{
				nombre:'programacion',
				id:2,
				duracion:30,
				valor:500000,
				alias:'p'

			}
		}
	};
let ensenarCurso1 = (nombre,id,duracion,valor,callback)=>{
	setTimeout(function(){
		let nombrec = nombre;
		let idc = id;
		let duracionc = duracion;
		let valorc = valor;

		
		callback(nombrec,idc,duracionc,valorc);
	},2000);

}
let ensenarCurso2 = (nombre,id,duracion,valor,callback)=>{
	setTimeout(function(){
		let nombrec = nombre;
		let idc = id;
		let duracionc = duracion;
		let valorc = valor;

		
		callback(nombrec,idc,duracionc,valorc);
	},4000);

}

let ensenarCurso3 = (nombre,id,duracion,valor,callback)=>{
	setTimeout(function(){
		let nombrec = nombre;
		let idc = id;
		let duracionc = duracion;
		let valorc = valor;

		
		callback(nombrec,idc,duracionc,valorc);
	},6000);

}
ensenarCurso1(cursos.titulo.calculo.nombre,cursos.titulo.calculo.id,cursos.titulo.calculo.valor,cursos.titulo.calculo.duracion,function(nombre,id,duracion,valor){

	console.log('El curso se llama '+ nombre +' su id es '+id+', el cual tiene una duracion de '+duracion+' horas y un valor de '+valor);
});

ensenarCurso2(cursos.titulo.fisica.nombre,cursos.titulo.fisica.id,cursos.titulo.fisica.valor,cursos.titulo.fisica.duracion,function(nombre,id,duracion,valor){

	console.log('El curso se llama '+ nombre +' su id es '+id+', el cual tiene una duracion de '+duracion+' horas y un valor de '+valor);
});
ensenarCurso3(cursos.titulo.programacion.nombre,cursos.titulo.programacion.id,cursos.titulo.programacion.valor,cursos.titulo.programacion.duracion,function(nombre,id,duracion,valor){

	console.log('El curso se llama '+ nombre +' su id es '+id+', el cual tiene una duracion de '+duracion+' horas y un valor de '+valor);
});









module.exports ={
	cursos,
	ensenarCurso1,
	ensenarCurso2,
	ensenarCurso3

};



