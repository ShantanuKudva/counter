let count=0
//init count is 0

//select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")
//this gives a node list and not an array

btns.forEach(function (btn){
    //forEach assigns a function to all the node list items
    
    //we add the event listener to all 3 buttons

    btn.addEventListener('click', function(event){
        const styles = event.currentTarget.classList;
        
        //class list gives back the class assigned to the button
        if(styles.contains('decrease')){
            count--;
        }

        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('reset')){
            count=0;
        }
        value.textContent = count;
    })
})