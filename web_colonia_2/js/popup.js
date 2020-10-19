$(function() {
    $(".button-pop").click(function() {
        $("#myform #valueFromMyButton").text($(this).val().trim());
        $("#myform input[type=text]").val('');
        $("#valueFromMyModal").val('');
        $("#myform").show(100);
    });
    $("#btnOK").click(function() {
        // $("#valueFromMyModal").val($("#myform input[type=text]").val().trim());
        $("#input-carro").val($("#myform #form-element-stepper-auto").val().trim());
        $("#input-camioneta").val($("#myform #form-element-stepper-camioneta").val().trim());
        $("#input-moto").val($("#myform #form-element-stepper-moto").val().trim());
        // $("#input-trailer").val($("#myform #form-element-stepper-trailer").val().trim());

        $("#myform").hide(100);
    });
});