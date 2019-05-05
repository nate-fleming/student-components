const messageContainer = document.querySelector('#messages')

// const messages = [
//     "Are we doing fireworks this year?",
//     "After last year's 'tree incident', should we?",
//     "The fire fighters put it out in like a minute. Wasn't even a real fire.",
//     'We can set them off in the street.',
//     "Our neighbors' houses are flammable, too"
// ]

// messages.forEach(message => {
//     let element = document.createElement('section')
//     element.className = 'message'
//     element.textContent = message
//     messageContainer.appendChild(element)
// })

const fragment = document.createDocumentFragment()

let message = e => {
    let element = document.createElement('section')
    element.className = 'message'
    element.textContent = e
    fragment.appendChild(element)
}

message("Are we doing fireworks this year?")

messageContainer.appendChild(fragment)