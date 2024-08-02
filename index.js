
//create two variables
let myLeads =[]

const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el")

// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn=document.getElementById("tab-btn")

// 1. Store the delete button in a deleteBtn variable
const deleteBtn=document.getElementById("delete-btn")

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //push tabs in myLead
    myLeads.push(tabs[0].url)
    // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    })
  
})
// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick",function(){
   localStorage.clear()
   myLeads=[]
   renderLeads()
})
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value="" //clear value from input
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myleads"))
});


function renderLeads(){
    let listItems=""
    for(let i=0; i<myLeads.length; i++)
        {
            //listItems += "<li><a target = 'blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>"
            listItems += `<li><a target = 'blank' href=${myLeads[i]}>${myLeads[i]}</a></li>`

        }
     ulEl.innerHTML=listItems
  
    
}
