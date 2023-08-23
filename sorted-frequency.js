function sortedFrequency(arr, target) {
    let occurances = -1;

    function leftMost(arr, target) {
        // search for leftMost index of target
        let left = 0;
        let right = arr.length - 1;
        result = -1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            let middleVal = arr[middle];

            if (middleVal < target) {
                // look at right half
                left = middle + 1;
            } else if (middleVal > target) {
                // look at left half
                right = middle - 1;
            } else if (middleVal === target) {
                // search on left side for earlier result
                result = middle;
                right = middle - 1;
            }
        }
        return result;
    }

    function rightMost(arr, target) {
        // Search for rightMost index of target
        let left = 0;
        let right = arr.length - 1;
        result = -1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            let middleVal = arr[middle];

            if (middleVal < target) {
                // look at right half
                left = middle + 1;
            } else if (middleVal > target) {
                // look at left half
                right = middle - 1;
            } else if (middleVal === target) {
                // search on right side for earlier result
                result = middle;
                left = middle + 1;
            }
        }
        return result;
    }

    left_target = leftMost(arr, target);
    right_target = rightMost(arr, target);

    if (left_target === -1 || right_target === -1) {
        return -1
    } else {
        occurances = right_target - left_target + 1;
        return occurances;
    }
}

module.exports = sortedFrequency