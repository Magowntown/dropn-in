function createAlert(type, message) {
  var pageAlert = $('<div class="alert alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button></div>');
  for (var i = message.length - 1; i >= 0; i--) {
    pageAlert.append("<div>"+message[i]+"</div>");
  };
  if (type == 1) {
    pageAlert.addClass("alert-danger");
  } else {
    pageAlert.addClass("alert-success");
  }
  $("#pageAlert").empty().append(pageAlert);
}