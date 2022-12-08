
function getTimestamp () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}



function calculate7(){
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let rke = document.querySelector('input[name="rke"]:checked').value;
    let rkn = document.querySelector('input[name="rkn"]:checked').value;
    let rkl = document.querySelector('input[name="rkl"]:checked').value;
    let rks = document.querySelector('input[name="rks"]:checked').value;
    let rkf = document.querySelector('input[name="rkf"]:checked').value;
    let dob =  document.querySelector('input[name="dob"]').value;
  
    let risk = "";

    


    let scorerke=0;
    if(rke == "ไม่ใช่"){
        scorerke=0;
    }else{
        scorerke=1;
    }


    let scorerkn=0;
    if(rkn =='ไม่ใช่'){
        scorerkn = 0;
    }else if(rkn =='ใช่'){
        scorerkn=1;
    }

    let scorerkl=0;
    if(rkl =='ไม่ใช่'){
        scorerkl = 0;
    }else if(rkl =='ใช่'){
        scorerkl=1;
    }


    let scorerks=0;
    if(rks =='ไม่ใช่'){
        scorerks = 0;
    }else if(rks =='ใช่'){
        scorerks=1;
    }

  

    let scorerkf=0;
    if(rkf =='ไม่ใช่'){
        scorerkf = 0;
    }else if(rkf =='ใช่'){
        scorerkf=1;
    }

    let totalscore =
        parseFloat(scorerkf) +
        parseFloat(scorerkl) +
        parseFloat(scorerkn) +
        parseFloat(scorerks)+
        parseFloat(scorerke);

        console.log(totalscore);

    let icon = "";
    let risk2 = "";
    let con = "";
    if (totalscore == 0) {
        risk = "ไม่มีความเสี่ยงโรคภูมิแพ้";
        risk2 = "ไม่เสี่ยง";
        icon = "../assets/img/ag/nr.png";
        con = "";
  

    } else if (totalscore > 0) {
        risk = "มีความเสี่ยงโรคภูมิแพ้";
        risk2 = "เสี่ยง";
        icon = "../assets/img/ag/2.png";
        con = "แนะนำตรวจพบแพทย์เพื่อประเมินสาเหตุการเกิด";
    } 


    if (name == "" || phone == "" || dob == "") {
        document.querySelector("#showdata" ).innerHTML =   `  `;
       
    } else {
    
        if (totalscore >= 0) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            `
            <h2><center>ผลการประเมิน</center></h2> 
            ระดับความเสี่ยง : ${risk} <br>
            ${con} <br>
            <img src=${icon} style="width: 250px; height: 90px;>
            <span id="PRE" style="color:black;font-weight:bold; font-size: 35px;"><br>
            <a class="appointment-btn scrollto" href="https://aonanghospital.com/th/appointment.html" > นัดพบแพทย์</a> 

            `;
    
        } 
    }return risk2;
};

$(document).ready(function() {
        $("#btnSend").click(function() {
            let name = document.querySelector("#name").value;
            let phone = document.querySelector("#phone").value;
            let dob =  document.querySelector('input[name="dob"]').value;

            var status = "";
            if (status == ""){
                if(name == ""){
                    status = "N";
                }
            }
            if (status == ""){
                if(phone == ""){
                    status = "N";
                }
            }
            if (status == ""){
                if(dob == "" ){
                    status = "N";
                }
            }

            if (status == ""){
             $.ajax({
               type: "POST",
               dataType: "json",
               url: "saveag.php",
               data:{ "name": $("input[name=name]").val(),
                      "phone" : $("input[name=phone]").val(),
                      "email" : $("input[name=email]").val(),
                      "dob" : $("input[name=dob]").val(),
                      "sex" : $("input[name=sex]:checked").val(),
                      "rke" : $("input[name=rke]:checked").val(),
                      "rkn" : $("input[name=rkn]:checked").val(),
                      "rkl" : $("input[name=rkl]:checked").val(),
                      "rks" : $("input[name=rks]:checked").val(),
                      "rkf" : $("input[name=rkf]:checked").val(),
                      "time" : getTimestamp(),
                      "risk" : calculate7(),
                      "action" : "appag"
                    },
                    success: function(result) {
                        if(result.status == 1) // Success
                       {
                          Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'บันทึกข้อมูลสำเร็จ',
                              showConfirmButton: false,
                              timer: 1500
                            })
                            document.getElementById("frmContact").reset();
                        }
                        else // Err
                       {
                          Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: 'บันทึกข้อมูลไม่สำเร็จ',
                            })
                       }
                     }
                    });
                  }else{
                      Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                        })
                  }
          
                 });
          
            });