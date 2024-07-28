function onClickCheck(e) {
  
  var range = e.range;
  var spreadSheet = e.source;
  var sheetName = spreadSheet.getActiveSheet().getName();
  var column = range.getColumn();
  var row = range.getRow();
  var inputValue = e.value;
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var hp =  ss.getRange(row,3).getValue();
  var message =  ss.getRange(row,6).getValue();
  var kirim =  ss.getRange(row,7).getValue();
 
  if(kirim == true)
  {  
   
        ss.getRange(row,8).setValue("sent");
        return sendWaText(hp,message);
    
  } 
}

var idDevice = "xxx"; //ganti dengan device id anda

function sendWaText(number,message){
  
var formdata = {
    "device_id" : ""+idDevice,
    "number" : ""+number,
    "message" : ""+message
  }

  var requestOptions = {
    method: 'POST',
    'contentType':'application/json',
    'payload':JSON.stringify(formdata),
    redirect: 'follow'
};

  
  var response = UrlFetchApp.fetch("https://app.whacenter.com/api/send", requestOptions);
  Logger.log(response)


}