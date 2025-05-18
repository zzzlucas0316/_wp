def dict_to_string(d):
    pairs = []
    for key, value in d.items():
        pairs.append(f"{key}:{value}")
    return ", ".join(pairs)

d = {'a': 1, 'b': 2, 'c':3}
print(dict_to_string(d))