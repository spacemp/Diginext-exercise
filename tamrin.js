// Q1
const functionName = (str, num) => {
    let lengthStr = str.length
    let longStr = Math.ceil(num / lengthStr)
    let fakeStr = str.repeat(longStr)
    let mainStr = fakeStr.slice(0, num)
    console.log(mainStr)
    console.log((mainStr.match(new RegExp("a", "g")) || []).length);

}
functionName("aba", 10);

// Q2**********************
function sortAB(str) {
    const charA = "A"
    const charB = "B"
    let letterA = 0;
    let letterB = 0
    const length = str.length

    for (let i = 0; i < length; i++) {
        if (str.charAt(i) == charA) {
            letterA += 1
        } else if (str.charAt(i) == charB) {
            letterB += 1
        }

        if (letterA == 0) {
            letterA += 1
        }
        if (letterB == 0) {
            letterB += 1
        }
        result = letterA - letterB
    }
    console.log(Math.abs(result))
}
sortAB("AAA")

// Q3 ***********************
function swap(arr) {
    let length = arr.length
    let minSwap = 0
    for (i = 0; i < length; i++) {
        if (arr[i] != i + 1) {
            let andisArr = arr[i]
            arr[arr.indexOf(i + 1)] = andisArr
            arr[i] = i + 1
            minSwap += 1
        }
    }
    console.log(minSwap)
}
swap([5, 4, 3, 1, 2])
