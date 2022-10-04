$(document).ready(function() {

    $('#table-promocao').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de registro')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/promocao/modelo/view-promocao.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/promocao/visao/form-promocao.html', function() {
                        $('#TITULO').val(dado.dados.TITULO)
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#DATA_INICIO').val(dado.dados.DATA_INICIO)
                        $('#DATA_FIM').val(dado.dados.DATA_FIM)
                        $('#DATA_SORTEIO').val(dado.dados.DATA_SORTEIO)
                        $('#ARRECADACAO').val(dado.dados.ARRECADACAO)
                        $('#VALOR_RIFA').val(dado.dados.VALOR_RIFA)
                        $('#ID').val(dado.dados.ID)

                        var PREMIO_ID = dado.dados.PREMIO_ID

                        // Consultar todos os tipos cadastrados em banco de dados
                        $.ajax({
                            dataType: 'json',
                            type: 'POST',
                            assync: true,
                            url: 'src/premio/modelo/all-premio.php',
                            success: function(dados) {
                                for (const result of dados) {
                                    if (result.ID === PREMIO_ID) {
                                        $('#PREMIO_ID').append(`<option value="${result.ID}" selected>${result.NOME}</option>`)
                                    } else {
                                        $('#PREMIO_ID').append(`<option value="${result.ID}">${result.NOME}</option>`)
                                    }
                                }
                            }
                        })
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-promocao').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'e-Rifa', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // promocao de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})