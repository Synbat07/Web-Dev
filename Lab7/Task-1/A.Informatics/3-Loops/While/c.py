a = int(input())
i = 0

b = 0

while i <= a:
    b = 2**i
    if b>a:
        break
    print(b, end=" ")
    i+=1