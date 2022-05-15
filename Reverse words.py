def reverse_words(text):
    return' '.join([words[::-1] for words in text.split(' ')])