def spin_words(sentence):
    return ' '.join(words[::-1] if len(words)>=5 else words for words in sentence.split())