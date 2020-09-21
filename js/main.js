function mailvalidate(){
                var emailexp=/^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

                var useremail=document.getElementById("email").value;

                if(emailexp.test(useremail)){
                    document.getElementById("inv-mail").style.display="none";
                }
                else{
                    document.getElementById("inv-mail").style.display="inline";
                }
            }
function mailvalidate1(){
                var emailexp=/^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

                var useremail=document.getElementById("email1").value;

                if(emailexp.test(useremail)){
                    document.getElementById("inv-mail1").style.display="none";
                }
                else{
                    document.getElementById("inv-mail1").style.display="inline";
                }
            }
function mailvalidate2(){
                var emailexp=/^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

                var useremail=document.getElementById("email2").value;

                if(emailexp.test(useremail)){
                    document.getElementById("inv-mail2").style.display="none";
                }
                else{
                    document.getElementById("inv-mail2").style.display="inline";
                }
            }
function mailvalidate3(){
                

                var useremail1=document.getElementById("email1").value;
                var useremail2=document.getElementById("email2").value;

                if(useremail1.length ==useremail2.length){
                    document.getElementById("inv-mail3").style.display="none";
                }
                else{
                    document.getElementById("inv-mail3").style.display="inline";
                }
            }
function passvalidate(){
                var passexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                var userpass=document.getElementById("pass1").value;

                if(passexp.test(userpass)){
                    document.getElementById("inv-pass1").style.display="none";
                }
                else{
                    document.getElementById("inv-pass1").style.display="inline";
                }
            }
function passvalidate2(){
                var passexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                var userpass=document.getElementById("pass2").value;

                if(passexp.test(userpass)){
                    document.getElementById("inv-pass2").style.display="none";
                }
                else{
                    document.getElementById("inv-pass2").style.display="inline";
                }
            }
function passvalidate3(){
                

                var userpass1=document.getElementById("pass1").value;
                var userpass2=document.getElementById("pass2").value;

                if(userpass1.length ==userpass2.length){
                    document.getElementById("inv-pass3").style.display="none";
                }
                else{
                    document.getElementById("inv-pass3").style.display="inline";
                }
            }

function phonevalidate(){
                var phnexp=/^(017|018|019|015|016|013|014)[0-9]{8}$/;

                var usernum=document.getElementById("phn_no").value;

                if(phnexp.test(usernum)){
                    document.getElementById("inv-phn").style.display="none";
                }
                else{
                    document.getElementById("inv-phn").style.display="inline";
                }
            }




$('#productModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('src') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var images = document.getElementsByTagName('img');
  var modal = $(this)
  modal.find('.modal-body .col-md-6 img').attr('src', recipient);
  modal.find('.modal-body input').val(recipient)
})
 $('#productModal img').attr('src', $(this).attr('src'));