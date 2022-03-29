const formElement = document.querySelector('form');

formElement.addEventListener('submit', function(event) {
    console.log("test")
    event.preventDefault();
    const commentInput = document.querySelector('textarea');
    const commentNew = commentInput.value

    if (commentNew) {
    const listItem = document.createElement('li')
    listItem.innerHTML = '<img src="https://picsum.photos/200"/>'

    const paragraph = document.createElement('p')
    paragraph.textContent = commentNew

    listItem.appendChild(paragraph)
    // console.log(listItem)

    document.querySelector('ul.newComments').appendChild(listItem)
    
    commentInput.value = ''
    }
})