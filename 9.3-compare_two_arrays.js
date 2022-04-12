const food = ["Noodle", "Pasta", "Ice-cream", "Meat", 
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", 
"Hamburgers"];


function compareArr(arr1, arr2) {
    let arr3=[];
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        for (let index2 = 0; index2 < arr2.length; index2++) {
            const element2 = arr2[index2];
            if(element===element2){
                arr3.push(element2);
                break;
            }
        }
    }
    if(arr3.length===0){
        return false;
    }
    else{
        return arr3;
    }
}

console.log(compareArr(food, food1));