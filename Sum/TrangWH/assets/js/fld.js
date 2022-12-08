
function getTimestamp () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}


function calculate6() {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let stm = document.querySelector('input[name="stm"]:checked').value;
    let overS = document.querySelector('input[name="overS"]:checked').value;
    let wl = document.querySelector('input[name="wl"]:checked').value;
    let lip = document.querySelector('input[name="lip"]:checked').value;
    let cho = document.querySelector('input[name="cho"]:checked').value;
    let hdl = document.querySelector('input[name="hdl"]:checked').value;
    let dm = document.querySelector('input[name="dm"]:checked').value;
    let ps = document.querySelector('input[name="ps"]:checked').value;
    let dob =  document.querySelector('input[name="dob"]').value;
    
    let risk = "";
  

    let scorestm=0;
    if(stm =='ไม่ใช่'){
        scorestm = 0;
    }else if(stm =='ใช่'){
        scorestm=1;
    }

    let scoreovers=0;
    if(overS =='ไม่ใช่'){
        scoreovers = 0;
    }else if(overS =='ใช่'){
        scoreovers=1;
    }

    let scoredm=0;
    if(dm =='ไม่ใช่'){
        scoredm = 0;
    }else if(dm =='ใช่'){
        scoredm=1;
    }

    let scorewl=0;
    if(wl =='ไม่ใช่'){
        scorewl = 0;
    }else if(wl =='ใช่'){
        scorewl=1;
    }

    let scorelid=0;
    if(lip =='ไม่ใช่'){
        scorelid = 0;
    }else if(lip =='ใช่'){
        scorelid=1;
    }

    let scorecho=0;
    if(cho =='ไม่ใช่'){
        scorecho = 0;
    }else if(cho =='ใช่'){
        scorecho=1;
    }

    let scorehdl=0;
    if(hdl =='ไม่ใช่'){
        scorehdl = 0;
    }else if(hdl =='ใช่'){
        scorehdl=1;
    }

    let scoreps=0;
    if(ps =='ไม่ใช่'){
        scoreps = 0;
    }else if(ps =='ใช่'){
        scoreps=1;
    }

    // Input is string so typecasting is necessary. */
    let totalscore =
        parseFloat(scorehdl) +
        parseFloat(scorecho) +
        parseFloat(scoredm) +
        parseFloat(scorelid)+
        parseFloat(scoreovers)+
        parseFloat(scorewl)+
        parseFloat(scorestm)+
        parseFloat(scoreps);

    let icon = "";
    let risk2 = "";
    let con = "";
    if (totalscore <= 0) {
        risk = "ไม่มีความเสี่ยงเป็นโรคไขมันพอกตับ";
        risk2 = "ไม่เสี่ยง"
        icon = "../assets/img/fld/1.png"
        con = ""
  

    } else if (totalscore >  0 ) {
        risk = "อาจมีความเสี่ยงเป็นโรคไขมันพอกตับ";
        risk2 = "เสี่ยง"
        icon = "../assets/img/fld/2.png"
        con = "ข้อแนะนำพบแพทย์ระบบทางเดินอาหารเพื่อตรวจวินิจฉัยเพิ่มเติม"
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
               url: "savefld.php",
               data:{ "name": $("input[name=name]").val(),
                      "phone" : $("input[name=phone]").val(),
                      "email" : $("input[name=email]").val(),
                      "dob" : $("input[name=dob]").val(),
                      "sex" : $("input[name=sex]:checked").val(),
                      "stm" : $("input[name=stm]:checked").val(),
                      "overS" : $("input[name=overS]:checked").val(),
                      "wl" : $("input[name=wl]:checked").val(),
                      "lip" : $("input[name=lip]:checked").val(),
                      "cho" : $("input[name=cho]:checked").val(),
                      "hdl" : $("input[name=hdl]:checked").val(),
                      "dm" : $("input[name=dm]:checked").val(),
                      "ps" : $("input[name=ps]:checked").val(),
                      "time" : getTimestamp(),
                      "risk" : calculate6(),
                      "action" : "appfld"
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
            