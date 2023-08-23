var tabla;

function init(){
    $("#producto_form").on("submit",function(e){
        guardaryeditar(e);	
    });
}

$(document).ready(function(){ 

    // Select2
        $('#cat_id').select2({
            dropdownParent: $("#modalmantenimiento")          
        });
  $.post("../../controller/categoria.php?op=combo", function (data){
    $("#cat_id").html(data);
    // console.log(data);
  });
    tabla=$('#producto_data').dataTable({
		"aProcessing": true,//Activamos el procesamiento del datatables
	    "aServerSide": true,//Paginación y filtrado realizados por el servidor
	    dom: 'Bfrtip',//Definimos los elementos del control de tabla
	    buttons: [
		            'copyHtml5',
		            'excelHtml5',
		            'csvHtml5',
		            'pdf'
		        ],
        "ajax":{
            url: '../../controller/producto.php?op=listar',
            type : "get",
            dataType : "json",
            error: function(e){
                console.log(e.responseText);	
            }
        },
		"bDestroy": true,
		"responsive": true,
		"bInfo":true,
		"iDisplayLength": 10,//Por cada 10 registros hace una paginación
	    "order": [[ 0, "asc" ]],//Ordenar (columna,orden)
	    "language": {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
		}
	}).DataTable();
});

function guardaryeditar(e){
    e.preventDefault();
    var formData = new FormData($("#producto_form")[0]);
    $.ajax({
        url: "../../controller/producto.php?op=guardaryeditar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(datos){

            $('#producto_form')[0].reset();//reseteamos el form
            $("#modalmantenimiento").modal('hide');
            $('#producto_data').DataTable().ajax.reload(); //recargar el datatable

            swal.fire(
                'Registro!',
                'Se registro correctamente.',
                'success'
            )
        }
    });
}

function editar(prod_id){
    $.post("../../controller/producto.php?op=mostrar",{prod_id:prod_id},function (data) {
        data = JSON.parse(data);
        $('#prod_id').val(data.prod_id);
        $('#cat_id').val(data.cat_id).trigger('change');
        $('#prod_nom').val(data.prod_nom);
        $('#prod_desc').val(data.prod_desc);
        $('#prod_cant').val(data.prod_cant);
    });
    $('#mdltitulo').html('Editar Registro');
    $('#modalmantenimiento').modal('show');
}

function eliminar(prod_id){
    swal.fire({
        title: 'CRUD',
        text: "Desea Eliminar el Registro?",
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            $.post("../../controller/producto.php?op=eliminar",{prod_id:prod_id},function (data) {

            });

            $('#producto_data').DataTable().ajax.reload();	

            swal.fire(
                'Eliminado!',
                'El registro se elimino correctamente.',
                'success'
            )
        }
    })
}

$(document).on("click","#btnnuevo", function(){
    $('#prod_id').val('');
    $('#cat_id').val('').trigger('change');
    $('#mdltitulo').html('Nuevo Registro');
    $('#producto_form')[0].reset();
    $('#prod_id').val('');
    $('#modalmantenimiento').modal('show');
});

init();