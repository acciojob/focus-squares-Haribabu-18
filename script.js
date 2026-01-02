//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        squares.forEach((otherSquare) => {
            if(square !== otherSquare){
                otherSquare.style.backgroundColor = "#6F4E37";
            }
        })
    })
})

squares.forEach((square) => {
    square.addEventListener("mouseleave", () => {
        squares.forEach((otherSquare) => {
            if(square !== otherSquare){
                otherSquare.style.backgroundColor = "#E6E6FA";
            }
        })
    })
})