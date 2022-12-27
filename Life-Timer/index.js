const iconEl = document.getElementById("iconId");
const settingContentEl = document.getElementById("settingContentId");
const initialTextEl = document.getElementById("initialContentId");
const afterTextEl = document.getElementById("afterContentID");
const dobButtonEl = document.getElementById("dobButtonId");
const dobInputEl = document.getElementById("dobInputId");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month"); 
const dayEl = document.getElementById("day"); 
const hourEl = document.getElementById("hour"); 
const minuteEl = document.getElementById("minute"); 
const secondEL = document.getElementById("second");  



const makeTwoDigit = (number) => {

    return number>9 ? number : `0${number}` 

};



let isDOBOpen = false;

const toggleDOBSelector = () => {

    if(isDOBOpen){
        settingContentEl.classList.add("hide");
    } else {
        settingContentEl.classList.remove("hide");
    }

    isDOBOpen = !isDOBOpen;

};



const updateAge = () => {

    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;

    console.log(dateDiff);

    const year = Math.floor(dateDiff/(1000*60*60*24*365));
    const month = Math.floor(dateDiff/(1000*60*60*24*30.4375))%12;
    const day = Math.floor((dateDiff/(1000*60*60*24))%30.45);
    const hour = Math.floor(dateDiff/(1000*60*60))%24;
    const minute = Math.floor(dateDiff/(1000*60))%60;
    const second = Math.floor(dateDiff/(1000))%60;

    console.log(year, month, day, hour, minute, second);

    yearEl.innerHTML = makeTwoDigit(year);
    monthEl.innerHTML= makeTwoDigit(month);
    dayEl.innerHTML = makeTwoDigit(day);
    hourEl.innerHTML = makeTwoDigit(hour);
    minuteEl.innerHTML = makeTwoDigit(minute) ;
    secondEL.innerHTML = makeTwoDigit(second);

};



let dateOfBirth;

const setDOBHandler = () => {

    const dateString = dobInputEl.value;

    dateOfBirth = dateString? new Date(dateString) : null;

    if(dateOfBirth){
        initialTextEl.classList.add("hide");
        afterTextEl.classList.remove("hide");
        setInterval(updateAge,1000);
    } else {
        initialTextEl.classList.remove("hide");
        afterTextEl.classList.add("hide");
    }

};



iconEl.addEventListener("click", toggleDOBSelector);
dobButtonEl.addEventListener("click", setDOBHandler);