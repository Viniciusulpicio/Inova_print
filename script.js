// Essa função carrega outra pagina no index, como se fossem components
function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadContent('./pages/servicos.html', 'servicos');
    loadContent('./pages/produtos.html', 'produtos');
    loadContent('./pages/depoimentos.html', 'depoimentos');
});


