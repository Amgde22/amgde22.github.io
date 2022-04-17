const buttons = document.querySelectorAll("#buttonsContainer .slideButton")
buttons[0].mainDiv = document.querySelector(".contentDiv1")
buttons[1].mainDiv = document.querySelector(".contentDiv2")
buttons[2].mainDiv = document.querySelector(".contentDiv3")

let currentDiv = document.querySelector(".contentDiv1")
const selectButtons = document.querySelectorAll(".slideButton")

selectButtons.forEach( button => { 
    button.addEventListener("click" , ()  => {
            for( let j = 0 ; j < selectButtons.length; j++){
                selectButtons[j].classList.remove("selected")
            }
        
        button.classList.add("selected")
        
    })



  
 } )

buttons.forEach( (button) => {

    button.addEventListener("click" , () => {
        
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
    } ,
    {
        mainColor : "linear-gradient(to right, #3494e6, #ec6ead)" ,
        secondaryColor : "rgba(255 ,255,255,0.6)"
    },
    {
        mainColor :"linear-gradient(to right, #00b4db, #0083b0)",
        secondaryColor : "rgba(255 ,255,255,0.6)"
    }

]
            // for every color
colors.forEach( (color) => {
    const clrBox = document.createElement("div")
    clrBox.mainColor = color.mainColor
    clrBox.secondaryColor = color.secondaryColor
    clrBox.style.background = clrBox.mainColor

    clrBox.addEventListener("click" , () => { changeDemColors(clrBox.mainColor , clrBox.secondaryColor )  })






    themeSlider.appendChild(clrBox)
})

function changeDemColors(MC , SC){
const Primaries = document.querySelectorAll(".primary")
const Secondaries = document.querySelectorAll(".secondary")

Primaries.forEach( (item) => {
    item.style.background = MC
} )

Secondaries.forEach( (item) => {
    item.style.background = SC

} )
if( MC === "linear-gradient(to right, #3494e6, #ec6ead)" || MC === "linear-gradient(to right, #00b4db, #0083b0)"){
document.querySelector("#section").style.background = MC
}
}

        /*  ANIME GIRL CHANGE  */
const awesome = document.querySelector("#awesome")
const gallerie = [{
            src : "./images/ameri.png" ,
            border : "orange" ,
            text : "Anime Girls Are Awesome "
        }
        ,{
            src : "./images/ice-cream.jpg" , 
            border : "hotpink" ,
            text : "Ice Creem Is Awesome"
        },
        {
            src : "./images/doggo.png" ,
            border : "wheat" ,
            text : "Animals Are Awesome"
        }
        // ,
        // {
        //     src : "./images" ,
        //     border : "" ,
        //     text : ""
        // },
        // {
        //     src : "./images" ,
        //     border : "" ,
        //     text : ""
        // },
        ]


const picture = document.querySelector("#pic")
let iii = 1 ;
picture.addEventListener("animationiteration" , () => {

    awesome.style.backgroundColor = gallerie[iii].border
    awesome.innerText = gallerie[iii].text

    picture.setAttribute("src" , gallerie[iii].src)
    picture.style.borderColor = gallerie[iii].border


    
iii++
if( iii >= gallerie.length  ){iii = 0}
})

