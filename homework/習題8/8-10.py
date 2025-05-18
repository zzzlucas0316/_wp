def summary(data):
    for student in data:
        name = student['name']
        scores = student['scores']
        total = sum(scores)
        average = round(total / len(scores), 1)
        print(f"{name} - 總分: {total}, 平均: {average}")

students = [
    {'name': 'Alice', 'scores': [90, 80, 70]},
    {'name': 'Bob', 'scores': [100, 85, 95]},
    {'name': 'Steve', 'scores': [100, 100, 100]},
    {'name': 'Noob', 'scores': [10, 5, 15]}
]

summary(students)