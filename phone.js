// var myBudget = 4000000;


// var iphone = 85000;
// var samsung =125000;
// var oneplus = 75000;
// var iqoo = 40000;
// samsungofficial = false;
// if (myBudget > samsung) {
//     if (samsungofficial ==true) {
//         console.log('samsung best');
//     }
//     else if(myBudget > iphone) {
//         console.log('amio borolox');
//     }
//     else if(myBudget > oneplus){
//         console.log('moddobitto');
//     }
//     else if (myBudget >= iqoo) {
//         console.log('budget kom to ki hoise, iqoo best');
//     }
//     else{
//         console.log('amar nokia 1100 best');
//     }
// }



// var danish = 50;
// var khuda = true;
// var free = false;
// var danishPacket = true;
// var watercond = 'hot';

// if ((khuda== true && danishPacket == true)|| free==true ) {
//     if (watercond == 'hot') {
//         console.log('khamu nah ken');
//     }
// }
// var tableItem=['watch','paper', 'pen', 'mouse', 'keyboard']
// tableItem[2]='pencil';
// tableItem.push('pendrive');
// tableItem.push('cable')
// // tableItem.pop();
// console.log(tableItem);
// console.log(tableItem.indexOf('mouse'));





// var love = 0;
// while( love < 7){
//     console.log('love you')
//     love++;
//     console.log(love)
// }
// var hate=1;
// while(hate < 7){
//     console.log('hate you')
//     hate++;
//     console.log(hate)
// }

// var number = 1;
// while(number <= 500){
//     console.log(number)
//     number+=2;
// }
// number= 2;
// while(number<=500){
//     console.log(number)
//     number+=2;
// }
// for(var i = 1; i<=10; i++){
//     console.log(i)
// }
// var friends = ['raf', 'shanto', 'rimon', 'rumin', 'himon', 'sunny']
// friends.push('sumon');
// for( var i=0; i<friends.length; i++){
//     var item = friends[i]
//     console.log(item)
// }


// function writeOnPaper (){
//     console.log("hate kolom nau");
//     console.log("khata rakho table er upore");
//     console.log("lekha shuru koro");
//     console.log("hey lekha to shuru hoye gece");
// }
// writeOnPaper();
// var last7DaysMoneyBagStat = [100, 35, 54, 56,453,45,00]
// var thirdDay = last7DaysMoneyBagStat[2];
// console.log('third day money' + ' ' + thirdDay);
// for(var i = 0; i < last7DaysMoneyBagStat.length; i++){
//     console.log(last7DaysMoneyBagStat[i]);
//     console.log("money doesn't matter");
// }
// writeOnPaper();
// var i = 0;
// while(i < last7DaysMoneyBagStat.length ){
//     console.log(last7DaysMoneyBagStat[i]);
//     console.log("money is main");
//     i++;
// }
// writeOnPaper();


// var takaDice = 120;

// function bringPotato (money){
//     var singaraPrice = 5;
//     var singaraQuantity = money / singaraPrice;
//     return singaraQuantity; 
// }
// var totalSinagara= bringPotato(takaDice);
// console.log('ei nen vai, apnar taka diya' +' '+totalSinagara+'ta '+'singara dice');


// var firstNum = 120;
// var secNum = 10;
// function multypication(num1, num2){
//     var multipy = num1 * num2;
//     return multipy;
// }
// var multipy = multypication(firstNum, secNum);
// console.log('multipication', multipy);


// function devide (num1, num2){
//     var devide= num1 / num2;
//     return devide
// }
// var devided = devide(firstNum, secNum)
// console.log(devided);
 


// // // Object 
// var myComputer = {
//     proccesore : "r3 3200",
//     monitor : "vx 2276",
//     mouse : "bloody 7",
//     keyboard : "fantech k6",
//     storege : "256gb"
// }


// var proccesoreName = 'proccesore';
// myComputer.proccesore= "r5 3600";
// myComputer[proccesoreName]="r7 3700x";
// myComputer['proccesore'] = 'r9 5950x';
// console.log(myComputer);


// var phone= {
//     ram:'4gb',
//     rom:'128gb',
//     cam:'8mp',
//     battery:'4500mh',
//     display:'6.2"' 
// }

// phone.ram='6gb';
// var phoneRom = 'rom';
// phone[phoneRom]= '256gb';
// phone['cam']='200mp';

// console.log(phone)
// console.log(phone['display'])
// console.log(phone[phoneRom])

// var color = ['red', 'yellow', 'green'];

// if (color[0] == 'red'){
//     console.log('you can go now');
// }

// var trafficLight = 'yellow';

// if (trafficLight=='red'){
//     console.log("don't move,, stop here");
// }
// else if( trafficLight=='yellow'){
//     console.log("wait a while . the road is ready soon");
// }
// else{
//     console.log('you can go now');
// }


// var trafficLight = 'green';

// switch (trafficLight) {
//     case 'red':
//         console.log('hey stop here');
//         break
//     case 'yellow':
//         console.log('wait a while')
//         break
//     case 'green':
//         console.log('you can go now')
//         break   
//     default:
//         console.log('wait, dekhi ki hoy')
// }

// var trafficLight=['red','yellow','green']


// if (trafficLight[0]=='red') {
//     console.log('it is red');
// }
// else if(trafficLight[1]=='yellow'){
//     console.log('may be its blue');
// }
// else if(trafficLight[2]=='green'){
//     console.log('yap, its green');
// }
// var i = 0;

// while( i < trafficLight.length){
//     console.log(trafficLight[i])
//     i++;
// }


// var numbers= [5,4,5,4,454,14,1,51,4,454,44,45]
// for(var i =0; i<numbers.length; i++){
//     var number= numbers[i]
//     if(number>9){
//         break
//     }
//     console.log(number)

// }
// var i = 0;

// while(i<numbers.length){
//     number= numbers[i]
//     i++
//     if( number > 9 ){
//         continue
//     }
//     console.log(number)
// }

// var number=[44,57,57,54,5,54,74,27,]
// if(number.indexOf(44)==-1){
//     console.log('something wrong');
// }
// else{
//     console.log('well');
// }

// function devide(num1, num2){
//     var answer = num1 % num2;
//     return answer;
// }
// const result = devide(12, 2);
// console.log(result);
// function addNumber(number1, number2) {
//     return "Result is " + number1 + number2;
//    }
   
//    var result = addNumber(5, 4);
//    console.log(result)


// var number = 13;

// function multipication(number1){
//     for(var i = 1; i<=10; i++){
//         var multiNumber = number1 * i;
//         console.log(multiNumber)
//     }
// }
// var multipicationNumber = multipication(number);

// var input = 'FAHIM MONDOL';
// function lowercase(name){
//     var name = name;
//     var final = name.toLowerCase();
//     return final
// }

// var final = lowercase(input);
// console.log(final);

// var firstName = 'Fahim';
// var lastName = 'Mondol';


// function nameFix(first, last){
//     return first+' '+last;
// }

// var finalName = nameFix(firstName, lastName);
// console.log(finalName);

// var number = 77;


// function numberSquar(input){
//     var squar = input * input;
//     return squar;
// }
// var result = numberSquar(number);
// console.log(result);

// var numberInput = 45;

// if(numberInput<100 && numberInput>=90){
//     console.log('you got a+');
// }
// else if(numberInput<90 && numberInput>=80){
//     console.log('you got a');
// }
// else if(numberInput<80 && numberInput>=70){
//     console.log('you got b');
// }
// else if(numberInput<70 && numberInput>=60){
//     console.log('you got c');
// }
// else if(numberInput<60 && numberInput>=50){
//     console.log('you got d');
// }
// else{
//     console.log('you are fail');
// }



// function mileTOFeet(miles){
//     var km = miles * 1.60934;
//     var km = km.toFixed(2);
//     var km = parseFloat(km);
//     return km;
// }

// var km = mileTOFeet(14);
// console.log(km);

// function oddNumberCount(number){
//     if(number%2 != 0){
//         var odd = 'Your number is odd';
//         return odd;
//     }
//     var even = 'Your number is even';
//     return even;
// }

// let myNumber = 15445;
// myNumber = 12554;

// var result = oddNumberCount(myNumber);
// console.log(result);



// function leapYear(year){
//     if((year%4 ==0) && (year%100!=0)){
//         return 'yah it is a leap year'
//     }
//     else if(year%100==0){
//         return "it's not a leap year"
//     }
//     var remain = year%4;
//     remain = 4-remain;
//     return 'you have'+ ' ' + remain + ' '+ 'year to see a leap year';
// }

// var leapYearCounter = leapYear(2131);
// console.log(leapYearCounter);



// var number = 100;
// function factorial(number){
//     var factorial = 1;
//     for(var i = 1; i <= number; i++){
//         factorial = factorial*i;
//     }
//     return factorial;
// }

// var result = factorial(number);
// console.log(result);




// var number= 5;
// function factorial(number){
//     var factorial = 1;
//     for(var i =1; i<=number; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// var result = factorial(number);
// console.log(result);

// function factorial(number){
//     let factorial= 1;
//     let i = number;
//     while(i>=1){
//         factorial = factorial*i;
//         i--;
//     }
//     return factorial;
// }

// var result = factorial(6);
// console.log(result);



// var i = 1;
// while(i<=100){
//     console.log(i);
//     i++;
// }




// var number1 = 5;
// var number2 = 6;
// var number3 = 4;

// function numberSum(num1, num2, num3){
//     var total = num1 + num2 + num3;
//     return total;
// }

// const result = numberSum(number1, number2, number3);
// console.log(result);



// var i = 50;
// while(i<=80){
//     if(i%2!= 0){
//         console.log(i);
//     }
//     i++;
// }






let celc = 2;

function celcToFuren(celc){
    const formula=9/5;
    let furenheit= celc * formula;
    furenheit+=32;
    return furenheit;
}

const result=celcToFuren(celc);
console.log(result);


// let furenheit = 35.6;

// function furenheitToCelc(furenheit){
//     const formula = 5/9;
//     let celcias = furenheit - 32;
//     celcias = celcias * formula;
//     return celcias;
// }

// const result=furenheitToCelc(furenheit);
// console.log(result);



// let principle = 1500;
// let rate = 12;
// let time = 3;
// let text = 'total =';

// function simpleInterest(p,r,t){
//     var firstFormula = p*r*t;
//     firstFormula = firstFormula/100;
//     return firstFormula;
// }

// const result = simpleInterest(principle, rate, time);
// console.log(text,principle+result);