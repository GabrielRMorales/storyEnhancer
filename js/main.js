 function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 

          var contents = e.target.result;
          var counter=0;          
        $("#info").html(f.name);
        var text=contents.split(" ");
           /* for (var i=0;i<text.length;i++){
                if (text[i]=="Johnny"){
                    text[i]="Jim";
                    console.log(text[i]);
                }
            }*/
    /*Put the style analysis algorithms here*/
            for (var i=0;i<text.length;i++){
                if (text[i]=="tensed"){
                    counter++;
                    console.log(counter);
                }
            }
    //for downloading the changed files as a .doc
    var htmlDocument=text;
    var dataUri = "data:text/html," + encodeURIComponent(htmlDocument);

    /**********************************/
    $("#content_here").html(text.join(" "));
//

function download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
    a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


    if (window.MSBlobBuilder) { // IE10
        var bb = new MSBlobBuilder();
        bb.append(strData);
        return navigator.msSaveBlob(bb, strFileName);
    } /* end if(window.MSBlobBuilder) */



    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    }; /* end if('download' in a) */



    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}
//
$("#download_story").click(function(){
download(contents, 'filename.txt', 'text/plain');
});

//
                             }
      r.readAsText(f);
    } 
    else { 
      alert("Failed to load file");
    }
    
  }
  
  document.getElementById('fileinput').addEventListener('change', readSingleFile, false);



/*var fileInput = $('#files');
var uploadButton = $('#upload');

uploadButton.on('click', function() {
    if (!window.FileReader) {
        alert('Your browser is not supported');
        return false;
    }
    var input = fileInput.get(0);

    // Create a reader object
    var reader = new FileReader();
    if (input.files.length) {
        var textFile = input.files[0];
        // Read the file
        reader.readAsText(textFile);
        // When it's loaded, process it
        $(reader).on('load', processFile);
    } else {
        alert('Please upload a file before continuing')
    } 
});

function processFile(e) {
    var file = e.target.result,
        results;
    if (file && file.length) {
        results = file.split("\n");
        $('#name').val(results[0]);
        $('#age').val(results[1]);
    }
}*/