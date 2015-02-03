# Cordova-FormattedDeviceInfo

This is a script with a collection of function to display or capture device information.  It formats the response from Cordova for various purposes.  

To use it, include the following line in the html:

    <script type="text/javascript" src="js/FormattedDeviceInfo.js"></script> 


Then, in the header:

      document.addEventListener("deviceready", onDeviceReady, false);
      
      function onDeviceReady() {
        get_device_info_to_fields();
        ...
        
In the header of the page add a link to the popup page.  The HTML is located in this repository:

        <a href="#info_dialog" data-transition="fade" data-theme="a" data-icon="info" class="ui-btn-left">About</a>


