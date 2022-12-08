
function getTimestamp () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}


function calculate8 () {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let dof = document.querySelector('input[name="dof"]:checked').value;
    let pk = document.querySelector('input[name="pk"]:checked').value;
    let pkf = document.querySelector('input[name="pkf"]:checked').value;
    let fh = document.querySelector('input[name="fh"]:checked').value;
    let ks = document.querySelector('input[name="ks"]:checked').value;
    let dob =  document.querySelector('input[name="dob"]').value;
    
    let risk = "";
  

    let scoredof=0;
    if(dof =='ไม่ใช่'){
        scoredof = 0;
    }else if(dof =='ใช่'){
        scoredof=1;
    }

    let scorepk=0;
    if(pk =='ไม่ใช่'){
        scorepk = 0;
    }else if(pk =='ใช่'){
        scorepk=2;
    }

    let scorepkf=0;
    if(pkf =='ไม่ใช่'){
        scorepkf= 0;
    }else if(pkf =='ใช่'){
        scorepkf=4;
    }

    let scorefh=0;
    if(fh =='ไม่ใช่'){
        scorefh = 0;
    }else if(fh =='ใช่'){
        scorefh=6;
    }

    let scoreks=0;
    if(ks =='ไม่ใช่'){
        scoreks = 0;
    }else if(ks =='ใช่'){
        scoreks=8;
    }


    // Input is string so typecasting is necessary. */
    let totalscore =
        parseFloat(scoreks) +
        parseFloat(scorefh) +
        parseFloat(scorepkf) +
        parseFloat(scorepk)+
        parseFloat(scoredof);

        console.log(totalscore);

    let icon = "";
    let risk2 = "";
    if (totalscore <= 0) {
        risk = "ไม่มีความเสี่ยงเป็นโรคนิ้วล็อค";
        risk2 = "ไม่เสี่ยง"
        icon = "../assets/img/tf/1.png"


    } else if (totalscore >  0 && totalscore <= 1) {
        risk = "อาจมีความเสี่ยงต่อนิ้วล็อคแนะนำบริหารนิ้ว ถ้าอาการผิดปกติ";
        risk2 = "เสี่ยง"
        icon = "../assets/img/tf/2.png"
    }  else if (totalscore >  1 && totalscore <= 3) {
        risk = "แนะนำพบแพทย์เพื่อพิจารณาการใช้ยาต้านการอักเสบ";
        risk2 = "เสี่ยง"
        icon = "../assets/img/tf/2.png"
    } else if (totalscore >  3 && totalscore <= 5) {
        risk = "แนะนำพบแพทย์เพื่อพิจารณาการใช้ยาต้านการอักเสบและทำกายภาพบำบัด";
        risk2 = "เสี่ยง"
        icon = "../assets/img/tf/2.png"
    } else if (totalscore >  5 && totalscore <= 7) {
        risk = "แนะนำพบแพทย์เพื่อพิจารณาการทำการกายภาพบำบัดและฉีดยาสเตียนอยด์";
        risk2 = "เสี่ยง"
        icon = "../assets/img/tf/2.png"
    } else if (totalscore >  7) {
        risk = "แนะนำพบแพทย์เพื่อฉีดยาสเตียรอยดืหรือผ่าตัดปลดล็อกนิ้วที่มีข้อติด";
        risk2 = "เสี่ยง"
        icon = "../assets/img/tf/2.png"
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
            <img src= ${icon} style="width: 320px; height: 90px;>
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
               url: "savestr.php",
               data:{ "name": $("input[name=name]").val(),
                      "phone" : $("input[name=phone]").val(),
                      "email" : $("input[name=email]").val(),
                      "dob" : $("input[name=dob]").val(),
                      "sex" : $("input[name=sex]:checked").val(),
                      "dof" : $("input[name=dof]:checked").val(),
                      "pk" : $("input[name=pk]:checked").val(),
                      "pkf" : $("input[name=pkf]:checked").val(),
                      "fh" : $("input[name=fh]:checked").val(),
                      "ks" : $("input[name=ks]:checked").val(),
                      "time" : getTimestamp(),
                      "risk" : calculate8(),
                      "action" : "apptf"
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
                            $('#btnSend').hide();
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
            