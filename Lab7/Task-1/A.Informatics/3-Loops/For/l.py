a = input()
b = a[::-1]

sum = 0
power = 0

for i in b:
    sum += int(i) * (2**power)
    power += 1
print(sum)
