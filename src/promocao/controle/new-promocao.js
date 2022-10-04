$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar nova promoção')

        $('.modal-body').load('src/promocao/visao/form-promocao.html' , function() {
            // Criar um ajax para buscar todos os tipos de vendendores possíveis
            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                url: 'src/premio/modelo/all-premio.php',
                success: function(dados) {
                    for (const result of dados) {
                        $('#PREMIO_ID').append(`<option value="${result.ID}">${result.NOME}</option>`)
                    }
                }
            })
        })

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-promocao').modal('show')
    })
})