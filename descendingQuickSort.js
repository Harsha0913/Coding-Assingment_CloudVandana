function descendingQuickSort(arr) {
    quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, low, high) {
    if (low < high) {
        const partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] >= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Swap arr[i+1] and arr[high] (the pivot)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}

const arr = [5, 2, 8, 1, 9, 3];

console.log(`Actual Array:, ${arr}`);

descendingQuickSort(arr);

console.log("Sorted Array in Descending Order:", arr);
