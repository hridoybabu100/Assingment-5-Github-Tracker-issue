// console.log("This is a Connected");

let issueData = [];

// search issue function button
const searchBtnIssues = document.getElementById("search-issue-btn")
    .addEventListener("click", () => {

        const searchIssues = document.getElementById("search-issue");
        let issuesInputValue = searchIssues.value.trim().toLowerCase();
        // removeSpinner(true);
        fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${issuesInputValue}`)

            .then((res) => res.json())
            .then((data) => {
                const allData = data.data

                const issueSearch = allData.filter((issue) => issue.title.toLowerCase().includes(issuesInputValue))

                displayAllIssues(issueSearch);
            })


    })

// card Updated levels
// new card label section array crad er bhetor label gulo array teke loop chaliye notun array baniye string a convert kore return korechi
const bugAndHelpLabels = (labels) => {

    let newArr = labels.map((label) =>
        `<span class="font-semibold text-[10px] px-2 py-[2px] rounded-2xl border ${label === "bug" ? "bg-red-100 text-red-400" : label === "help wanted" ? "bg-[#fff6d1] text-[#f59e0b]" : "bg-[#defce8] text-[#00a96e]"}">${label.toUpperCase()} </span>`);

    return newArr.join(" ")

}

//All Issues Data
const allIssuesData = () => {
    removeSpinner(true);
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        issueData = data.data;
        removeSpinner(false)
        displayAllIssues(data.data);
        
    })
}

const toggolCart = (status) => {
  
      if ( status === "all"  ){
        displayAllIssues(issueData);
    }
    if ( status === "open"){
        const openIssues = issueData.filter((issue) =>  issue.status == "open" );
        displayAllIssues(openIssues);
    }
    if (status === "closed"){
        const closeIssues = issueData.filter((issue) => issue.status == "closed");
        displayAllIssues(closeIssues);
    }
  
}

// Toggol Btn
    const toggolFilterBn = (id) => {
        const allBtn = document.getElementById("all-btn").classList.remove("bg-[#422ad5]", "text-white");
        const openBtn = document.getElementById("open-btn").classList.remove("bg-[#422ad5]", "text-white");
        const closedBtn = document.getElementById("closed-btn").classList.remove("bg-[#422ad5]", "text-white");

        const getId = document.getElementById(id);
        getId.classList.add("bg-[#422ad5]", "text-white")

    }

    // remove spinner function
     function removeSpinner(status) {

    if (status == true) {
        document.getElementById("spinner-container").classList.remove("hidden");
        document.getElementById("issuesContainer").classList.add("hidden");
    } else {
        document.getElementById("spinner-container").classList.add("hidden");
        document.getElementById("issuesContainer").classList.remove("hidden");
    }

}
// All Issues Display
const displayAllIssues = (issues) => {
    removeSpinner(true);
    //total count
    const totalCount = document.getElementById("total-count");
    totalCount.innerText = issues.length;
    //issuesContainer
    const issuesContainer = document.getElementById("issuesContainer");
    // console.log(issuesContainer);
    issuesContainer.innerHTML = " "
    
  issues.forEach((issue) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    
        <div onclick="allActiveCard(${issue.id})" class="bg-base-100 p-3 space-y-3 rounded-md shadow-md h-full ${issue.status === "open" ? "border-[#22b780]" : "border-[#a855f7]"} border-t-3">
                    <div class="flex justify-between items-center gap-4">
                        <img src="./assets/Open-Status.png" alt="">
                        <div class="badge bg-[#FEECEC] text-[12px] text-[#EF4444] font-medium">${issue.priority}</div>
                    </div>
                    <div class="space-y-3">
                        <h1 class="text-[#1F2937] font-semibold">${issue.title}</h1>
                        <p class="gray line-clamp-2">${issue.description}</p>
                    </div>
                    <div class="flex items-center  gap-4">
                        <div class="badge bg-[#FEECEC] text-[12px] text-[#EF4444] font-medium">BUG</div>
                        <div class="badge badge-soft bg-[#FDE68A] text-[#D97706]">HELP WANTED</div>
                    </div>
                    <div class="pt-6">
                        <p class="gray">${issue.author}</p>
                        <p class="gray">${issue.createdAt}</p>
                    </div>
                </div>
        
    
    `
    
    // Appends To Container
    issuesContainer.appendChild(newDiv);
    
})
 removeSpinner(false);
}

// all card  access 
const allActiveCard = async (id) => {

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    const res = await fetch(url)
    const data = await res.json()
    displayShowModal(data.data)

}

// modal function 
function displayShowModal(card) {
    console.log(card)
    const modalContainer = document.getElementById("modal_container")
    modalContainer.innerHTML = "";

    const div = document.createElement("div")
    div.innerHTML = `
                        <div class="space-y-6">

                          <div>
                              <h2 class="font-semibold text-2xl mb-2">${card.title}</h2>
              
                              <div class="flex items-center gap-2">
                                  <p class="text-sm bg-green-600 px-3 py-[2px] text-white rounded-2xl font-semibold">${card.status}</p>
                                  <span class="w-[8px] h-[8px] rounded-full bg-gray-500"></span>
                                  <p class="text-sm text-[#64748b]">Opened by ${card.author}</p>
                                  <span class="w-[8px] h-[8px] rounded-full bg-gray-500"></span>
                                  <p class="text-sm text-[#64748b]">
                                      ${new Date(card.createdAt).toLocaleDateString()}
                                  </p>
                              </div>
                          </div>
              
                          <div class="flex flex-wrap gap-3">
                             ${bugAndHelpLabels(card.labels)}
                          </div>
              
                          <p class="text-[15px] text-[#64748b]">
                              ${card.description}
                          </p>
              
                          <div class="bg-[#f8fafc] flex p-4 rounded-lg">
                              <div class="w-[50%] space-y-1">
                                  <p class="text-[#64748b]">Assignee:</p>
                                  <p class="font-bold">${card.assignee.toUpperCase()}</p>
                              </div>
              
                              <div class="w-[50%] space-y-2">
                                  <p class="text-[#64748b]">Priority:</p>
                                  <p class="text-sm bg-red-600 px-3 py-[2px] text-white rounded-2xl w-fit font-semibold">${card.priority.toUpperCase()}</p>
                              </div>
                          </div>
              
                          <div class="modal-action">
                              <form method="dialog">
                                  <button class="btn border-none btn-primary">Close</button>
                              </form>
                          </div>
              
                      </div>
              

                      `;

    modalContainer.appendChild(div);

    document.getElementById("modal_card").showModal();

}
allIssuesData();
toggolFilterBn("all-btn");


 