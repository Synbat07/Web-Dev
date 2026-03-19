from models import Flower, Rose, Lily, Lavender

f1 = Flower("Flower", "yellow", 500, "light")
r1 = Rose("Rose", "red", 1000, "sweet")
l1 = Lily("Lily", "white", 1200, "fresh")
lv1 = Lavender("Lavender", "purple", 900, "calm")

flowers = [f1, r1, l1, lv1]

for f in flowers:
    print(f, " ")
    print(f.get_info(), " ")
    print(f.bloom(), " ")
    print()

print(r1.give())
print(l1.decorate())
print(lv1.relax())