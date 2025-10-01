// Function to reverse an array

// In-place Two-Pointer Swap (Optimal for performance and memory)
function reverseArrayInPlace(arr){
    // validation
    if(!Array.isArray(arr)){
        throw new Error('Input must be an array');
    }

    let left = 0, right = arr.length - 1;
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

let arr1 = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arr1)); // Output: [5, 4, 3, 2, 1]

// ....

// Out-of-place Reversal (Immutability)
function reverseArray(arr) {
    // validation
    if(!Array.isArray(arr)){
        throw new Error('Input must be an array');
    }
    const result = [];
    for(let i = arr.length - 1; i >=0; i--){
        result.push(arr[i])
    }
    return result;
}

let arr2 = [5, 4, 3, 2, 1];
console.log(reverseArray(arr2)); // Output: [5, 4, 3, 2, 1]

// ....

