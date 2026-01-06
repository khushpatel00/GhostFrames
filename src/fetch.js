function fetchImagesStatic(){
    console.log('fetching')
    return fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(console.log('fetched'))
        .then(data => data)
}