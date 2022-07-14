const
    copyDiv = document.getElementById('copy'),
    copyBtn = document.createElement('button'),
    copyTooltip = document.createElement('span');

copyDiv.className = 'tooltip';

copyBtn.innerHTML = 'Copy link';

copyTooltip.className = 'tooltiptext';
copyTooltip.id = 'copy-tooltip';
copyTooltip.innerHTML = 'Copy link to clipboard (Ctrl+C)';

copyBtn.appendChild(copyTooltip);
copyDiv.appendChild(copyBtn);

console.log('🔗Added copy link button to page.')

copyDiv.addEventListener('click', () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    console.log(`📋Added to clipboard: ${link}`);
    alert(`Copied link: ${link}`);
});