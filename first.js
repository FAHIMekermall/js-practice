var phones = ["xiomy", "realme", "oneplus", "samsung", "sony"]
phones[0] = 10000;
phones[1] = 15000;
phones[2] = 40000;
phones[3] = 100000;
phones[4] = 150000;
var myBudget = 20000;
phones.pop()
phones.push('itel');
console.log(phones);
if (phones[0]<= myBudget  && phones[1]>myBudget) {
    console.log('may be xiomy best for me');
}
if (phones[1]< myBudget  && phones[2]>myBudget) {
    console.log('may be realme best for me');
}
if (phones[2]< myBudget  && phones[3]>myBudget) {
    console.log('may be oneplus best for me');
}
if (phones[3]< myBudget && phones[4]>myBudget) {
    console.log('may be samsung best for me');
}
if (phones[4]< myBudget ) {
    console.log('may be sony best for me');
}