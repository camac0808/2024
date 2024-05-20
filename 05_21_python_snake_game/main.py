# 스네이크 게임 만드는 순서
# 0. 파이게임 초기화 및 라이브러리 import #TODO: Done
from turtle import Screen, Turtle
import time
import random

# 1. 화면 설정 #TODO: Done
screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("Snake Game")

# 2. 스네이크 설정
snake=[]
for i in range(3):
    new_segment = Turtle("square") # 거북이 모양
    new_segment.color("white") # 색상
    new_segment.penup() # 선, 흔적을 그리지 않음
    new_segment.goto(-20*i, 0) # 특정 위치 이동
    snake.append(new_segment)

# 3. 먹이 설정
# 4. 스네이크가 움직이는 로직을 구현합니다.
# 5. 스네이크가 먹이를 먹는 로직을 구현합니다.
# 6. 게임 오버 조건을 구현합니다.
# 7. 게임 점수를 표시하는 로직을 구현합니다.

screen.mainloop() # 화면이 꺼지지 않도록 설정


