let response;
let preimage = document.querySelector('#preimage');
preload = document.querySelector('#preload');
postimage = document.querySelector('#postimage');
clearload = document.querySelector('#clearload');
current = document.querySelector('#current');

(async () => {
    response = await fetchImagesStatic();
    console.log(response)
    response.sort(() => Math.random() - 0.5);
    setTimeout(() => {
        document.querySelector('.image-container > p').classList.add('opacity-0');
    }, 1000)

    currentImage = 5;
    current.src = response[currentImage].download_url
    clearload.src = response[currentImage - 2].download_url
    postimage.src = response[currentImage - 1].download_url
    preimage.src = response[currentImage + 1].download_url
    preload.src = response[currentImage + 2].download_url
})()

document.querySelector('#left').addEventListener('click', () => {
    // temp = preimage.classList
    // postimage.classList = current.classList
    // current.classList = preimage.classList
    // preimage.classList = preload.classList
    postimage.classList = current.classList
    current.classList = preimage.classList
    preimage.classList = preload.classList

})
document.querySelector('#right').addEventListener('click', () => {
    // postimage.classList = current.classList
    // current.classList = preimage.classList
    // preimage.classList = preload.classList 
    preimage.classList = current.classList
    current.classList = postimage.classList

})