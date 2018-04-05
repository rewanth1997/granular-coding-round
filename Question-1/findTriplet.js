// Finds the triplets whose sum is equal to the given value.
module.exports = function findTriplet(arr, sum)
{
    const size = arr.length;
    let left, right;

    // Sorts the integer array.
    arr.sort((num1, num2) => {
        return num1 - num2;
    });

    for(let i = 0; i < size-2; i++) {
        left = i + 1;
        right = size - 1;
        while(left < right) {
            let tempSum = arr[i] + arr[left] + arr[right];
            if(tempSum == sum) {
                return [arr[i], arr[left], arr[right]];
            }
            else if(tempSum < sum) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return false;
}
