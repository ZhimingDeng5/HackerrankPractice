#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'equalStacks' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY h1
#  2. INTEGER_ARRAY h2
#  3. INTEGER_ARRAY h3
#

def equalStacks(h1, h2, h3):
    stack1,stack2,stack3=h1,h2,h3
    stack1.reverse(),stack2.reverse(),stack3.reverse()
    s1,s2,s3=sum(stack1),sum(stack2),sum(stack3)
    while not (s1==s2 and s2==s3):
        if s1==max(s1,s2,s3):
            s1-=stack1.pop() 
        elif s2==max(s1,s2,s3):
            s2-=stack2.pop()
        else:
            s3-=stack3.pop()
    return s1        
    # Write your code here

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n1 = int(first_multiple_input[0])

    n2 = int(first_multiple_input[1])

    n3 = int(first_multiple_input[2])

    h1 = list(map(int, input().rstrip().split()))

    h2 = list(map(int, input().rstrip().split()))

    h3 = list(map(int, input().rstrip().split()))

    result = equalStacks(h1, h2, h3)

    fptr.write(str(result) + '\n')

    fptr.close()
