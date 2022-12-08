
function getTimestamp () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

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


function calculate4() {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let sgc = document.querySelector('input[name="sgc"]:checked').value;
    let dlsk = document.querySelector('input[name="dlsk"]:checked').value;
    let devf = document.querySelector('input[name="devf"]:checked').value;
    let epy = document.querySelector('input[name="epy"]:checked').value;
    let sbh = document.querySelector('input[name="sbh"]:checked').value;
    let overS = document.querySelector('input[name="overS"]:checked').value;
    let sg = document.querySelector('input[name="sg"]:checked').value;
    let rk = document.querySelector('input[name="rk"]:checked').value;
    let dob =  document.querySelector('input[name="dob"]').value;
    let gender = document.querySelector('input[name="sex"]:checked').value;
    let age = ageCalculator();

    let risk = "";

    let scoresex=0;
    if(gender =='ชาย'){
        scoresex = 1;
    }else if(gender =='หญิง'){
        scoresex=0;
    }

    let scoreage=0;
    if(age > 50){
        scoreage = 1;
    }else if(age < 50){
        scoreage=0;
    }
  

    let scoresgC=0;
    if(sgc == "ไม่ใช่"){
        scoresgC=0;
    }else{
        scoresgC=1;
    }

    console.log(sgc);

    let scoredlsk=0;
    if(dlsk =='ไม่ใช่'){
        scoredlsk = 0;
    }else if(dlsk =='ใช่'){
        scoredlsk=1;
    }

    let scoredevf=0;
    if(devf =='ไม่ใช่'){
        scoredevf = 0;
    }else if(devf =='ใช่'){
        scoredevf=1;
    }

    let scoreepy=0;
    if(epy =='ไม่ใช่'){
        scoreepy = 0;
    }else if(epy =='ใช่'){
        scoreepy=1;
    }

    let scoresbh=0;
    if(sbh =='ไม่ใช่'){
        scoresbh = 0;
    }else if(sbh =='ใช่'){
        scoresbh=1;
    }

    let scoreO=0;
    if(overS =='ไม่ใช่'){
        scoreO = 0;
    }else if(overS =='ใช่'){
        scoreO=1;
    }

    let scoresg=0;
    if(sg =='ไม่ใช่'){
        scoresg = 0;
    }else if(sg =='ใช่'){
        scoresg=1;
    }

    let scorerk=0;
    if(rk =='ไม่ใช่'){
        scorerk = 0;
    }else if(rk =='ใช่'){
        scorerk=1;
    }

    let totalscore =
        parseFloat(scoresex) +
        parseFloat(scoreage) +
        parseFloat(scoredlsk) +
        parseFloat(scoresgC)+
        parseFloat(scoredevf)+
        parseFloat(scoreepy)+
        parseFloat(scoresbh)+
        parseFloat(scoreO)+
        parseFloat(scoresg)+
        parseFloat(scorerk);

        console.log(totalscore);

    let icon = "";
    let risk2 = "";
    let con = "";
    if (totalscore == 0) {
        risk = "ไม่มีความเสี่ยงมะเร็งกระเพาะอาหาร";
        risk2 = "ไม่เสี่ยง";
        icon = "../assets/img/gc/1.png";
        con = "";
  

    } else if (totalscore >  0 && totalscore <= 2) {
        risk = "อาจมีความเสี่ยงมะเร็งกระเพาะอาหาร";
        risk2 = "เสี่ยง";
        icon = "../assets/img/gc/2.png";
        con = "แนะนำตรวจสุขภาพคัดกรองมะเร็งกระเพาะอาหาร";
    } else if (totalscore > 2) {
        risk = "อาจมีความเสี่ยงมะเร็งกระเพาะอาหาร";
        risk2 = "เสี่ยง";
        icon = "../assets/img/gc/2.png";
        con = "แนะนำให้ปรึกษาแพทย์อายุระกรรมทางเดินอาหารเพื่อคัดกรอง";
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
            <img src= ${icon} style="width: 250px; height: 90px;>
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
            let dob =  document.querySelector("#dob").value;
            let email = document.querySelector("#email").value;

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
               url: "savegc.php",
               data:{ "name": name,
                     "phone" : phone,
                     "email" : email,
                     "dob" : dob,
                      "sex" : $("input[name=sex]:checked").val(),
                      "sgc" : $("input[name=sgc]:checked").val(),
                      "dlsk" : $("input[name=dlsk]:checked").val(),
                      "devf" : $("input[name=devf]:checked").val(),
                      "epy" : $("input[name=epy]:checked").val(),
                      "sbh" : $("input[name=sbh]:checked").val(),
                      "overS" : $("input[name=overS]:checked").val(),
                      "sg" : $("input[name=sg]:checked").val(),
                      "rk" : $("input[name=rk]:checked").val(),
                      "time" : getTimestamp(),
                      "risk" : calculate4(),
                      "action" : "appgc"
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