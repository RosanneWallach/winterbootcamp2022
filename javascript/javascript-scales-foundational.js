<<<<<<< HEAD
/**
 * @param {number} length - the length of the square
 * @param {number} width - the width of the square
 * @return {number} the area of the square
**/
function find_area_square(length, width){
    let area = length * width;
    return area;
    }
    // let length = 37;
    // let width = 29;
    console.log(find_area_square)
    
    
    /**
     * @param {Array.<number>} numbers - an array of numbers
     * @return {number} the sum of all the numbers
    **/
    function sum_of_numbers(numbers){
        let sum = 0
        for (let i = 0; i < numbers.length; i++){
            sum += numbers[i];
        }
        return sum;
    }
    
    
    
    
    /**
     * @param {number} a - a number
     * @param {number} b - a number
     * @return {number} the smaller of the number
    **/
    function find_smaller_number(a, b){
        if (a < b){
            return a
    } else{
        return b;
    }
    
    }
    
    
    /**
     * @param {Array.<number>} numbers - an array of numbers
     * @return {number} the smallest number in the array
    **/
    
    function find_smallest_number(numbers){
        let smallest = numbers[0]
        for (let i = 0; i < numbers.length; i++){
            if (smallest> numbers[i]){
                smallest = numbers[i]
            }
        }
        return smallest;
    
    }
    
    
    
    /**
     * @param {string} word - a random word
     * @param {number} length - the length of the abbreviation
     * @return {string} the first {length} number of letters of the word
    **/
    
    function abbreviate(word, length){
        let abrvi ="";
    for (let i = 0; i <length; i ++){   
        abrvi += word[i] 
    }
return abrvi;
}
    
    
    
    
    /**
     * @param {string} first_name - a first name
     * @param {string} last_name - a last name
     * @return {string} the full name, with last name first, separated by a comma
    **/
    
    function get_full_name(first_name, last_name){
        function get_full_name(first_name, last_name){
            return last_name+ "," + first_name;
            }
            
    
    }
    
    /**
     * ----------------
       ----------------
       DON'T CHANGE ANYTHING BELOW THIS LINE
       ----------------
       ----------------
     *
     **/
    
    const commands = [
        'find_area_square(37, 29)',
        'sum_of_numbers([64, 34, 57, 49, 87, 9, 14])',
        'find_smaller_number(41, -13)',
        'find_smallest_number([30, 22, 63, 29, 4, 96])',
        'abbreviate("Medgar", 3)',
        'get_full_name("James", "Bond")'
    ];
    
    for(const command of commands){
        console.log(`${command} = ${eval(command)}`);
=======
/**
 * @param {number} length - the length of the square
 * @param {number} width - the width of the square
 * @return {number} the area of the square
**/
function find_area_square(length, width){
    let area = length * width;
    return area;
    }
    let length = 37;
    let width = 29;
    
    
    /**
     * @param {Array.<number>} numbers - an array of numbers
     * @return {number} the sum of all the numbers
    **/
    function sum_of_numbers(numbers){
    var arr = [64, 34, 57, 49, 87, 9, 14]
    var sum = 0;
    for (let i = 0; i < arr.length; i ++){
        sum += arr [i];
    
    }
    return sum_of_numbers;
    }
    console.log(sum_of_numbers(numbers));
    
    
    /**
     * @param {number} a - a number
     * @param {number} b - a number
     * @return {number} the smaller of the number
    **/
    function find_smaller_number(a, b){
        let array = [41, -13];
        let min = array[0];
            for (let i = 1; i <array.length; i++) {
                if (min < array[i]) {
                    min = array[i];
        }
        
        console.log(average_num(array));
        
    }
    
    
    /**
     * @param {Array.<number>} numbers - an array of numbers
     * @return {number} the smallest number in the array
    **/
    
    function find_smallest_number(numbers){
    
    }
    
    
    
    /**
     * @param {string} word - a random word
     * @param {number} length - the length of the abbreviation
     * @return {string} the first {length} number of letters of the word
    **/
    
    function abbreviate(word, length){
    
    }
    
    
    /**
     * @param {string} first_name - a first name
     * @param {string} last_name - a last name
     * @return {string} the full name, with last name first, separated by a comma
    **/
    
    function get_full_name(first_name, last_name){
    let first_name: "Rosanne",
    let last_name: "Wallach",
    return name;
    
    }
    
    /**
     * ----------------
       ----------------
       DON'T CHANGE ANYTHING BELOW THIS LINE
       ----------------
       ----------------
     *
     **/
    
    const commands = [
        'find_area_square(37, 29)',
        'sum_of_numbers([64, 34, 57, 49, 87, 9, 14])',
        'find_smaller_number(41, -13)',
        'find_smallest_number([30, 22, 63, 29, 4, 96])',
        'abbreviate("Medgar", 3)',
        'get_full_name("James", "Bond")'
    ];
    
    for(const command of commands){
        console.log(`${command} = ${eval(command)}`);
>>>>>>> 0dab36397a22d1bea95d785ed4cc58baf9941720
    }