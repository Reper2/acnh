function audctrl_show() {
    $('#music').show();
    $('#audctrlBtn_show').hide();
    $('#audctrlBtn_hide').show();
    console.log('Showing audio controls.');
};

function audctrl_hide() {
    $('#music').hide();
    $('#audctrlBtn_show').show();
    $('#audctrlBtn_hide').hide();
    console.log('Hiding audio controls.');
};