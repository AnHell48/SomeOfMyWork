"use strict"
var xmlDoc, xmlTagContent, projectID;

window.onload = () => 
{
    //TODO
    //create func to get project id
    GetProjectID();
    LoadXMLData();
};

function SetPageTitle(projectName)
{
    //set project name on tab
    document.getElementById("page-title").innerHTML =`${projectName} |Angel Awesome Ideas`;
}

function GetProjectID()
{
    /*TODO
    * get the value from the url (GET)
    * if value is null -> redirect back to homepage.
    */
   let urlParam = new URLSearchParams(window.location.search);
   
   if(urlParam.has("projectid"))
   {
        projectID = urlParam.get("projectid");
   }
   else
   {
       /*TODO
       * - if there's no parameter then load the projects and on select then
       */
       window.location.href = "index.html";
   }
}

function LoadXMLData() 
{
    let xmlFile = "https://raw.githubusercontent.com/AnHell48/MyAwersomeIdeas/main/content/idk.xml";//"content/idk.xml";
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            LoadPageContent(this.response);
        }
    };

    xhttp.open("GET", xmlFile, true);
    xhttp.send();
}

function LoadPageContent(_xml) 
{
    let pName = document.getElementById("project-name");
    let pdesc = document.getElementById("project-description");    
    let pimgs = document.getElementById("project-imgs");
    let imgArr, project_name;
    let parser = new DOMParser();

    //set page (tab) title 
    document.getElementById("page-title").innerHTML += pName; // TEST THIS <-------------------------------EF9WEIF9EWFJ9EWFJ
    
    //tagToLoad is the 3D, Games,etc.
    //tag content as in the content of general, games, 3D, etc.
    // let xmlTagContent = xmlDoc.getElementsByTagName(tagToLoad);
    
    xmlDoc = parser.parseFromString(_xml, "text/xml");
    //get all the projects
    xmlTagContent = xmlDoc.getElementsByTagName("Project");
    // xmlTagContent = xmlDoc.getElementsByTagName("Project");

    for (let t = 0; t < xmlTagContent.length; t++)
     { 
         // get the project data by attribute "id"
        if (xmlTagContent[t].getAttribute("id") === projectID)
        {
            project_name = xmlTagContent[t].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            pdesc.innerHTML = xmlTagContent[t].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
            imgArr = xmlTagContent[t].getElementsByTagName("imgssrc")[0].childNodes[0].nodeValue;
            imgArr = imgArr.split(",");
        }  
    }

    //set project name
    pName.innerHTML = pName.innerHTML;
    SetPageTitle(project_name);

    //create and set images.
    for(let i=0; i < imgArr.length; i++)
    {
        console.log(imgArr[i]);
        let imgTag = document.createElement("img");
        imgTag.src = "content/"+imgArr[i];
        imgTag.alt = "Printscreen from project";
        pimgs.appendChild(imgTag);
        /*TODO
        * create custom alt description then store them like 
        *imgsrc,alt,imgsrc,atl,...
        */
    }
    
}