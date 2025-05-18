def find_max(numbers):
    if not numbers:
        return None  # 如果陣列為空，回傳 None

    max_value = numbers[0]  # 假設第一個值為最大值
    for num in numbers:
        if num > max_value:
            max_value = num
    return max_value

nums = [3, 8, 2, 7, 4, 9]
print(find_max(nums))