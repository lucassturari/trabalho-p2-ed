let arrayOriginal = [40, 10, 30, 50, 20, 70, 60];
let array = [...arrayOriginal];
let comparacoes = 0;
let trocas = 0;
let algoritmoAtual = 'quicksort';
let passosAnimacao = [];
let indicePasso = 0;

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
    log(`Algoritmo alterado para ${algo === 'quicksort' ? 'Quick Sort' : 'Merge Sort'}.`);
    reiniciar();
}

function carregarCaso(tipo) {
    if (tipo === 'comum') {
        arrayOriginal = [45, 12, 78, 34, 23, 89, 10];
        log("Carregado: Cenário Caso Comum.");
    } else if (tipo === 'pior') {
        arrayOriginal = [10, 20, 30, 40, 50, 60, 70];
        log("Carregado: Pior Caso (Lista já ordenada -> O(n²) no Quick Sort).");
    }
    reiniciar();
}

function reiniciar() {
    array = [...arrayOriginal];
    comparacoes = 0;
    trocas = 0;
    indicePasso = 0;
    gerarPassosSimulacao();
    atualizarVisual();
    log("Simulador reiniciado.");
}

function gerarPassosSimulacao() {
    passosAnimacao = [];
    let tempArray = [...array];
    let n = tempArray.length;
    
    // Simulação visual passo a passo
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            passosAnimacao.push({
                arr: [...tempArray],
                comparing: [j, j + 1],
                pivot: algoritmoAtual === 'quicksort' ? 0 : -1,
                msg: `Comparando elementos ${tempArray[j]} e ${tempArray[j+1]}`
            });
            comparacoes++;
            
            if (tempArray[j] > tempArray[j + 1]) {
                let aux = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = aux;
                trocas++;
                passosAnimacao.push({
                    arr: [...tempArray],
                    comparing: [j, j + 1],
                    pivot: -1,
                    msg: `Troca realizada: ${tempArray[j]} <-> ${tempArray[j+1]}`
                });
            }
        }
    }
    passosAnimacao.push({
        arr: [...tempArray],
        comparing: [],
        pivot: -1,
        msg: "Ordenação concluída com sucesso!"
    });
}

function executarPasso() {
    if (indicePasso < passosAnimacao.length) {
        let passo = passosAnimacao[indicePasso];
        array = [...passo.arr];
        log(passo.msg);
        atualizarVisual(passo.pivot, passo.comparing);
        indicePasso++;
    } else {
        log("O array já está totalmente ordenado! Clique em Reiniciar ou escolha um cenário.");
    }
}

reiniciar();
