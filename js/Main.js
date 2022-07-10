function GoToProject(projectID)
        {
            //set the ID as parameter on the url and redirect.
            window.location.href = "project.html?projectid="+projectID;
        }

        function ContactMe()
        {
            /*TODO -- just for fun 
            ** encrypt the email first so that's what the thingy will have
            *create a function to decrypt and retrurn the email which will create the "mailto"
            */
           let daEmail = GetEmail("h5yvislz;?Gov{thps5jvt");
           console.log(daEmail);
            window.location = "mailto:"+daEmail+"?subject=|AN&body=MyBodyIsReadyBBy!";
        }

        function GetEmail(scrambledEmail)
        {
            let emailArr = Array.from(scrambledEmail);
            let eml = "";

            for(let c =0; c <= emailArr.length - 1; c++)
            {
                //convert to code
                //change to + to encrypt or - to decrypt
                let chr = scrambledEmail.charCodeAt(c) - 7;

                //convert to letter/symbol/number
                 eml += String.fromCharCode(chr);
            }
            return eml;
            //97-a | 122-z
            //
            // return _email;
        }