let imagearray = [
    {
        id: "1",
        img: "./images/domino-164_6wVEHfI-unsplash.jpg"
    },
    {
        id: "2",
        img: "./images/Dress-Shirt-Download-PNG.png"
    },
    {
        id: "3",
        img: "./images/Dress-Shirt-PNG.png"
    }
]

let imagebox = document.querySelector(".imagebox")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let img = document.getElementById("img")
let currentmenu = 0

let thumbnail = document.getElementsByClassName("thumbnail")

function Render(){
   
 let imgarray = imagearray[currentmenu]
img.id = imgarray.id
img.src = imgarray.img
for(i=0; i<thumbnail.length; i++){   

    thumbnail[i].className = thumbnail[i].className.replace(" active", "");
   
}
thumbnail[currentmenu].className += " active";
}
    
Render()
    
     prev.addEventListener('click', () => {
        currentmenu--
        imagebox.classList.remove("fade")
        if(currentmenu < 0) {
            currentmenu = imagearray.length - 1
        }
    Render(currentmenu)
         })
        function Next() {
            
        
            currentmenu++
            imagebox.classList.add("fade")
            if(currentmenu > imagearray.length - 1){
                currentmenu = 0
            }
            Render(currentmenu)
           
             }

             for(i=0; i<thumbnail.length; i++){
                let index = thumbnail[i].id
                thumbnail[i].addEventListener('click', ()=>{
                currentmenu = index
                
                Render(currentmenu)
                
                })
             }

            setInterval(Next,5000)