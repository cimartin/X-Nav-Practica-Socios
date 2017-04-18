$(document).ready(function() {
	contador = 0;

	$("#tabs").tabs();

	$.getJSON("timeline.json").done(function(data) {
		imprimirmsg (data.items, "#mensajes");
	});

	$.getJSON("myline.json").done(function(data)
	{
		imprimirmsg(data.items, "#misMensajes")
	});

	$("#update").click(function(){
		$.getJSON("update.json").done(function(data) {
			if(contador == 0){
				contador ++;
				imprimirmsg(data.items, "#mensajesNuevos");
			}else{
				alert("no tienes mensajes nuevos");
			}
		})
	});

	function imprimirmsg (mensajes, id){ 
        for (var i in mensajes){
			$(id).prepend("<div style = 'padding-bottom: 60px;'>" + mensajes[i].contenido + "<div style = 'color: red; font-size: 75%; padding-top: 5px;'>" + mensajes[i].fecha + "</div>" + "</div>");
            $(id).prepend("<div >" + '<img style = "float:left;" id="img" src='+ mensajes[i].avatar + '>' + " " + "<h1>" + mensajes[i].autor + " </h1>" + "<div style =  'font-size: 100%; font-weight: bold; float:left;' >" + "Asunto:  " +"</div>" + mensajes[i].titulo + "  <div>");
       		
        }
        $(id).accordion({collapsible: true, active:false});	
    };
});

