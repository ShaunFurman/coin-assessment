
// console.log(Math.round(0.9));
// // expected output: 1

// console.log(Math.round(5), Math.round(5.5), Math.round(5.05));
// // expected output: 6 6 5

// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// // expected output: -5 -5 -6




let coin = {state: 0,
            flip: function(){
           this.state = Math.floor(Math.random() * 2) 

       

         return this.state
          },
      /* 1. Randomly set your coin object's "state" property to be either
         0 or 1: use "this.state" to access the "state" property on this object.*/
       
    toString: function() {
        if (this.state === 0){
            return "Heads"
        }
        else {
            return "Tails"
        }
    },
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    
        toHTML: function() {
        let image = document.createElement('img');
        if(this.state === 0){
            image.src ='head.jpg'
        }
        else {
            image.src ='tail.jpg' 
        }
        return image;
    }
};

/* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
function display20Flips() {
    for(i = 0; i < 20; i ++) {
       coin.flip()
       let word = document.createElement('div')
       word.append(coin.toString())
       document.body.append(word)
    }
}
    display20Flips()

function display20Images(){
    for(i = 0; i < 20; i ++) {
        coin.flip()
        document.body.append(coin.toHTML())
    }
}
display20Images()

