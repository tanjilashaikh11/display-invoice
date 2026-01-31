document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/invoice')
        .then(res => res.json())
        .then(data => {
            let html = '<ul>';
            data.items.forEach(i => {
                html += `<li>${i.name} - $${i.price}</li>`;
            });
            html += '</ul>';
            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(err => {
            document.getElementById('invoice-container').innerText =
                'Error loading invoice';
            console.error(err);
        });
});
