""" Node is defined as
class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None
"""
previous=None
def check_binary_search_tree_(root):
    global previous
    if root is None:
        return True
    if not check_binary_search_tree_(root.right):
        return False
    if previous and root.data>=previous.data:
        return False
    previous=root
    return check_binary_search_tree_(root.left)