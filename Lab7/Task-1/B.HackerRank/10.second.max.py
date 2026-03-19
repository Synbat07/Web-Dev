n = int(input())
arr = list(map(int, input().split()))

arr = list(set(arr))   # убираем повторы
arr.sort()             # сортируем

print(arr[-2])         # второй максимум