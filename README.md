# Trabalho (P2): Simulador Visual Interativo, Implementação e Explicação Técnica

- **Disciplina:** Estrutura de Dados
- **Curso:** Análise e Desenvolvimento de Sistemas (ADS) — Fatec Ribeirão Preto
- **Professor:** Eduardo Cruz Araujo
- **Aluno:** Lucas de Souza Sturari
- **Tema Escolhido:** Tema A — Ordenação Dividir-para-Conquistar: Quick Sort vs. Merge Sort

---

## 🔗 Link do Vídeo Explicativo
> 

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

- **Ferramenta Utilizada:** Google Gemini como assistente de desenvolvimento e estudo.
- **Top 3 Prompts Utilizados:**
  1. *"Como implementar o Merge Sort e o Quick Sort em Python puro contando comparações e trocas?"*
  2. *"Como estruturar um simulador visual interativo em HTML/JS autocontido para algoritmos de ordenação?"*
  3. *"Quais são os principais cenários de teste obrigatórios para validar o pior caso do Quick Sort?"*
- **Ajuste / Correção Manual:** 
  - Ajuste na lógica do simulador em JavaScript para garantir que o destaque visual (cores dos pivôs e barras comparadas) sincronize corretamente com o passo a passo da interface web.
