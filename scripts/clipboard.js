function copyLink() {
    $('.active').trigger('click');
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    console.log(`📋Added to clipboard: ${link}`);
    alert(`Copied link: ${link}`);
};