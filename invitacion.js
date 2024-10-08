document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        const formData = new URLSearchParams();
        var nombre = document.getElementById("nombre").value;
        if(nombre || nombre!=""){
            formData.append("entry.851951850",nombre);
            // formData.append("entry.512626343","si");
            formData.append("entry.512626343","no");
            fetch("https://docs.google.com/forms/d/e/1FAIpQLSekp6A836wLEbD7Jj6WoN_Ntabd64vqzL8X10DCnh11D9d83g/formResponse",{
                method: "POST",
                body:formData,
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                mode:"no-cors"
            }).then(()=>{
                form.reset()
                cerrarmodal();
                abrirmodalok();
                setTimeout(cerrarmodalok, 2000);
    
            }).catch(error =>{
                const span = document.getElementById("spanerror");
                span.style.display="block";
            });
        }
        else{
            abrirmodalerror();
            setTimeout(cerrarmodalerror, 1000);

        }
    });

});
function abrirmodalerror(){
    const modal = document.getElementById("modalerror");
    modal.style.display="flex";
}
function cerrarmodalerror(){
    const modal = document.getElementById("modalerror");
    modal.style.display="none";
}

function abrirmodalok(){
    const modal = document.getElementById("modalok");
    modal.style.display="flex";
}
function cerrarmodalok(){
    const modal = document.getElementById("modalok");
    modal.style.display="none";
}

function abrirmodal(){
    const span = document.getElementById("spanerror");
    span.style.display="none";
    const modal = document.getElementById("modalinvitacion");
    modal.style.display="flex";
}
function cerrarmodal(){
    const modal = document.getElementById("modalinvitacion");
    modal.style.display="none";
}

