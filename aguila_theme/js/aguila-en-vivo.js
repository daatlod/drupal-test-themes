window.arr_weekdays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
window.arr_monthnames = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre" ];

/*global jQuery2, moment*/
(function ($) {
    var node = "#block-views-lista-de-galerias-block .date-display-single";

    $.initModule(node, function ($, dateNode) {
        dateNode.text(moment($.trim(dateNode.text()), "YYYY-MM-DD").format('MMMM D [de] YYYY'));
    });
    
    $.initModule("#tr1", function ($, node) {
        $(".evento").each(function(i, node) {
            node = $(node).clone();
            node.attr("data-date", node.data("date").replace(/\//g,"-") );
            node.appendTo( $(".aguila-en-vivo .events") );
        });
        
        
        jQuery("#tr1").dzscalendar({});
    });
    
    

}(jQuery2));