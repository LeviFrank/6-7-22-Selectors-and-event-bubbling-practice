
//#region EVENT BUBBLING lesson

const body = document.querySelector('body');
const container = document.querySelector('.container');
const buttonContainer = document.querySelector('.buttonContainer');
const button = document.querySelector('.testButton');


const handleBodyClick = (e) => {
    console.log(e.target);
}
const handleContainerClick = (e) => {
    console.log(e.target);
}
const handleButtonContainerClick = (e) => {
    console.log(e.target);
    // e.stopPropagation();
}
const handleButtonClick = (e) => {
    console.log(e.target);
}


body.addEventListener('click', handleBodyClick);
container.addEventListener('click', handleContainerClick);
buttonContainer.addEventListener('click', handleButtonContainerClick);
button.addEventListener('click', handleButtonClick);

//#endregion

