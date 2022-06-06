function audctrl_show() {
    $('#music').show();
    $('#audctrlBtn_show').hide();
    $('#audctrlBtn_hide').show();
    console.log('Audio controls are now visible at the bottom of the page.');
};

function audctrl_hide() {
    $('#music').hide();
    $('#audctrlBtn_show').show();
    $('#audctrlBtn_hide').hide();
    console.log('Audio controls are now hidden.');
};