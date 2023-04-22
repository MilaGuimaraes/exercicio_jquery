$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
        var cadastraLista = $('#cadastra-lista').val();
        var novoItem = $('<li></li>');
        const tarefa = $('#items-da-lista').val()
        
        $(`<ul>${cadastraLista}<ul>`).appendTo(novoItem);
        $(novoItem).appendTo('#items-da-lista');
        $('#cadastra-lista').val('');
        
        $("#items-da-lista").on("click", "li", function(){
            $(this).wrap("<strike>");
        });
        });         

})