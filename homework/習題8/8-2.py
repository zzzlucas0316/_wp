def average(nums):
    if not nums:
        return None

    total = sum(nums)
    avg = total / len(nums)
    return round(avg, 1)

numbers = [1, 2, 3]
print(average(numbers))