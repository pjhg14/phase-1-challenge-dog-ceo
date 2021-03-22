console.log('%c HI', 'color: firebrick')

//Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

document.addEventListener("DOMContentLoaded", () => {
    let imgContainer = document.querySelector("#dog-image-container")
    let imgList = document.querySelector("#dog-breeds")

    // fetch(imgUrl)
    //     .then(promise => promise.json())
    //     .then(dogs => {

    //         dogs.message.forEach(element => {
    //             //For each elem add img(element) to the DOM under "div"
    //             let img = document.createElement("img")
    //             img.src = element

    //             imgContainer.append(img)
    //         });
    //     })


    //Challenge 2
    fetch(imgUrl)
        .then(promise => promise.json())
        .then(dogs => {

            dogs.message.forEach(element => {
                //For each elem add img(element) to the DOM under "div"
                let img = document.createElement("img")
                let li = document.createElement("li")
                img.src = element

                
                li.append(img)
                imgList.append(li)
            });
        })  
    
    //Challenge 3
})
