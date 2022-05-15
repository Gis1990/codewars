def move_zeros(array):
    result = []
    n = 0
    for i in array:
        if i == 0:
            n += 1
        else:
            result.append(i)
    for i in range(n):
        result.append(0)
    return result