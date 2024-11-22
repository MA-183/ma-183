from turtle import *

def arm():
    alpha = 28.995
    beta = 75.505
    right(beta)
    forward(80)
    left(180-alpha)
    forward(80)
    right(beta)

def stjerne():
    for i in range(6):
        forward(40)
        left(60)
    for i in range(6):
        arm()
        left(60)

stjerne()
