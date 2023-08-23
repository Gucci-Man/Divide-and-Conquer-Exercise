function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] <= arr[right]) {
            // sub-array is already sorted, so it hasn't been rotated
            return left;
        }

        let mid = Math.floor((left + right) / 2);
        let next = (mid + 1) % arr.length; // calculate the next element's index

        if (arr[mid] <= arr[next] && arr[mid] <= arr[mid - 1]) {
            // Minimum element is found at index mid
            return mid;
        } else if (arr[mid] <= arr[right]) {
            // Minimum element is in the left sub-array
            right = mid - 1;
        } else if (arr[mid] >= arr[left]) {
            // Minimum element is in the right sub-array
            left = mid + 1;
        }
    }
    // Not rotated or invalid input
    return -1
}

module.exports = findRotationCount