const buttons = document.querySelectorAll("#buttonsContainer .slideButton")
buttons[0].mainDiv = document.querySelector(".contentDiv1")
buttons[1].mainDiv = document.querySelector(".contentDiv2")
buttons[2].mainDiv = document.querySelector(".contentDiv3")

let currentDiv = document.querySelector(".contentDiv1")



buttons.forEach( (button) => {
    button.addEventListener("click" , () => {
        // alert("hi")
        for(let i=0 ; i < buttons.length ;i++) {
            // if ( currentDiv.isSameNode( buttons[i].mainDiv) ) { continue;  }
            buttons[i].mainDiv.classList.remove("showingCD")

        }
        
        if (currentDiv.isSameNode(button.mainDiv)) { button.mainDiv.classList.add("showingCD")}
        setTimeout(() => {
            button.mainDiv.classList.add("showingCD")
        }, 250);
        
        currentDiv = button.mainDiv
        




    }) // End of addEventListener

    
} ) //end of forEach

    // THEMES
// #1 the slide
const themeSlider = document.querySelector("#themeDiv")
const themeSliderBtn = document.querySelector("#themeSlider")
themeSliderBtn.addEventListener("click" , moveThemeSlider )

function moveThemeSlider(){

    themeSlider.classList.toggle("hidden")
    document.querySelector("#themeDiv #themeSlider img").classList.toggle("hidden")
}

// #2 color change
const colors = [
    {
        mainColor : "rgb(111, 197, 250)" ,
        secondaryColor : "rgb(184, 228, 255)"
    },
    {
        mainColor :"mediumorchid",
        secondaryColor : "rgb(229, 177, 241)"
    },
    {
        mainColor : "red" ,
        secondaryColor : "rgb(238, 125, 105)"
    },
    {
        mainColor : "rgb(255, 217, 0)" ,
        secondaryColor : "rgb(255, 247, 142)"
    }

]
            // for every color
colors.forEach( (color) => {
    const clrBox = document.createElement("div")
    clrBox.mainColor = color.mainColor
    clrBox.secondaryColor = color.secondaryColor
    clrBox.style.backgroundColor = clrBox.mainColor

    clrBox.addEventListener("click" , () => { changeDemColors(clrBox.mainColor , clrBox.secondaryColor )  })






    themeSlider.appendChild(clrBox)
})

function changeDemColors(MC , SC){
const Primaries = document.querySelectorAll(".primary")
const Secondaries = document.querySelectorAll(".secondary")

Primaries.forEach( (item) => {
    item.style.backgroundColor = MC
} )

Secondaries.forEach( (item) => {
    item.style.backgroundColor = SC

} )




}