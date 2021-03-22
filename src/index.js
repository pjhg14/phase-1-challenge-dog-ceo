console.log('%c HI', 'color: firebrick')

//Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedURL = 'https://dog.ceo/api/breeds/list/all' 

document.addEventListener("DOMContentLoaded", () => {
    let imgContainer = document.querySelector("#dog-image-container")
    let imgList = document.querySelector("#dog-breeds")
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
            keys.forEach(function(key) {
                dogs.message[key].forEach(function(breed) {
                    let li = document.createElement("li")
                    imgList.append(li)
                    li.innerText = breed 

                    li.addEventListener("click", function() {
                        li.style.color="green"
                    })
                })
            })
            /*
            dogs.message.forEach(element => {
                //For each elem add img(element) to the DOM under "div"
                let img = document.createElement("img")
                let li = document.createElement("li")
                
                img.src = element

                
                li.append(img)
                imgList.append(li)

                li.addEventListener("click", function() {
                    li.style.color="green"
                })


            });
            
            */
            // if (selector.value === ) {

            // }
        })  
        //Challenge 3
    })
