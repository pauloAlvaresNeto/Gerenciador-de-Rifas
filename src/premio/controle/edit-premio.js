$(document).ready(function() {

    $('#table-premio').on('click', 'button.btn-edit', function(e) {

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
            url: 'src/premio/modelo/view-premio.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/premio/visao/form-premio.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#VALOR').val(dado.dados.VALOR)
                        $('#TIPO_ID').empty()
                        $('#ID').val(dado.dados.ID)

                        var PROMOCAO_ID = dado.dados.PROMOCAO_ID

                        // Consultar todos os tipos cadastrados em banco de dados
                        $.ajax({
                            dataType: 'json',
                            type: 'POST',
                            assync: true,
                            url: 'src/promocao/modelo/all-promocao.php',
                            success: function(dados) {
                                for (const result of dados) {
                                    if (result.ID === PROMOCAO_ID) {
                                        $('#PROMOCAO_ID').append(`<option value="${result.ID}" selected>${result.TITULO}</option>`)
                                    } else {
                                        $('#PROMOCAO_ID').append(`<option value="${result.ID}">${result.TITULO}</option>`)
                                    }
                                }
                            }
                        })
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-premio').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'e-Rifa', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // premio de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})