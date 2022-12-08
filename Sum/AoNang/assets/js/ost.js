function ageCalculator() {
    var userinput = document.getElementById("dob").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') { 
      return false; 
    } else {
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    }return age
}
function getTimestamp () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
function calculate5() {
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let age = ageCalculator();
    let weight = document.querySelector("#weight").value;
    let dob =  document.querySelector('input[name="dob"]').value;
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let risk = "";
   


    let totalscore = 0.2*((weight) - (age));
        console.log(totalscore);
        console.log(weight)
        console.log(age);
        console.log(parseInt(totalscore));
        totalscore.toString();

    let icon = "";
    if (totalscore > -1) {
        risk = "ต่ำ";
        icon = "../assets/img/ost/1.png"
    } else if(totalscore >= -4 && totalscore <= -1) {
        risk = "ปานกลาง";
        icon = "../assets/img/ost/3.png"
    }else {
        risk = "สูง";
        icon = "../assets/img/ost/2.png"

    }
    if (name=="" || phone =="" || dob ==""){
        document.querySelector("#showdata").innerHTML
            = ``;
    } else {
        if (totalscore != null) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            `
            <h2><center>ผลการประเมิน</center></h2> 
            ระดับความเสี่ยง : <img src= ${icon} style="width: 300px; height: 80px;>
            <h1> <span id="PRE" style="color:black;font-weight:bold; font-size: 35px;"><br>
            <a class="appointment-btn scrollto" href="https://aonanghospital.com/th/appointment.html" > นัดพบแพทย์</a> 
            `;
        } 
    } return risk;
};
$(document).ready(function() {
    $("#btnSend").click(function() {

        let weight = document.querySelector("#weight").value;
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
            if( weight == ""){
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
              url: "saveost.php",
              data:{ "name": $("input[name=name]").val(),
                  "phone" : $("input[name=phone]").val(),
                  "email" : $("input[name=email]").val(),
                  "dob" : $("input[name=dob]").val(),
                  "sex" : $("input[name=sex]:checked").val(),
                  "weight" :  $("input[name=weight]").val(),
                  "time" : getTimestamp(),
                  "risk" : calculate5(),
                  "action" : "appost"
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