# Trabalho (P2): Simulador Visual Interativo, Implementação e Explicação Técnica

- **Disciplina:** Estrutura de Dados
- **Curso:** Análise e Desenvolvimento de Sistemas (ADS) — Fatec Ribeirão Preto
- **Professor:** Eduardo Cruz Araujo
- **Aluno:** Lucas de Souza Sturari
- **RA:** 2840482521031
- **Tema Escolhido:** Tema A — Ordenação Dividir-para-Conquistar: Quick Sort vs. Merge Sort

---

## 🔗 Link do Vídeo Explicativo
https://youtu.be/PKggGXTCZKU

---

## 📚 Resumo Teórico e Complexidade Assintótica

O **Merge Sort** utiliza a abordagem de *Dividir para Conquistar*, dividindo o array recursivamente ao meio até restar sublistas de um elemento, e depois mesclando-as de forma ordenada. Já o **Quick Sort** escolhe um elemento como pivô, particiona os elementos menores à esquerda e maiores à direita, e aplica a recursão.

### Tabela de Complexidade e Justificativas Detalhadas

| Algoritmo | Caso | Complexidade | Justificativa Técnica |
| :--- | :--- | :--- | :--- |
| **Merge Sort** | **Melhor Caso** | $O(n \log n)$ | Independente da ordem inicial dos dados, a lista é sempre dividida rigorosamente ao meio até o nível base, exigindo divisões e mesclagens consistentes. |
| **Merge Sort** | **Caso Médio** | $O(n \log n)$ | O comportamento estrutural da divisão e da intercalação permanece o mesmo para distribuições aleatórias de dados. |
| **Merge Sort** | **Pior Caso** | $O(n \log n)$ | A estabilidade do algoritmo garante que nem mesmo em cenários desfavoráveis o desempenho piore, mantendo sempre o teto logarítmico. |
| **Quick Sort** | **Melhor Caso** | $O(n \log n)$ | Ocorre quando o pivô escolhido consegue particionar o array exatamente (ou muito próximo de) ao meio a cada chamada recursiva, gerando sublistas balanceadas. |
| **Quick Sort** | **Caso Médio** | $O(n \log n)$ | Em listas com distribuições aleatórias comuns, o pivô divide o array em partes razoavelmente equilibradas na maioria das vezes. |
| **Quick Sort** | **Pior Caso** | $O(n^2)$ | Ocorre quando o pivô escolhido é sempre o menor ou maior elemento da sublista (ex: lista já ordenada utilizando pivô fixo no primeiro elemento), gerando partições extremamente desbalanceadas onde uma sublista fica vazia e a outra tem tamanho $n-1$. |

---

## 🤖 Diário de Engenharia com IA

> crie uma demonstração visual seguindo essas instruções: Na Demo Visual: desenhar as barras proporcionais aos valores do vetor, animar o caminho percorrido nas divisões/partições e destacar a ordem de comparação e troca dos elementos. Incluir botão comparando Caso Médio / Aleatório $O(n \log n)$ vs. Pior Caso com Pivô Fixo em lista ordenada / Partição Degenerada $O(n^2)$. Execução Passo a Passo: Botões de Executar / Play, Próximo Passo (Step), Pausar e Reiniciar (Reset). Cenários Pré-configurados: Botões para carregar rapidamente exemplos didáticos (ex.: Caso Médio, Pior Caso, Exemplo Customizado). Painel de Estado e Métricas: Exibição em tempo real do que está acontecendo no passo atual (log explicativo do passo, número de comparações/trocas acumuladas e estado das variáveis auxiliares como pivô e índices). Autocontido: Deve funcionar abrindo o arquivo index.html diretamente no navegador (sem exigir instalação complexa de servidores backend).

> faça um `if __name__ == "__main__":` em Python puro que execute 3 cenários de teste comentados (caso comum, caso de borda e pior caso), imprimindo o resultado ordenado e o total de comparações e movimentações realizadas sem o uso de variáveis globais.

> dividir o projeto front-end em index.html, styles.css e app.js.

### Ajuste Manual

Durante a criação da demo, tive que pedir ajustes para melhorar a aparência e a estrutura da primeira versão gerada. Solicitei a mudança no layout para um tema claro minimalista. Além disso, precisei dar uma ajeitada manual na lógica dos contadores e na fila de passos para garantir que as comparações e trocas fossem contabilizadas e exibidas corretamente a cada clique no botão de **Próximo Passo (Step)**.

---

## 📊 Análise Crítica dos Resultados

1. **Desempenho Prático vs. Teoria Assintótica:**
- O **Merge Sort** confirmou sua estabilidade matemática de $O(n  \log n)$ em todos os cenários testados, mostrando que o custo de divisão e intercalação (`_merge`) é totalmente previsível independentemente da ordem inicial do vetor.
- O **Quick Sort** evidenciou na prática o seu calcanhar de Aquiles: enquanto manteve ótimo desempenho médio  $O(n \log n)$ em listas aleatórias, degradou severamente para $O(n^2)$ em listas já ordenadas devido à escolha fixa do pivô inicial, gerando partições totalmente desbalanceadas.

2. **Validação da Instrumentação de Métricas:**
- A utilização da classe de instrumentação (`EstatisticasOrdenacao`) passada por referência nas chamadas recursivas permitiu mapear com precisão o custo real de execução, comprovando quantitativamente a diferença de comportamento estrutural entre os algoritmos.

3. **Reflexão sobre a Engenharia com Assistência de IA:**
- O uso da IA acelerou a estruturação inicial da lógica e do simulador. No entanto, a supervisão humana foi essencial para validar a exatidão matemática dos contadores estatísticos, corrigir a sincronização visual da interface e garantir o rigor teórico exigido no projeto.
