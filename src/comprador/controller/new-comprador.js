$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo comprador')

        $('.modal-body').load('src/comprador/view/form-comprador.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-comprador').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-comprador').modal('hide')
    })
})