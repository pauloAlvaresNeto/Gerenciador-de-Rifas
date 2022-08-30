$(document).ready(function() {
    $('#CPF').mask('000.000.000-00', {
        reverse: true
    });

    $('#TELEFONE_PRIMARIO').mask('(00) 0000-00009');

    $('#TELEFONE_PRIMARIO').blur(function(event) {
        if ($(this).val().length == 15) {
            $('#TELEFONE_PRIMARIO').mask('(00) 00000-0009');
        } else {
            $('#TELEFONE_PRIMARIO').mask('(00) 0000-00009');
        }
    })

    $('#TELEFONE_SECUNDARIO').mask('(00) 00000-00009');

    $('#TELEFONE_SECUNDARIO').blur(function(event) {
        if ($(this).val().length == 15) {
            $('#TELEFONE_SECUNDARIO').mask('(00) 00000-0009');
        } else {
            $('#TELEFONE_SECUNDARIO').mask('(00) 0000-00009');
        }
    });

    $('#CEP').mask('00000-000');

    $('#ARRECADACAO').mask('000.000.000.000.000,00 R$', {reverse: true});
    $('#VALOR_RIFA').mask('000.000.000.000.000,00 R$', {reverse: true});
});