let messageIndex = 0;
const messages = ["Are you sure?", "Really sure??", "Pookie please...", "Don't do this to me!", "I'm gonna cry...", "Just say yes!"];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    document.getElementById('question').textContent = "Knew you would say yes! ❤️";
    document.getElementById('imageDisplay').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpueXp2Z3F0ZzR3eHByZ3R3eHByZ3R3eHByZ3R3eHByZ3R3JnB0X3JlZCUzRDEmc3Y9MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v8Y8V0pI2lS/giphy.gif";
    document.querySelector('.buttons').style.display = 'none';
}
