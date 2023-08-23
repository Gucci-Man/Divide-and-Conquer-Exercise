function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1; // Default value if floor doesn't exist

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            // Exact match, so it's the floor
            return arr[mid];
        } else if (arr[mid] < x) {
            // Update the floor and move to the right sub-array
            floor = arr[mid];
            left = mid + 1;
        } else {
            // Move to the left sub-array
            right = mid - 1;
        }
    }

    return floor;
}
module.exports = findFloor