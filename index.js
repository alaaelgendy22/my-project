let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeS = 0
let guestS = 0

function increment_one(){
    homeS += 1
    homeScore.textContent = homeS
    
}
 
function increment_two(){
    homeS += 2
    homeScore.textContent = homeS
     
}

 function increment_three(){
    homeS += 3
    homeScore.textContent = homeS 
    
}
 
function g_increment_one(){
    guestS += 1
    guestScore.textContent = guestS 
}
 
function g_increment_two(){
    guestS += 2
    guestScore.textContent = guestS 
}

 function g_increment_three(){
    guestS += 3
    guestScore.textContent = guestS 
}