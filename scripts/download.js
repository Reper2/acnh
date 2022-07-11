function downloadFile(filename) {
    var t = confirm(`Are you sure you want to download:\n${filename}`);
    if (t) {
        fetch(`./${filename}`)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
			}),
        console.log(`💾${filename} is downloading.`);
	};
};