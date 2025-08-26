// Heart count
const heartCount = () => {
    const heart = parseInt(document.getElementById('heart-count').innerText)
    document.getElementById('heart-count').innerText = heart + 1
}

const callFunc = service => {
    const credits = parseInt(document.getElementById('credits').innerText)
    alert('Calling National emergency Service 999...')
}