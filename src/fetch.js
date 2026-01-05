function fetchImagesStatic(){
    return fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(data => data)
}