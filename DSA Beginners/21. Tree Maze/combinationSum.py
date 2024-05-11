
            
    
def combinationSum(candidates, target):
    
    res = []
    def helper(target, current_path, s):
        
        if target == 0: 
            res.append(list(current_path))
            return 
        
        elif target < 0:
            return 
        
        for i in range(s, len(candidates)):
            
            
            current_path.append(candidates[i])
            helper(target - candidates[i], current_path, i)
            current_path.pop()
    
    helper(target, [], 0)
    return res
    
# test cases
candidates = [2,3,6,7]
target = 7
print(combinationSum(candidates, target)) # [[2,2,3],[7]]