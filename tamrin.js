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