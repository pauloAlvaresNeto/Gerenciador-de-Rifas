$(document).ready(function() {

    $('.btn-generate').click(function(e) {
        e.preventDefault()

        let dados = `PROMOCAO_ID=${$('#PROMOCAO_ID').val()}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/numeros/modelo/generate-numbers.php',
            success: function(dados) {
                Swal.fire({
                    title: 'e-Rifa',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
            }
        })
    })

})