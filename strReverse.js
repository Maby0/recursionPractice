function revStr(str) {
    if (str === "") return ""
    return revStr(str.substring(1)) + str.charAt(0)
}

console.log(revStr("Hello"))