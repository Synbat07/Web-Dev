class Flower:
    def __init__(self, name, color, price, smell):
        self.name = name
        self.color = color
        self.price = price
        self.smell = smell

    def bloom(self):
        return "Flower is blooming"

    def get_info(self):
        return self.name + " " + self.color + " " + str(self.price) + " " + self.smell

    def __str__(self):
        return self.name + " " + self.color


class Rose(Flower):
    def __init__(self, name, color, price, smell):
        super().__init__(name, color, price, smell)

    def bloom(self):
        return "Rose is blooming"

    def give(self):
        return "Rose is a good gift"


class Lily(Flower):
    def __init__(self, name, color, price, smell):
        super().__init__(name, color, price, smell)

    def bloom(self):
        return "Lily is blooming"

    def decorate(self):
        return "Lily is for decoration"


class Lavender(Flower):
    def __init__(self, name, color, price, smell):
        super().__init__(name, color, price, smell)

    def bloom(self):
        return "Lavender is blooming"

    def relax(self):
        return "Lavender helps to relax"