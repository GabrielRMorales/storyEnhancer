$(document).ready(function(){

  document.getElementById('fileinput').addEventListener('change', readSingleFile, false);

  function readSingleFile(evt) {
          //Retrieve the first (and only!) File from the FileList object
          var f = evt.target.files[0]; 

          if (f) {

            var r = new FileReader();

            r.onload = function(e) { 

          //for downloading the changed files as a .doc
          var htmlDocument=(function replace_invalid(){
            var the_text=e.target.result.split(""),
                lastWasInvalid=false;
            for (var i=0;i<the_text.length;i++){
                //removes invalid chars
                      if (the_text[i]=="�" && the_text[i+1]=="�"){
                        the_text[i]=" ";
                        lastWasInvalid=true;
                      }
                      else if (the_text[i]=="�" && the_text[i+1]!="�" && lastWasInvalid==false) {
                        the_text[i]="'";
                      }
                      else if (the_text[i]=="�" && the_text[i+1]!="�" && lastWasInvalid==true) {
                        the_text[i]=" ";
                        lastWasInvalid=false;
                      }
                      else if (the_text[i]=="�" && lastWasInvalid==true) {
                        the_text[i]=" ";
                      }
                    }

                    return the_text.join("");
                  })
          (e.target.result);

          //to analyze the file
          htmlDocument=(function improve(){

            var the_story=htmlDocument.split(" ");            
            for (var i=0;i<the_story.length;i++){
                //text-changing algorithms go here
                //Example:
                if (the_story[i]=="the"){
                  the_story[i]="THE";
                }
                var hfWords=['in','on','at','from','with','a','as','if','of','that','and','the','or','else','to','an'],
                colorlessVerbs=["walked", "ran", "went", "saw", "talked", "ate", "did", "got", "put", "took"],
                wishyWashy=["quite", "sort of", "almost", "kind of", "a bit", "pretty", "somewhat", "rather", "usually", "basically", "generally", "probably", "mostly", "really"];
                passive=["was","had been","were","by"];

                //

              }

             //to show a preview on the web page
           (function alter_page(){
            $("#info").html(f.name);
            $("#content_here").html(htmlDocument);
            $("#content_here").css("text-align","left");
          })();

          //Consider adding a way to left, right, center align the preview 
              return the_story.join(" ");
            })(htmlDocument);

           
          
          //to download the html as a word doc
          (function convert(){
            var dataUri = "data:text/html," + encodeURIComponent(htmlDocument);
            var link="data:text/html"+dataUri;
            $("#dl").attr("href",link);
          })();

        }

        //make sure this part is necessary
        r.readAsText(f);
      } 
      else { 
        alert("Failed to load file");
      }

    }  

  });