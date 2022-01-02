(function(){
    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    let folders = [];

    btnAddFolder.addEventListener('click', addFolder);

    function addFolder(fname, fid) {
        let fname = prompt("Enter folder's neme");
        if(!!fname){
            let fidx = folders.findIndex(f => f.name == fname);
            if(fidx == -1){
                fid++;
                folders.push({
                    id: fid,
                    name: fname
                })
                addFolderHTML(fname, fid);
                saveToStorage();
            }else{
                alert(fname + "alrady exists.");
            }
        }else{
            alert("Please Enter Something.");
        }
    }

    function editFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        let ofname = divName.innerHTML;

        let nfname = prompt("Enter new name for" + ofname);
        if(!!nfname){
            if(nfname != ofname){
                let exists = folders.some(f => f.name == nfname);
                if(exists == false){
                    let folder = folders.find(f => f.name == ofname);
                    folder.name = nfname;
                    divName.innerHTML = nfname;
                    saveToStorage();
                }else{
                    alert(nfname + " alredy exists");
                }
            }else{
                alert("this is the old name only, Please enter something new.");
            }
        }else{
            alert("Please enter a name.");
        }
    }

    function deleteFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        let flag = confirm("Are you sure you want to delete " + divName.innerHTML + "?");
        if(flag){
            let fidx = folders.findIndex(f => f.name == divName.innerHTML);
            folders.splice(fidx, 1);
            divContainer.removeChild(divFolder);
            saveToStorage();
        }
    }

    function addFolderHTML() {
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        divName.innerHTML = fname;
        divFolder.setAttribute("fid", fid);

        let spanDelete = divFolder.querySelector("span[action='delete']");
        spanDelete.addEventListener('click', deleteFolder);
        
        let spanEdit = divFolder.querySelector("span[sction='edit']");
        spanEdit.addEventListener('click', editFolder);

        divContainer.appendChild(divFolder);
    }

    function saveToStorage() {
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson)
    }

    function loadFromStorage() {
        let fjson = localStorage.getItem("data");
        if(!!fjson){
            folders = JSON.parse(fjson);
            folders.forEach(f => addFolderHTML(f.name, f.id));
        }
    }

    loadFromStorage();
})();