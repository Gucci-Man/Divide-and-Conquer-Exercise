function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid
        }

        // if left half is sorted
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                // Target lies within the sorted left half
                right = mid - 1;
            } else {
                // Target is in the rotated right half
                left = mid + 1;
            }
        }
        // If right side is sorted
        else {
            if (arr[mid] < target && target <= arr[right]) {
                // Target lies within the sorted right half
                left = mid + 1;
            } else {
                // Target is in the rotated left half
                right = mid - 1;
            }
        }
    }

    return -1;
}

module.exports = findRotatedIndex