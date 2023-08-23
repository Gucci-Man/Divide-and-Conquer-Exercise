function countZeroes(arr) {
    let count = 0;

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === 1) {
            // look at right half
            leftIdx = middleIdx + 1;
        } else if (middleVal === 0) {
            if (middleIdx == 0 || arr[middleIdx - 1] == 1) {
                return arr.length - middleIdx
            }
            rightIdx = middleIdx - 1; // move to the left side
        }
    }
    return 0
}

module.exports = countZeroes