(async () => {
    let response = await fetchImagesStatic();
    console.log(response)
    response.sort(() => Math.random() - 0.5);
    response.forEach(image => {
        document.querySelector('.image-container').innerHTML += `
            <div class="snap-center">
                <img class="max-w-screen h-fit md:max-w-[70vw] lg:max-w-[70vw] xl:max-w-[60vw]"
                    src="${image.download_url}">
            </div>
        `;
    });
})()