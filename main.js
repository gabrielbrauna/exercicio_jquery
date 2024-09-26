$(document).ready(function(){
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const textoTarefa = $('#id-valor-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<p>${textoTarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#id-valor-tarefa').val('');

    $("p").click(function() {
        $(this).addClass("riscado");
        })
    }); 
});