#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'largestRectangle' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts INTEGER_ARRAY h as parameter.
#

def largestRectangle(h):
    list_s=[]
    index=0
    max_r=0
    while index<len(h):
        if not list_s or h[index]>h[list_s[-1]]:
             list_s.append(index)
             index+=1
        else:
             h1=list_s.pop()
             start=list_s[-1] if list_s else -1
             max_r=max(max_r,h[h1]*(index-start-1))
    while list_s:
        h1=list_s.pop()
        start=list_s[-1] if list_s else -1
        max_r=max(max_r,h[h1]*(index-start-1))
    # Write your code here
    return max_r
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    h = list(map(int, input().rstrip().split()))

    result = largestRectangle(h)

    fptr.write(str(result) + '\n')

    fptr.close()