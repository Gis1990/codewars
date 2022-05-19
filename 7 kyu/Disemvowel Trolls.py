def disemvowel(string_):
    result = []
    list_of_vowels = [
        "a",
        "e",
        "i",
        "o",
        "u",
    ]
    for letters in string_:
        if letters.lower() not in list_of_vowels:
           result.append(letters)

    return "".join(result)