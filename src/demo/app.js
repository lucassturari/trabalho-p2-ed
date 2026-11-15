let arrayOriginal = [40, 10, 30, 50, 20, 70, 60];
let array = [...arrayOriginal];
let comparacoes = 0;
let trocas = 0;
let algoritmoAtual = 'quicksort';

function atualizarVisual(pivotIndex = -1, comparingIndices = []) {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = '';
    const maxVal = Math.max(...array, 10);
    
    array.forEach((val, idx) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${(val / maxVal) * 200}px`;
        bar.innerText = val;
        
        if (idx === pivotIndex) bar.classList.add('pivot');
        if (comparingIndices.includes(idx)) bar.classList.add('comparing');
        
        canvas.appendChild(bar);
    });
    
    document.getElementById('lbl-comp').innerText = comparacoes;
    document.getElementById('lbl-trocas').innerText = trocas;
    document.getElementById('lbl-algo').innerText = algoritmoAtual === 'quicksort' ? 'Quick Sort' : 'Merge Sort';
}

function log(msg) {
    const logBox = document.getElementById('log');
    logBox.innerHTML += `<br>> ${msg}`;
    logBox.scrollTop = logBox.scrollHeight;
}

function mudarAlgoritmo(algo) {
    algoritmoAtual = algo;
    reiniciar();
    log(`Algoritmo alterado para ${algo === 'quicksort' ? 'Quick Sort' : 'Merge Sort'}.`);
}

function carregarCaso(tipo) {
    if (tipo === 'comum') {
        array = [45, 12, 78, 34, 23, 89, 10];
        log("Carregado: Cenário Caso Comum.");
    } else if (tipo === 'pior') {
        array = [10, 20, 30, 40, 50, 60, 70];
        log("Carregado: Pior Caso (Lista já ordenada -> O(n²) no Quick Sort).");
    }
    comparacoes = 0;
    trocas = 0;
    atualizarVisual();
}

function reiniciar() {
    array = [...arrayOriginal];
    comparacoes = 0;
    trocas = 0;
    atualizarVisual();
    log("Simulador reiniciado.");
}

function executarPasso() {
    comparacoes += 1;
    trocas += 1;
    log(`Executando passo de ordenação (${algoritmoAtual}). Comparações: ${comparacoes}`);
    atualizarVisual(0, [1, 2]);
}

reiniciar();
