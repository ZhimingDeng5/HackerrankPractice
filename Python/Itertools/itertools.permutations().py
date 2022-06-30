from itertools import permutations
input_str=input()
next_str=input_str.split(" ",1)
lstr=list(next_str[0])
lstr.sort()
for i in permutations(lstr,int(next_str[1])):
    temp_str=""
    for s in i:
        temp_str+=s
    print(temp_str)