
function getTimestamp () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}


function calculate2() {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let amp = document.querySelector('input[name="amp"]:checked').value;
    let sk = document.querySelector('input[name="sk"]:checked').value;
    let dm = document.querySelector('input[name="dm"]:checked').value;
    let cal = document.querySelector('input[name="cal"]:checked').value;
    let overS = document.querySelector('input[name="overS"]:checked').value;
    let sst = document.querySelector('input[name="sst"]:checked').value;
    let cadi = document.querySelector('input[name="cadi"]:checked').value;
    let ps = document.querySelector('input[name="ps"]:checked').value;
    let dob =  document.querySelector('input[name="dob"]').value;
    
    let risk = "";
  

    let scoreamp=0;
    if(amp =='ไม่ใช่'){
        scoreamp = 0;
    }else if(amp =='ใช่'){
        scoreamp=1;
    }

    let scoresk=0;
    if(sk =='ไม่ใช่'){
        scoresk = 0;
    }else if(sk =='ใช่'){
        scoresk=1;
    }

    let scoredm=0;
    if(dm =='ไม่ใช่'){
        scoredm = 0;
    }else if(dm =='ใช่'){
        scoredm=1;
    }

    let scorecal=0;
    if(cal =='ไม่ใช่'){
        scorecal = 0;
    }else if(cal =='ใช่'){
        scorecal=1;
    }

    let scoreovers=0;
    if(overS =='ไม่ใช่'){
        scoreovers = 0;
    }else if(overS =='ใช่'){
        scoreovers=1;
    }

    let scoresst=0;
    if(sst =='ไม่ใช่'){
        scoresst = 0;
    }else if(sst =='ใช่'){
        scoresst=1;
    }

    let scorecadi=0;
    if(cadi =='ไม่ใช่'){
        scorecadi = 0;
    }else if(cadi =='ใช่'){
        scorecadi=1;
    }

    let scoreps=0;
    if(ps =='ไม่ใช่'){
        scoreps = 0;
    }else if(ps =='ใช่'){
        scoreps=1;
    }

    // Input is string so typecasting is necessary. */
    let totalscore =
        parseFloat(scoreamp) +
        parseFloat(scoresk) +
        parseFloat(scoredm) +
        parseFloat(scorecal)+
        parseFloat(scoreovers)+
        parseFloat(scoresst)+
        parseFloat(scorecadi)+
        parseFloat(scoreps);

        console.log(totalscore);

    let icon = "";
    let risk2 = "";
    if (totalscore <= 0) {
        risk = "ไม่มีความเสี่ยงเป็นโรคหลอดเลือดสมอง";
        risk2 = "ไม่เสี่ยง"
        icon = "../assets/img/str/1.png"

    } else if (totalscore >  0 && totalscore <= 2) {
        risk = "มีความเสี่ยง";
        risk2 = "เสี่ยง"
        icon = "../assets/img/str/2.png"
    } else if (totalscore > 2 && totalscore <= 5 ) {
        risk = "มีความเสี่ยงสูงระดับปานกลาง";
        icon = "../assets/img/str/3.png"
        risk2 = "เสี่ยงปานกลาง";
       
       
    } else if (totalscore > 5 ) {
        risk = "มีความเสี่ยงสูงระดับสูงมาก";
        icon = "../assets/img/str/4.png"
        risk2 = "เสี่ยงสูง";
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
            <img src= ${icon} style="width: 300px; height: 100px;> <br>
            <span id="PRE" style="color:black;font-weight:bold; font-size: 35px;"><br> <br>
            <a class="appointment-btn scrollto" href="https://wattanapat.co.th/healthcheckup/Reservation" > นัดหมายตรวจสุขภาพ</a> 
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
               url: "savestr.php",
               data:{ "name": name,
                      "phone" :phone,
                      "email" : email,
                      "dob" : dob,
                      "sex" : $("input[name=sex]:checked").val(),
                      "amp" : $("input[name=amp]:checked").val(),
                      "sk" : $("input[name=sk]:checked").val(),
                      "ps" : $("input[name=ps]:checked").val(),
                      "dm" : $("input[name=dm]:checked").val(),
                      "cal" : $("input[name=cal]:checked").val(),
                      "overS" : $("input[name=overS]:checked").val(),
                      "sst" : $("input[name=sst]:checked").val(),
                      "cadi" : $("input[name=cadi]:checked").val(),
                      "time" : getTimestamp(),
                      "risk" : calculate2(),
                      "action" : "appstr"
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