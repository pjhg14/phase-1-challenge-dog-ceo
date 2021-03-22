console.log('%c HI', 'color: firebrick')

//Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedURL = 'https://dog.ceo/api/breeds/list/all' 
const controlList = []

document.addEventListener("DOMContentLoaded", () => {
    let imgContainer = document.querySelector("#dog-image-container")
    let breedList = document.querySelector("ul#dog-breeds")
    let selector = document.querySelector("select#breed-dropdown")

    

    fetch(imgUrl)
        .then(promise => promise.json())
        .then(dogs => {

            dogs.message.forEach(element => {
                //For each elem add img(element) to the DOM under "div"
                let img = document.createElement("img")
                img.src = element

                imgContainer.append(img)
            });
        })


    //Challenge 2
    fetch(breedURL)
        .then(promise => promise.json())
        .then(dogs => {
            
            let keys = Object.keys(dogs.message) 
            keys.forEach(function(key) {    //Iterate through the breed objects and add them to the control list, display afterward
                dogs.message[key].forEach((breed) => {
                    controlList.push(breed)
                })
            })
            restoreList()

            //Challenge 4
            selector.addEventListener("change", (event) => {
                //Restore list
                restoreList()

                let selection = event.target.value
                let liList = breedList.querySelectorAll("li")

                liList.forEach((breed) => {     //Iterate through each li; Remove any that does not match the selector
                    if(selection != breed.innerText[0]) {
                        breed.remove()
                    }
                    // debugger
                })
            })
            
        })  
        
    function restoreList() {
        controlList.forEach((breed) => {
            let li = document.createElement("li")
            li.innerText = breed

            breedList.append(li)
        

            li.addEventListener("click", function() {
                li.style.color="green"
            })
        })
    }
})
