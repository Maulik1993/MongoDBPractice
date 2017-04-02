//////////////UPDATE FUNCTION /////////////////


console.log("inside mainjquery");
$('#UpdateContact').click(function(){
console.log("inside update contact function");
$.ajax({
url:'fetchContact',
datatype:'json',
type:'get',
cache:false,
success:function(data){

  var out = "";
//var i=0;

$.each(data, function(index, value) {
 out+=
 '<div class="jumbotron well">'+
   '<div class="container-fluid">'+
       '<div class="row">'+
           '<div class="col-md-12">'+
                '<div class="row">'+
                  '<div class="col-md-3">'+
                      '<h5 class="updateFeature">Name</h5>'+
                       '<h5 class="updateFeature">Email</h5>'+
                       '<h5 class="updateFeature">Number</h5>'+
                       '<h5 class="updateFeature">Message</h5>'+
                       '<h5 class="updateFeature"><input type="button" value="Update" class="btn btn-primary" ></h5>'+
                 '</div>'+//<!--End col-md-3 -->
                  '<div class="col-md-9">'+
                      '<h5>'+ data[index].Name +'</h5>'+
                      '<h5>'+data[index].Email +'</h5>'+
                      '<h5>'+data[index].CNumber +'</h5>'+
                      '<h5>'+data[index].Message +'</h5>'+
                  ' <a id="modal-754921" class="btn btn-danger" href="#modal-container-Delete" role="button" data-toggle="modal">Delete</a>'+
                  '</div>'+//<!--End col-md-9-->
                 '</div>'+<!--End row -->
                '</div>'+<!--End col-md-12 -->
       '</div>'+<!--End row -->
   '</div>'+<!--End container-fluid-->
 '</div>'<!--End jumbotron well -->

 });//loop End

document.getElementById("id02").innerHTML = out;
}//success End
});//ajax End

});


/////////////////////// DISPLAY FUNCTION ///////////////////////////
$('#displayContact').click(function(){
console.log("inside display contact function");
$.ajax({
url:'fetchContact',
datatype:'json',
type:'get',
cache:false,
success:function(data){

  var out = "";
//var i=0;

 out+=
 '<div class="jumbotron well">'+
   '<div class="container-fluid">'+
       '<div class="row">'+
           '<div class="col-md-12">'+
                '<div class="row">'+
                  '<div class="col-md-3">'+
                      '<h5 class="updateFeature">Name</h5>'+
                       '<h5 class="updateFeature">Email</h5>'+
                       '<h5 class="updateFeature">Number</h5>'+
                       '<h5 class="updateFeature">Message</h5>'+
                 '</div>'+//<!--End col-md-3 -->
                  '<div class="col-md-9">'+
                      '<h5>'+ data[index].Name +'</h5>'+
                      '<h5>'+data[index].Email +'</h5>'+
                      '<h5>'+data[index].CNumber +'</h5>'+
                      '<h5>'+data[index].Message +'</h5>'+
                  '</div>'+//<!--End col-md-9-->
                 '</div>'+<!--End row -->
           '</div>'+<!--End col-md-12 -->
       '</div>'+<!--End row -->
   '</div>'+<!--End container-fluid-->
 '</div>'<!--End jumbotron well -->

 });//loop End

document.getElementById("id01").innerHTML = out;
}//success End
});//ajax End
});//function End
