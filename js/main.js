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
            var the_text=e.target.result.split("");
            for (var i=0;i<the_text.length;i++){
                //removes invalid chars
                      //Improve this in case the ? appears as a space-replace with spaces if they appear in a series, but if a ? is found all by itself (not surrounded by other ? then replace with an apostrophe)
                      if (the_text[i]=="�"){
                          the_text[i]="'";
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

                //

            }
            return the_story.join(" ");
      })(htmlDocument);

           //to show a preview on the web page
          (function alter_page(){
          $("#info").html(f.name);
          $("#content_here").html(htmlDocument);
          })();
          
          //to download the html as a word doc
          (function convert(){
          var dataUri = "data:text/html," + encodeURIComponent(htmlDocument);
          var link="data:text/html"+dataUri;
          $("#dl").attr("href",link);
        })();
                  
           }
            r.readAsText(f);
          } 
          else { 
            alert("Failed to load file");
          }
          
        }  

});