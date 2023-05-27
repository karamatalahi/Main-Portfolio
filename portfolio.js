var navtags = document.querySelectorAll('.nav-menu a');
for(var i=0;i<navtags.length;i++){
    navtags[i].addEventListener('click' ,function(event){
        event.preventDefault();
        var targetSectionId = this.textcontent.trim().toLowercase();
        console.log(targetSectionId); 
    });
}