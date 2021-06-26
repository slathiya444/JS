// document.getElementById("count-el").innerText = 11
a = document.getElementById("count-el")
pre_data = document.getElementById("previous-data")
count = 0

function increment(){
    count += 1
    a.textContent = count
}
function save(){
    // console.log("data saved")
    // pre_data = document.getElementById("previous-data").innerText
    str = count + "-"
    pre_data.textContent += str
    document.getElementById("count-el").textContent = 0
    count = 0

}