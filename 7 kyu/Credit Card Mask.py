def maskify(cc):
    if len(cc)<4:return cc
    else: result="#"*(len(cc)-4)+cc[len(cc)-4:]
    return result