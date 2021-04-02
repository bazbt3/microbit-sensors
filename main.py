def hdg():
    basic.show_number(input.compass_heading())

def on_button_pressed_a():
    basic.show_string("" + (text_list[y]))
input.on_button_pressed(Button.A, on_button_pressed_a)

def temp():
    basic.show_number(input.temperature())

def on_button_pressed_ab():
    basic.clear_screen()
    if y == 0:
        temp()
    elif y == 1:
        hdg()
    elif y == 2:
        light2()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global y
    y += 1
    if y == x - 0:
        y = 0
    basic.show_string("" + (text_list[y]))
input.on_button_pressed(Button.B, on_button_pressed_b)

def light2():
    basic.show_number(input.light_level())
y = 0
x = 0
text_list: List[str] = []
z = 0
text_list = ["Temp", "Hdg", "Light"]
x = len(text_list)
y = 0