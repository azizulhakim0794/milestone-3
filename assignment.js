      //feetToMile
 
 function feetToMile (feet) {

     var mile = feet/5280;
     return mile;
 }
 var result = feetToMile(3453);
 console.log(result);

         //  woodCalculator!!

 function woodCalculator(chair, table, bed) {
     var chairCount = chair * 1; 
     var tableCount = table * 3; 
     var bedCount = bed * 5; 

     var totalWood = chairCount + tableCount + bedCount;

     return totalWood;
 }

 var result = woodCalculator(4, 5, 6);
 console.log(result);


      //brickcalculator

function brickcalculator() {
   
   var firstTop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   var secondTop = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
   var thirdTop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
}




      //tinyFrind

 function tinyFrind(word) {
    var max = word[0].length;
    word.map(mini => max = Math.max(max, mini.length));
    result = word.filter(mini => mini.length == max);
    return result;
  }

  var result = tinyFrind(['Akash', 'Abdulallah', 'Masum','Nur','Shahadat'])
 
  console.log(result)
 

