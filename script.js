let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
	if (leadsFromLocalStorage) {
		myLeads = leadsFromLocalStorage
		renderLeads()
	};
	const tabs = [
		{url: "https://www.linkedin.com/in/per-harald-borgen/"}
	];
	
	tabBtn.addEventListener("click", function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0]
        let activeTabId = activeTab.id // or do what
	});
deleteBtn.addEventListener("click", function() {
	localStorage.clear();
	myLeads = [];
	render(myLeads);
});
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    render(myLeads);
});

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    };
    ulEl.innerHTML = listItems ;
};