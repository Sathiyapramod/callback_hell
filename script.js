// Do not use Named functions 
// DO not use Set interval functions 
// Do not use recursion
// Do not use IIFE & named functions 
// Do not use Looping
// Use Callback hell to deploy the timer 
// file storage under script.js



// declaring a dummy variable 
let n = 10;
// Used set timeout function 
setTimeout(()=>{
    // Adding content to the HTML element 
    timer.innerHTML = n--;  // n = 10
    setTimeout(()=>{
        timer.innerHTML = n--; //n = 9
        setTimeout(()=>{
            timer.innerHTML = n--; // n = 8
            setTimeout(()=>{
                timer.innerHTML = n--; // n = 7
                setTimeout(()=>{
                    timer.innerHTML = n--; // n = 6
                    setTimeout(()=>{
                        timer.innerHTML = n--; // n = 5
                        setTimeout(()=>{
                            timer.innerHTML = n--; // n = 4
                            setTimeout(()=>{
                                timer.innerHTML = n--; // n = 3
                                setTimeout(()=>{
                                    timer.innerHTML = n--; // n = 2
                                    setTimeout(()=>{
                                        timer.innerHTML = n--; // n = 1
                                        setTimeout(()=>{
                                            timer.innerHTML = "";
                                            timer.style.visibility = "hidden";
                                            banner.style.visibility = "visible";
                                            banner.innerHTML = "Happy Independence Day !!!"  // final message is declared here 
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
