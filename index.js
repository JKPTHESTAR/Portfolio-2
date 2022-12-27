var tabContents = document.getElementsByClassName("tabContents")


const openTab = (tabName) => {

    for(tabContent of tabContents){
        tabContent.classList.remove("activeTab")
    }

    document.getElementById(tabName).classList.add("activeTab")
}



// for sending contact form


const scriptURL = 'https://script.google.com/macros/s/AKfycbzBOyehORqwbZOTDdN5dAxSpunKTD37eVcbOelUTesRkuehL3MxgGGypsRH5iZH1kJu/exec'
const form = document.forms['submit-to-google-sheet']
const reply = document.getElementById("formReply")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})

    .then(response => {
        reply.innerHTML = "Your Form Is Submitted Successfully..."
        setTimeout(function(){
            reply.innerHTML = ""
        },6000)
        form.reset()
    })

    .catch(error => console.error('Error!', error.message))
})





//Menu screen in mobile size

const sideMenu = document.getElementById("sideMenu");

function closeMenu(){
    sideMenu.style.right = "-180px"
}

function openMenu(){
    sideMenu.style.right = "0"
}













// google sheet link
// https://docs.google.com/spreadsheets/d/12utu6zfrCHQlp_LUEhaIqKPZ4XqQZME68IMRYLCQ764/edit#gid=0