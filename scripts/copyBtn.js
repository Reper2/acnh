const
    copyDiv = document.getElementById('copyDiv'),
    copyBtn = document.createElement('button'),
    copyTooltip = document.createElement('span');

copyDiv.className = 'tooltip';

copyBtn.id = 'copyBtn';
copyBtn.innerHTML = 'Copy link';

copyTooltip.className = 'tooltiptext';
copyTooltip.id = 'copy-tooltip';
copyTooltip.innerHTML = 'Copy link to clipboard';

copyBtn.appendChild(copyTooltip);
copyDiv.appendChild(copyBtn);

console.log('🔗Added copy link button to page.')

copyBtn.onclick = function() {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    console.log(`📋Added to clipboard: ${link}`);
    alert(`Copied link: ${link}`);
};