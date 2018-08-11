$('#submit').on('click', function (event) {
    event.preventDefault();

    let reserv = {
        name: $('#name').val().trim(),
        phone: $('#phone').val().trim(),
        email: $('#email').val().trim(),
        id: $('#id').val().trim()
    };

    $.post('/add', reserv).then(function (error) {
        if (error) console.log(error);
    })

})