function clicker(a) {
    document.getElementById("screen").value += a
}
function eq() {
    var b = document.getElementById("screen")
    b.value = eval(b.value)
}
function reset() {
    document.getElementById("screen").value = ""
}