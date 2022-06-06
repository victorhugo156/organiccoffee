/*** First: You have to get from the HTML file the tags that you want to manipulate, in this case we want to manipulate the:

- The Button to go next and back
- The UL with a list of images;
- The indicators that will show the position of the image. */


const list = document.getElementById('box-images')
const slides = Array.from(list.children); //The Array.from() will alow us to get the elements into an Array.

console.log(slides)



const nextBtn = document.getElementById('data-btn-next');
const backBtn = document.getElementById('data-btn-back');


const dataNav = document.getElementById('data-navigation');
const dots = Array.from(dataNav.children);

const slideWidth = slides[0].getBoundingClientRect().width//We are getting the size of the box with the imgs.


//arrange the images next to one another

//slides[0].style.left = 0;
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
})


//When I click, move slides to the right

nextBtn.addEventListener('click', e =>{
    const currentSlide = slides.getElementById('current-slide');
    

    

    //move to nextSlide

})





//********************** HOW TO CREAT A CAROUSEL IN JS ********************** 

/*** First: You have to get from the HTML file the tags that you want to manipulate, in this case we want to manipulate the:

- The Button to go next and back
- The UL with a list of images;
- The indicators that will show the position of the image. */

/*

const btnNext = document.querySelector('[data-btn-next]');
const btnBack = document.querySelector('[data-btn-back]');
const images = document.querySelector('[data-list-images]');
const navigation = document.querySelector("[data-navigation]")

/* After that, you will have to transform the images list in your UL to an Array.
    You can do it using the method Array.from()
*/

/*

const slides = getSlidesList();
const indicators = getIndicators();
const boxSize = BoxSize();

console.log(MakingSlides())



function getSlidesList(){
    return Array.from(images.children) // Here is an example how to use the method. Notice need to say that we want to have access to the children of the UL.
}

function getIndicators(){
    return Array.from(navigation.children)
}

//Next step: We need to get the size of the box that where the images are. To do it we are going to use a function: getBoundingClientRect().width

function BoxSize(){
    return slides[0].getBoundingClientRect().width //In this function we need to declare any image position that will allow the function getBoundingClientReact to identify the box size, in the end we declare that we want to get the width of the image.
}

//Next step: Now that the JS already know the size od the box that holds the images, we need to establish the left size of the images. Imagining that the images are in a queue, side by side. They will need space on their left size to be able to fit all images. 

function MakingSlides(){
    slides.forEach((slide, i) => { // We are going to use For Each to iterate the Array of images and an arrow function to multiply the sizes of the images of each element that the For Each has iterated:
    slide.style.left = boxSize * i + 'px'

    })
}

*/

