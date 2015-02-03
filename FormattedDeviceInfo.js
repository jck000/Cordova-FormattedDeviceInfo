/*
  get_device_info_to_fields()

    Place values returned by Cordova device plugin into div/span with id  matching 
      the name of each field.

    For example: 
       id="label-cordova" is assigned device.cordova
       id="label-model" is assigned device.model

*/

function get_device_info_to_fields() {

  $('#label-cordova' ).text(device.cordova);
  $('#label-model'   ).text(device.model);
  $('#label-name'    ).text(device.name);
  $('#label-platform').text(device.platform);
  $('#label-uuid'    ).text(device.uuid);
  $('#label-version' ).text(device.version);

}


function get_device_info_as_str() {
  return      'Cordova:  ' + device.cordova  + '\n' 
            + 'Model:    ' + device.model    + '\n' 
            + 'Name:     ' + device.name     + '\n' 
            + 'Platform: ' + device.platform + '\n' 
            + 'UUID:     ' + device.uuid     + '\n' 
            + 'Version:  ' + device.version  + '\n';
}


function get_device_info_as_html() {
  return      'Cordova:  ' + device.cordova  + '<br>' 
            + 'Model:    ' + device.model    + '<br>' 
            + 'Name:     ' + device.name     + '<br>' 
            + 'Platform: ' + device.platform + '<br>' 
            + 'UUID:     ' + device.uuid     + '<br>' 
            + 'Version:  ' + device.version  + '<br>';
}


function get_device_info_as_params() {
  return      'Cordova='  + device.cordova  + '&' 
            + 'Model='    + device.model    + '&' 
            + 'Name='     + device.name     + '&' 
            + 'Platform=' + device.platform + '&' 
            + 'UUID='     + device.uuid     + '&' 
            + 'Version='  + device.version  + '&';
}
