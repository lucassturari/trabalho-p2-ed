"""
Módulo de Algoritmos de Ordenação (Tema A)
Autor: Lucas de Souza Sturari
Disciplina: Estrutura de Dados - Fatec Ribeirão Preto
"""

from typing import List, Tuple

class EstatisticasOrdenacao:
    """Classe auxiliar para contar comparações e trocas/atribuições."""
    def __init__(self):
        self.comparacoes = 0
        self.trocas = 0

    def reiniciar(self):
        self.comparacoes = 0
        self.trocas = 0


def merge_sort(arr: List[int], stats: EstatisticasOrdenacao) -> List[int]:
    """Implementação do Merge Sort (Dividir para Conquistar)."""
    if len(arr) <= 1:
        return arr

    meio = len(arr) // 2
    esquerda = merge_sort(arr[:meio], stats)
    direita = merge_sort(arr[meio:], stats)

    return _merge(esquerda, direita, stats)


def _merge(esquerda: List[int], direita: List[int], stats: EstatisticasOrdenacao) -> List[int]:
    resultado = []
    i = j = 0

    while i < len(esquerda) and j < len(direita):
        stats.comparacoes += 1
        if esquerda[i] <= direita[j]:
            resultado.append(esquerda[i])
            i += 1
        else:
            resultado.append(direita[j])
            j += 1
        stats.trocas += 1

    while i < len(esquerda):
        resultado.append(esquerda[i])
        i += 1
        stats.trocas += 1

    while j < len(direita):
        resultado.append(direita[j])
        j += 1
        stats.trocas += 1

    return resultado


def quick_sort(arr: List[int], stats: EstatisticasOrdenacao) -> List[int]:
    """Implementação do Quick Sort utilizando o primeiro elemento como pivô (cenário de pior caso se ordenado)."""
    if len(arr) <= 1:
        return arr

    pivo = arr[0]
    menores = []
    maiores = []

    for x in arr[1:]:
        stats.comparacoes += 1
        if x <= pivo:
            menores.append(x)
        else:
            maiores.append(x)
        stats.trocas += 1

    return quick_sort(menores, stats) + [pivo] + quick_sort(maiores, stats)


# Bloco de Testes obrigatório exigido pelo professor
if __name__ == "__main__":
    stats_merge = EstatisticasOrdenacao()
    stats_quick = EstatisticasOrdenacao()

    print("=== TESTES DO TEMA A (MERGE SORT vs QUICK SORT) ===")

    # 1. Caso Comum (Lista desordenada aleatória)
    caso_comum = [38, 27, 43, 3, 9, 82, 10]
    print(f"\n1. Caso Comum: {caso_comum}")
    print("Merge Sort:", merge_sort(caso_comum.copy(), stats_merge), f"| Comparações: {stats_merge.comparacoes} | Trocas/Atribuições: {stats_merge.trocas}")
    print("Quick Sort:", quick_sort(caso_comum.copy(), stats_quick), f"| Comparações: {stats_quick.comparacoes} | Trocas/Atribuições: {stats_quick.trocas}")

    # 2. Caso de Borda (Lista vazia ou com 1 elemento)
    stats_merge.reiniciar()
    stats_quick.reiniciar()
    caso_borda = [5]
    print(f"\n2. Caso de Borda (1 elemento): {caso_borda}")
    print("Merge Sort:", merge_sort(caso_borda.copy(), stats_merge))
    print("Quick Sort:", quick_sort(caso_borda.copy(), stats_quick))

    # 3. Pior Caso para o Quick Sort (Lista já ordenada com pivô fixo no início -> O(n^2))
    stats_merge.reiniciar()
    stats_quick.reiniciar()
    pior_caso = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    print(f"\n3. Pior Caso (Quick Sort O(n^2)): {pior_caso}")
    print("Merge Sort:", merge_sort(pior_caso.copy(), stats_merge), f"| Comparações: {stats_merge.comparacoes}")
    print("Quick Sort:", quick_sort(pior_caso.copy(), stats_quick), f"| Comparações: {stats_quick.comparacoes}")
