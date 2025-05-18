def most_common(nums):
    count = {}

    for num in nums:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1

    max_num = None
    max_count = 0
    for num, freq in count.items():
        if freq > max_count:
            max_num = num
            max_count = freq

    return max_num

print(most_common([1, 3, 1, 3, 2, 1, 4, 6]))