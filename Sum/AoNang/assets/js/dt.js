
function getTimestamp () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function calculate9() {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let rememF = document.querySelector('input[name="rememF"]:checked').value;
    let rememWF = document.querySelector('input[name="rememWF"]:checked').value;
    let rememH = document.querySelector('input[name="rememH"]:checked').value;
    let canRu = document.querySelector('input[name="canRu"]:checked').value;
    let canlb = document.querySelector('input[name="canlb"]:checked').value;
    let canTra = document.querySelector('input[name="canTra"]:checked').value;
    let canW = document.querySelector('input[name="canW"]:checked').value;
    let canln = document.querySelector('input[name="canln"]:checked').value;
    let dob =  document.querySelector('input[name="dob"]').value;
   
    let risk = "";
    let F = 0;
    let H = 0;


    if(rememF=='ดีขึ้นมาก'){
        F = 1;
    }else if(rememF == 'ดีขึ้นเล็กน้อย'){
        F = 2;
    }else if(rememF == 'ไม่เปลี่ยนแปลง'){
        F = 3;
    }else if(rememF == 'แย่ลงเล็กน้อย'){
        F = 4;
    }else if(rememF == 'แย่ลงมาก'){
        F = 5;
    }


    if(rememH=='ดีขึ้นมาก'){
        H = 1;
    }else if(rememH == 'ดีขึ้นเล็กน้อย'){
        H = 2;
    }else if(rememH == 'ไม่เปลี่ยนแปลง'){
        H = 3;
    }else if(rememH == 'แย่ลงเล็กน้อย'){
        H = 4;
    }else if(rememH == 'แย่ลงมาก'){
        H = 5;
    }

    let WF = 0;

    if(rememWF=='ดีขึ้นมาก'){
        WF = 1;
    }else if(rememH == 'ดีขึ้นเล็กน้อย'){
        WF = 2;
    }else if(rememH == 'ไม่เปลี่ยนแปลง'){
        WF = 3;
    }else if(rememH == 'แย่ลงเล็กน้อย'){
        WF = 4;
    }else if(rememH == 'แย่ลงมาก'){
        WF = 5;
    }

    let Ru = 0;

    if(canRu=='ดีขึ้นมาก'){
        Ru = 1;
    }else if(canRu == 'ดีขึ้นเล็กน้อย'){
        Ru = 2;
    }else if(canRu == 'ไม่เปลี่ยนแปลง'){
        Ru = 3;
    }else if(canRu == 'แย่ลงเล็กน้อย'){
        Ru = 4;
    }else if(canRu == 'แย่ลงมาก'){
        Ru = 5;
    }

    let Tra = 0;

    if(canTra=='ดีขึ้นมาก'){
        Tra = 1;
    }else if(canTra == 'ดีขึ้นเล็กน้อย'){
        Tra = 2;
    }else if(canTra == 'ไม่เปลี่ยนแปลง'){
        Tra = 3;
    }else if(canTra == 'แย่ลงเล็กน้อย'){
        Tra = 4;
    }else if(canTra == 'แย่ลงมาก'){
        Tra = 5;
    }

    let nW = 0;

    if(canW=='ดีขึ้นมาก'){
        nW = 1;
    }else if(canW == 'ดีขึ้นเล็กน้อย'){
        nW = 2;
    }else if(canW == 'ไม่เปลี่ยนแปลง'){
        nW = 3;
    }else if(canW == 'แย่ลงเล็กน้อย'){
        nW = 4;
    }else if(canW == 'แย่ลงมาก'){
        nW = 5;
    }

    let lb = 0;

    if(canlb=='ดีขึ้นมาก'){
        lb = 1;
    }else if(canlb == 'ดีขึ้นเล็กน้อย'){
        lb = 2;
    }else if(canlb == 'ไม่เปลี่ยนแปลง'){
        lb = 3;
    }else if(canlb == 'แย่ลงเล็กน้อย'){
        lb = 4;
    }else if(canlb == 'แย่ลงมาก'){
        lb = 5;
    }

    let ln = 0;

    if(canln=='ดีขึ้นมาก'){
        ln = 1;
    }else if(canln == 'ดีขึ้นเล็กน้อย'){
        ln = 2;
    }else if(canln == 'ไม่เปลี่ยนแปลง'){
        ln = 3;
    }else if(canln == 'แย่ลงเล็กน้อย'){
        ln = 4;
    }else if(canln == 'แย่ลงมาก'){
        ln = 5;
    }
    let riskDT = 0;
    riskDT = (ln+lb+H+WF+Ru+Tra+F+nW)/8
    console.log(riskDT)
   
    let icon = "";
    let risk2 = "";
    if (riskDT <= 3.38) {
        risk = "ไม่เปลี่ยนแปลง";
        risk2 = "ไม่เปลี่ยนแปลง";
        icon = "../assets/img/dt/1.png"
       

    } else if (riskDT > 3.38 && riskDT <= 4.00) {
        risk = "มีการเปลี่ยนแปลงในทางที่แย่ลงเล็กน้อย ซึ่งควรเฝ้าระวัง";
        risk2 = "เฝ้าระวัง";
        icon = "../assets/img/dt/2.png"
       
    } else if (riskDT > 4.00 && riskDT ) {
        risk = "มีการเปลี่ยนแปลงในทางที่แย่ลงมาก ต้องส่งคัดกรอง";
        icon = "../assets/img/dt/3.png"
        risk2 = "แย่ลงมาก";
    } 
    if (name==""|| phone=="" || dob=="" ) {
        document.querySelector("#showdata").innerHTML
            = ``;
    } else {
    
        if (riskDT >= 0) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            `
            <h2><center>ผลการประเมิน</center></h2> 
            ระดับความเสี่ยง : ${risk} <br>
            <img src= ${icon} style="width: 350px; height: 120px;>
            <h1> <span id="PRE" style="color:black;font-weight:bold; font-size: 35px;"><br>
            <a class="appointment-btn scrollto" href="https://aonanghospital.com/th/appointment.html" > นัดพบแพทย์</a> 
            `;
    
        } else {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` ผิดพลาด `;
        }
    }return risk2;
    };
    $(document).ready(function() {
        $("#btnSend").click(function() {


            let name = document.querySelector("#name").value;
            let phone = document.querySelector("#phone").value;
            let dob =  document.querySelector('input[name="dob"]').value;

        
            let statuss="";

            if (statuss == ""){
                if(name == ""){
                    statuss = "N";
                }
            }
            if (statuss == ""){
                if(phone == ""){
                    statuss = "N";
                }
            }
            if (statuss == ""){
                if(dob == "" ){
                    statuss = "N";
                }
            }

            if (statuss == ""){
             $.ajax({
               type: "POST",
               dataType: "json",
               url: "savedt.php",
               data:{ "name": $("input[name=name]").val(),
                      "nameF": $("input[name=name2]").val(),
                      "phone" : $("input[name=phone]").val(),
                      "email" : $("input[name=email]").val(),
                      "dob" : $("input[name=dob]").val(),
                      "sex" : $("input[name=sex]:checked").val(),
                      "rememF" : $("input[name=rememF]:checked").val(),
                      "rememWF" : $("input[name=rememWF]:checked").val(),
                      "rememH" : $("input[name=rememH]:checked").val(),
                      "canRu" : $("input[name=canRu]:checked").val(),
                      "canln" : $("input[name=canln]:checked").val(),
                      "canlb" : $("input[name=canlb]:checked").val(),
                      "canTra" : $("input[name=canTra]:checked").val(),
                      "canW" : $("input[name=canW]:checked").val(),
                      "risk" : calculate9(),
                      "time" :  getTimestamp(),
                      "action" : "appdt"
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
                    