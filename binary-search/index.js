//Binary search in js
function binarySearch(sortedList, elem) {
	let low = 0;
	let high = sortedList.length - 1;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (sortedList[mid] == elem) {
			return mid;
		} else if (sortedList[mid] < elem) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return null;
}
