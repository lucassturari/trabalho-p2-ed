# Trabalho (P2): Simulador Visual Interativo, Implementação e Explicação Técnica

- **Disciplina:** Estrutura de Dados
- **Curso:** Análise e Desenvolvimento de Sistemas (ADS) — Fatec Ribeirão Preto[cite: 1]
- **Professor:** Eduardo Cruz Araujo[cite: 1]
- **Aluno:** Lucas de Souza Sturari
- **Tema Escolhido:** Tema A — Ordenação Dividir-para-Conquistar: Quick Sort vs. Merge Sort[cite: 2]

---

## 🔗 Link do Vídeo Explicativo
> *[Cole o link do seu vídeo do YouTube "Não Listado" ou Google Drive aqui assim que gravar]*

---

## 📚 Resumo Teórico e Complexidade Assintótica

O **Merge Sort** utiliza a abordagem de *Dividir para Conquistar*, dividindo o array recursivamente ao meio até restar sublistas de um elemento, e depois mesclando-as de forma ordenada. Já o **Quick Sort** escolhe um elemento como pivô, particiona os elementos menores à esquerda e maiores à direita, e aplica a recursão.

### Tabela de Complexidade (Tempo e Espaço)
| Algoritmo | Melhor Caso | Caso Médio | Pior Caso | Por que o pior caso ocorre? |
| :--- | :--- | :--- | :--- | :--- |
| **Merge Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | A divisão ao meio é sempre balanceada, independente da ordem inicial. |
| **Quick Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$ | Ocorre quando o pivô escolhido é sempre o menor ou maior elemento (ex: lista já ordenada com pivô fixo no início). |

---

## 🤖 Diário de Engenharia com IA

- **Ferramenta Utilizada:** Google Gemini como assistente de desenvolvimento e estudo.
- **Top 3 Prompts Utilizados:**
  1. *"Como implementar o Merge Sort e o Quick Sort em Python puro contando comparações e trocas?"*
  2. *"Como estruturar um simulador visual interativo em HTML/JS autocontido para algoritmos de ordenação?"*
  3. *"Quais são os principais cenários de teste obrigatórios para validar o pior caso do Quick Sort?"*
- **Ajuste / Correção Manual:** 
  - Ajuste na lógica do simulador em JavaScript para garantir que o destaque visual (cores dos pivôs e barras comparadas) sincronize corretamente com o passo a passo da interface web.
