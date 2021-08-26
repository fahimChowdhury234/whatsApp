const tabBtn = document.querySelectorAll("#tabBtn");
const el = document.querySelectorAll("#el");
console.log(tabBtn, el);

tabBtn.forEach((dom)=>{
dom.addEventListener("click", (e) =>{
    const eventArt = findParetDiv(e.target, "tabBtn");
    tabBtn.forEach((btn)=>{
        const tabdataName = btn.getAttribute("data-name")
        if(tabdataName === eventArt){
            btn.classList.add("active-tab");

        }else{
        btn.classList.remove("active-tab");

        }
    });
    el.forEach((event)=>{
const elDataName = event.getAttribute("data-name")

if(elDataName === eventArt){
    event.style.opacity = "1";
    event.style.visibility = "visible";
}else{
    event.style.opacity = "0";
    event.style.visibility = "hidden";
}
    })
})
})
function findParetDiv(dom, id) {
    if (dom.id === id) {
      return dom.getAttribute("data-name");
    } else {
      return findParetDiv(dom.parentNode, id);
    }
  }