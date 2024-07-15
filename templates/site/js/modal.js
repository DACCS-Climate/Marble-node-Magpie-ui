function setModal(modalDialogID, openModalButtonElementID, openModalLinkElementID, closeModalElementID){
    // Get the modal
    var modal = document.getElementById(modalDialogID);
    var bodyHTMLCollection = document.getElementsByTagName("body");
    var bodyTags = Array.from(bodyHTMLCollection);


    if(openModalButtonElementID != ""){
        var openModalButton = document.getElementById(openModalButtonElementID);

        // When the user clicks on the button, open the modal
        openModalButton.addEventListener("click", function(){
            bodyTags.forEach(body => {
                body.classList.remove(...body.classList);
                body.classList.add("stop-scroll");
            })

            modal.showModal();
        });
    }

    if(closeModalElementID != ""){
        var closeModalButton = document.getElementById(closeModalElementID);

        closeModalButton.addEventListener("click", () => {
            bodyTags.forEach(body => {
                body.classList.remove(...body.classList);
            })
            modal.close();
        });
    }
    
    if(openModalLinkElementID != ""){
        var openModalLink = document.getElementById(openModalLinkElementID);

        openModalLink.addEventListener('click', () => {
            bodyTags.forEach(body => {
                body.classList.remove(...body.classList);
                body.classList.add("stop-scroll");
            })
            modal.showModal();
        })
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
          bodyTags.forEach(body => {
            body.classList.remove(...body.classList);
        })
          modal.close();
      }
    }
}