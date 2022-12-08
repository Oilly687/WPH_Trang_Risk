
function getTimestamp () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}


function calculate3() {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let amage50  = document.querySelector('input[name="age50"]:checked').value;
    let aub = document.querySelector('input[name="aub"]:checked').value;
    let pau = document.querySelector('input[name="pau"]:checked').value;
    let aup = document.querySelector('input[name="aup"]:checked').value;
    let rj = document.querySelector('input[name="rj"]:checked').value;
    let kg = document.querySelector('input[name="kg"]:checked').value;
    let ta = document.querySelector('input[name="ta"]:checked').value;
    let scc = document.querySelector('input[name="scc"]:checked').value;
    let cks = document.querySelector('input[name="cks"]:checked').value;
    let stc = document.querySelector('input[name="stc"]:checked').value;
    let dm = document.querySelector('input[name="dm"]:checked').value;
    let overS = document.querySelector('input[name="overS"]:checked').value;
    let lih = document.querySelector('input[name="lih"]:checked').value;
    let epy = document.querySelector('input[name="epy"]:checked').value;
    let dlg = document.querySelector('input[name="dlg"]:checked').value;
    let dob =  document.querySelector('input[name="dob"]').value;
    
    let risk = "";
  

    let scoreage50 = 0;
    if(amage50 =='ไม่ใช่'){
        scoreage50 = 0;
    }else if(amage50 =='ใช่'){
        scoreage50=1;
    }

    let scoreaub=0;
    if(aub =='ไม่ใช่'){
        scoreaub = 0;
    }else if(aub =='ใช่'){
        scoreaub=10;
    }

    let scorepau=0;
    if(pau =='ไม่ใช่'){
        scorepau = 0;
    }else if(pau =='ใช่'){
        scorepau=10;
    }

    let scoreaup=0;
    if(aup =='ไม่ใช่'){
        scoreaup = 0;
    }else if(aup =='ใช่'){
        scoreaup=10;
    }

    let scorerj=0;
    if(rj =='ไม่ใช่'){
        scorerj = 0;
    }else if(rj =='ใช่'){
        scorerj=10;
    }

    let scoreskg=0;
    if(kg =='ไม่ใช่'){
        scoreskg = 0;
    }else if(kg =='ใช่'){
        scoreskg=10;
    }

    let scoreta=0;
    if(ta =='ไม่ใช่'){
        scoreta = 0;
    }else if(ta =='ใช่'){
        scoreta=1;
    }

    let scorescc=0;
    if(scc =='ไม่ใช่'){
        scorescc = 0;
    }else if(scc =='ใช่'){
        scorescc=1;
    }

    let scorecks=0;
    if(cks =='ไม่ใช่'){
        scoreaub = 0;
    }else if(cks =='ใช่'){
        scorecks=1;
    }

    let scorestc=0;
    if(stc =='ไม่ใช่'){
        scorestc = 0;
    }else if(stc =='ใช่'){
        scorestc=2;
    }

    let scoredm=0;
    if(dm =='ไม่ใช่'){
        scoredm = 0;
    }else if(dm =='ใช่'){
        scoredm=1;
    }

    let scoreover=0;
    if(overS =='ไม่ใช่'){
        scoreover = 0;
    }else if(overS =='ใช่'){
        scoreover=1;
    }

    let scorelih=0;
    if(lih =='ไม่ใช่'){
        scorelih = 0;
    }else if(lih =='ใช่'){
        scorelih=1;
    }

    let scoreepy =0;
    if(epy == 'ไม่ใช่'){
        scoreepy = 0;
    }else{
        scoreepy = 1;
    }

    let scoredlg=0;
    if(dlg =='ไม่ใช่'){
        scoredlg = 0;
    }else if(dlg =='ใช่'){
        scoredlg=1;
    }


    // Input is string so typecasting is necessary. */
    let totalscore =
        parseFloat(scoreage50) +
        parseFloat(scoreaub)+
        parseFloat(scorepau) +
        parseFloat(scoreaup)+
        parseFloat(scorerj)+
        parseFloat(scoreskg)+
        parseFloat(scoreta)+
        parseFloat(scorescc)+
        parseFloat(scorecks)+
        parseFloat(scorestc)+
        parseFloat(scoredm) +
        parseFloat(scoreover)+
        parseFloat(scorelih)+
        parseFloat(scoreepy)+
        parseFloat(scoredlg);

        console.log(totalscore);

    let icon = "";
    let risk2 = "";
    if (totalscore <= 0) {
        risk = "ไม่มีความเสี่ยงเป็นโรคมะเร็งลำไส้ใหญ่";
        risk2 = "ไม่เสี่ยง"
        icon = "../assets/img/cc/1.png"

    } else if (totalscore >  0 && totalscore <= 9) {
        risk = "อาจมีความเสี่ยงเป็นโรคมะเร็งลำไส้ใหญ่ แนะนำตรวจสุขภาพคัดกรองมะเร็งลำไส้เป็นประจำทุกปี";
        risk2 = "อาจเสี่ยง"
        icon = "../assets/img/cc/2.png"
    } else if (totalscore > 9 ) {
        risk = "มีความเสี่ยงเป็นโรคมะเร็งลำไส้ใหญ่ แนะนำให้ปรึกษาแพทย์อายุรกรรมทางเดินอาหารเพื่อตรวจคัดกรอง";
        icon = "../assets/img/cc/3.png"
        risk2 = "เสี่ยง";
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
            <img src= ${icon} style="width: 350px; height: 100px;>
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
               url: "savecc.php",
               dataType: "json",
               data:{ "name": name,
                      "phone" :phone,
                      "email" : email,
                      "dob" : dob,
                      "sex" : $("input[name=sex]:checked").val(),
                      "age50" : $("input[name=age50]:checked").val(),
                      "aub" : $("input[name=aub]:checked").val(),
                      "pau" : $("input[name=pau]:checked").val(),
                      "aup" : $("input[name=aup]:checked").val(),
                      "rj" : $("input[name=rj]:checked").val(),
                      "kg" : $("input[name=kg]:checked").val(),
                      "ta" : $("input[name=ta]:checked").val(),
                      "cks" : $("input[name=cks]:checked").val(),
                      "stc" : $("input[name=stc]:checked").val(),
                      "dm" : $("input[name=dm]:checked").val(),
                      "overS" : $("input[name=overS]:checked").val(),
                      "lih" : $("input[name=lih]:checked").val(),
                      "epy" : $("input[name=epy]:checked").val(),
                      "dlg" : $("input[name=dlg]:checked").val(),
                      "time" : getTimestamp(),
                      "risk" : calculate3(),
                      "scc" : $("input[name=scc]:checked").val(),
                      "action" : "appcc"
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
                   