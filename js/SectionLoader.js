var xmlDoc, xmlTagContent;

window.onload = () => 
{
    SetPageTitle("Test");
    LoadXMLData();
};

function SetPageTitle(projectName)
{
    document.getElementById("page-title").innerHTML =projectName +"|Angel Awesome Ideas";
}

function LoadXMLData() 
{
    let xmlFile = "https://raw.githubusercontent.com/AnHell48/PokeTypes_JS/master/content/idk.xml";//"content/idk.xml";
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            // LoadXMLData(this.response);
            let parser = new DOMParser();

            xmlDoc = parser.parseFromString(this.response, "text/xml");

        }
    };
    xhttp.open("GET", xmlFile, true);
    xhttp.send();
}

// function LoadData(xml) 
// {
    
//     let parser = new DOMParser();

//     xmlDoc = parser.parseFromString(this.response, "text/xml");

//     let xmlTagContent = xmlDoc.getElementsByTagName("Design")[0].getElementsByTagName("Project");

//     for (let t = 0; t < xmlTagContent.length; t++)
//      {
//         console.log(xmlTagContent[t].getElementsByTagName("name")[0].childNodes[0].nodeValue);
//         console.log(xmlTagContent[t].getElementsByTagName("desc")[0].childNodes[0].nodeValue);
//         console.log(xmlTagContent[t].getElementsByTagName("imgssrc")[0].childNodes[0].nodeValue);
//         console.log("------------------------------------------");
//     }
// }

function LoadPageContent(tagToLoad, projectName) 
{
    let pName = document.getElementById("project-name").innerHTML;
    let pdesc = document.getElementById("project-description").innerHTML;    
    let pimgs = document.getElementById("project-imgs").innerHTML;

    //tagToLoad is the 3D, Games,etc.
    //tag content as in the content of general, games, 3D, etc.
    let xmlTagContent = xmlDoc.getElementsByTagName(tagToLoad);

    //get all the projects
    //xmlDoc.getElementsByTagName("Design")[0].getElementsByTagName("Project");
    xmlTagContent = xmlDoc.getElementsByTagName("Project");

    for (let t = 0; t < xmlTagContent.length; t++)
     { 
         console.log(xmlTagContent[t].childNodes[0].nodeValue);
        // if the first tag inside
        // if(xmlTagContent[t].childNodes[0].nodeValue == projectName)
        // {
        //     pName = xmlTagContent[t].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        //     pdesc = xmlTagContent[t].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
        //     pimgs = xmlTagContent[t].getElementsByTagName("imgssrc")[0].childNodes[0].nodeValue;
        // }    
     }
    
}