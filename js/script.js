Parse.initialize("SrQy9t8NAqwFABA1tKer8B9yXgwFwdHcG0EQl0yl", "dfTWBxaDYMiSmVOFbNoLVb9KyhczN0FedJXg5Ktj");
//Esto sirve para hacer un json de los datos de parse en la consola.
/*var Udacity_Code = Parse.Object.extend("Udacity_Code");
var Udacity_Code = Parse.Collection.extend({
	model: Udacity_Code
});
var udacity_code = new Udacity_Code();
udacity_code.fetch({
	success: function(udacity_code) {
		console.log(udacity_code);
	},
	error: function(udacity_code, error) {
		console.log(error);
	}
});*/
//--------Aqui termina el json de la consola-----------\\
// Lists for store the date 
var Projects=[];
var QATime=[];

//Con esto mando a llamar los datos a parse
var query = new Parse.Query('Udacity_Code');
//query limit hace la llamada de mas elementos
query = query.limit(1000);
query.find({
	success: function(results) {
	// cycle through the results
	for ( x in results) {
		// print out the results
		Projects.push(x);
		FinalContentProjects = Projects.pop();
	}
	$(".Data").append('<h1>'+FinalContentProjects+'</h1>'+'<p>Reviewed'+'<br>'+ 'Project</p>');
	// For para recorrer todos los comentarios awesome y se saque el total de ellos.
	var totalprojects = 0;
	for(x = 0; x <= Projects.length; x++){
		totalprojects = totalprojects + results[x].attributes.Project_id; 
		Projects.push(totalprojects);
	}
	// For para recorrer todo el tiempo total de revision de comentarios.
	var TotalQA=0;
	for(x=0;x <= QATime.length;x++){
		QATime.push(results[x].attributes.Time_that_it_took_QA_and_submit); 
		$('.Prueba').append(QATime);
	}
	},
	error: function(myObject, error) {
	// Error occured
	console.log( error );
	}
});
