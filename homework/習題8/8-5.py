def grade(score):
    if 90 <= score <= 100:
        return 'A'
    elif 80 <= score <= 89:
        return 'B'
    elif 70 <= score <= 79:
        return 'C'
    elif 60 <= score <= 69:
        return 'D'
    elif 0 <= score <= 59:
        return 'F'
    else:
        return 'Invalid score'
    
print(grade(85))
print(grade(185))
print(grade(65))
print(grade(5))
print(grade(0))
print(grade(100))