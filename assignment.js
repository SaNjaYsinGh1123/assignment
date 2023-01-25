// function bracket_match(bracket_string){
//     let last = bracket_string.length-1;
//     while(true){
//         if(bracket_string[i]==bracket_string[last])
//         {
//             i++;
//             last--;
//         }

//     }
// }

function can_reach_end(nums){
    var i=1;
    while(i < nums.length){
        if(nums[i] <= (2*nums[i-1])){
            i++;
        }
        else{
            return 0;

                }
            
    }

    return 1;
}

//you can put any [array] in place of [5,0,0,0]

if(can_reach_end([5,0,0,0]) == 1){
 console.log('true')
}
else{
    console.log('false');
}


function nearest_power_of_two(number){
    
    let i = 0;
    while(true){
        if( Math.pow(2,i) == number){
          return Math.pow(2,i);
        }
        else if(Math.pow(2,i+1) > number){
           return Math.pow(2,i);    
        }
        else {
            i++;
        }
    }
}

// you can enter any positive number in place of 100
console.log(nearest_power_of_two(100));