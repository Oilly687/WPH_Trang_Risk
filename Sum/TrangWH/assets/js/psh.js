function getTimestamp () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function calculate1() {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let age = document.querySelector('input[name="age"]:checked').value;
    let overS = document.querySelector('input[name="overS"]:checked').value;
    let lgg = document.querySelector('input[name="lgg"]:checked').value;
    let kam = document.querySelector('input[name="kam"]:checked').value;
    let dm = document.querySelector('input[name="dm"]:checked').value;
    let rk = document.querySelector('input[name="rk"]:checked').value;
    let psh = document.querySelector('input[name="psh"]:checked').value;
    let spsh = document.querySelector('input[name="spsh"]:checked').value;
    let exr = document.querySelector('input[name="exr"]:checked').value;
    let dob =  document.querySelector('input[name="dob"]').value;
    
    let risk = "";

    let scoreage=0;
    if(age =='ไม่ใช่'){
        scoreage = 0;
    }else if(age =='ใช่'){
        scorestr=1;
    }

    let scoreexr=0;
    if(exr =='ไม่ใช่'){
        scoreexr = 0;
    }else if(exr =='ใช่'){
        scoreexr=1;
    }

    let scoreOver=0;
    if(overS =='ไม่ใช่'){
        scoreOver = 0;
    }else if(overS =='ใช่'){
        scoreOver=1;
    }

    let scorelgg=0;
    if(lgg =='ไม่ใช่'){
        scorelgg = 0;
    }else if(lgg =='ใช่'){
        scorelgg=1;
    }

    let scorekam=0;
    if(kam =='ไม่ใช่'){
        scorekam = 0;
    }else if(kam =='ใช่'){
        scorekam=1;
    }

    let scoredm=0;
    if(dm =='ไม่ใช่'){
        scoredm = 0;
    }else if(dm =='ใช่'){
        scoredm=1;
    }

    let scorerk=0;
    if(rk =='ไม่ใช่'){
        scorerk = 0;
    }else if(rk =='ใช่'){
        scorerk=1;
    }

    let scorepsh=0;
    if(psh =='ไม่ใช่'){
        scorepsh = 0;
    }else if(psh =='ใช่'){
        scorepsh=2;
    }

    let scorespsh=0;
    if(spsh =='ไม่ใช่'){
        scorespsh = 0;
    }else if(spsh =='ใช่'){
        scorespsh=1;
    }
    
    let totalscore =
        parseFloat(scoreage) +
        parseFloat(scoreOver) +
        parseFloat(scorelgg) +
        parseFloat(scorekam)+
        parseFloat(scoredm)+
        parseFloat(scorerk)+
        parseFloat(scorepsh)+
        parseFloat(scorespsh)+
        parseFloat(scoreexr);

        console.log(totalscore);

    let icon = "";
    let risk2 = "";
    if (totalscore <= 0) {
        risk = "ไม่มีความเสี่ยงเป็นโรคความดันโลหิตสูง";
        risk2 = "ไม่เสี่ยง"
        icon = "../assets/img/psh/1.png"

    } else if (totalscore >  0 && totalscore <= 2) {
        risk = "อาจมีความเสี่ยงเป็นโรคความดันโลหิตสูง";
        risk2 = "เสี่ยง"
        cons = "";
        icon = "../assets/img/psh/2.png"
    } else if (totalscore > 2 ) {
        risk = "อาจเป็นโรคความดันโลหิตสูง แนะนำให้ปรึกษาแพทย์อายุรกรรมเพื่อตรวจคัดกรองโรค";
        icon = "../assets/img/psh/3.png"
        risk2 = "อาจเป็นโรคความโลหิตสูง"
    } 

    if (name == "" || phone == "" || dob == "") {
        document.querySelector("#showdata").innerHTML = ``;
    } else {
    
        if (totalscore >= 0) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            `
            <h2><center>ผลการประเมิน</center></h2> 
            ระดับความเสี่ยง : ${risk} <br>
            <img src= ${icon} style="width: 300px; height: 100px;>
            <span  style="color:black;font-weight:bold; font-size: 35px;"><br>
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
                  url: "savepsh.php",
                  data:{ 
                    "name": name,
                     "phone" : phone,
                     "email" : email,
                     "dob" : dob,
                     "sex" : $("input[name=sex]:checked").val(),
                     "age" : $("input[name=age]:checked").val(),
                     "overS" : $("input[name=overS]:checked").val(),
                     "lgg" : $("input[name=lgg]:checked").val(),
                     "kam" : $("input[name=kam]:checked").val(),
                     "exr" : $("input[name=exr]:checked").val(),
                     "dm" : $("input[name=dm]:checked").val(),
                     "psh" : $("input[name=psh]:checked").val(),
                     "rk" : $("input[name=rk]:checked").val(),
                     "spsh" : $("input[name=spsh]:checked").val(),
                     "time" : getTimestamp(),
                     "risk" : calculate1(),
                     "action" : "apppsh"
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
              