function init(){
}

$(document).ready(function() {

});

$(document).on("click", "#btnsoporte", function () {
    if ($('#rol_id').val()==1){
        $('#lbltitulo').html("Acceso Soporte");
        $('#btnsoporte').html("Acceso Usuario");
        $('#btnadmin').html("Acceso Admin");
        $('#rol_id').val(2);
        $("#imgtipo").attr("src","public/2.jpg");
    }else{
        $('#lbltitulo').html("Acceso Usuario");
        $('#btnsoporte').html("Acceso Soporte");
        $('#btnadmin').html("Acceso Admin");
        $('#rol_id').val(1);
        $("#imgtipo").attr("src","public/1.jpg");
    }
});

$(document).on("click", "#btnadmin", function () {
    if ($('#rol_id').val()==1){
        $('#lbltitulo').html("Acceso Admin");
        $('#btnsoporte').html("Acceso Soporte");
        $('#btnadmin').html("Acceso Usuario");
        $('#rol_id').val(3);
        $("#imgtipo").attr("src","public/3.jpg");
    }else{
        $('#lbltitulo').html("Acceso Usuario");
        $('#btnsoporte').html("Acceso Soporte");
        $('#btnadmin').html("Acceso Admin");
        $('#rol_id').val(1);
        $("#imgtipo").attr("src","public/1.jpg");
    }
});

init();