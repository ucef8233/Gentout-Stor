$(document).ready(function () {
    // $('#first').change(function () {
    //     var sp = $('span[data-target="#first"]');

    // })
    // vendeur page
    let products = $('.items');
    // switch grid;
    $('#two').click(function () {
        for (let i = 0; i < products.length; i++) {
            products.children().removeClass()
            products.children().addClass("col-md-6");
        }
    });
    $('#three').click(function () {
        for (let i = 0; i < products.length; i++) {
            products.children().removeClass()
            products.children().addClass("col-md-4");
        }
    });
    $('#four').click(function () {
        for (let i = 0; i < products.length; i++) {
            products.children().removeClass()
            products.children().addClass("col-md-3");
        }
    });
});
