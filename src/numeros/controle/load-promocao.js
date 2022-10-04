$(document).ready(function() {

    $.ajax({
        dataType: 'json',
        type: 'POST',
        assync: true,
        url: 'src/promocao/modelo/all-promocao.php',
        success: function(dados) {
            for (const result of dados) {
                $('#PROMOCAO_ID').append(`<option value="${result.ID}">${result.TITULO}</option>`)
            }
        }
    })

})