function sendWhatsAppMessages() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  var date = new Date();
  var schedule = Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
  var startrow = sheet.getRange("G2").getValue();
  var endrow = sheet.getRange("G3").getValue();
  
  for (var i = startrow; i <= endrow; i++) {
    var row = data[i];
    var name = row[1];
    var phoneNumber = row[2]; // Kolom nomor telepon
    var message = row[3]; // Kolom pesan
    
    sendWaText(phoneNumber, message);
  }
}

function sendWaText(number, message) {
  var idDevice = "xxx"; // Ganti Device ID Anda
  
  var formdata = {
    "device_id" : "" + idDevice,
    "number" : "" + number,
    "message" : "" + message,
    //"schedule" : "" + schedule
  };

  var requestOptions = {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(formdata),
    redirect: 'follow'
  };

  var response = UrlFetchApp.fetch("https://app.whacenter.com/api/send", requestOptions);
  Logger.log(response);
}