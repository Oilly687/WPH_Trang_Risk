
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

function calculate(){
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let pressure = document.querySelector('input[name="pressure"]:checked').value;
    let str = document.querySelector('input[name="str"]:checked').value;
    let age = ageCalculator();
    
    let weight = document.querySelector("#weight").value;
    let dob =  document.querySelector('input[name="dob"]').value;
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let height = document.querySelector("#height").value;
    let waistline = document.querySelector("#waistline").value;
    let risk = "";
    let risk12y = "";
    let DMdetect = "";
    let cons = "";



    let bmii =0;
    let height2 = height/100
    bmii = weight / (height2*height2)
    console.log(bmii)
    

    let scoreage=0;
    if(age<44){
        scoreage = 0;
    }else if(age>44 && age<50){
        scoreage = 1;
    }else if(age>50){
        scoreage = 2;
    }
    let scoresex=0;
    if(sex=='ชาย'){
        scoresex = 2;
    }else if(sex=='หญิง'){
        scoresex== 0;
    }
    let scorebmi = 0;
    if(bmii<23.00){
        scorebmi = 0;
    }else if(bmii>23.00 && bmii<=27.50){
        scorebmi = 3;
    }else if(bmii>27.50){
        scorebmi= 5;
    }
    let scorewaistline = 0;
    if(sex=='หญิง'&&waistline<80){
        scorewaistline = 0;
    }else if(sex=='หญิง'&&waistline>80){
        scorewaistline = 2;
    }else if(sex=='ชาย'&& waistline<90){
        scorewaistline = 0;
    }else if(sex=='ชาย'&& waistline>90){
        scorewaistline = 2;
    }
    let scorepressure = 0;
    if(pressure=='ไม่มี'){
        scorepressure=0;
    }else if(pressure=='มี'){
        scorepressure=2;
    }
    let scorestr=0;
    if(str=='ไม่มี'){
        scorestr = 0;
    }else if(str=='มี'){
        scorestr=4;
    }

    let totalscore =
        parseFloat(scorestr) +
        parseFloat(scorewaistline) +
        parseFloat(scoresex) +
        parseFloat(scorepressure)+
        parseFloat(scorebmi)+
        parseFloat(scoreage);
    let icon = "";
    if (totalscore <= 2) {
        risk = "น้อย";
        risk12y = "น้อยกว่าร้อยละ 5";
        DMdetect = "1/20";
        cons = "ออกกำลังกายสม่ำเสมอ ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม ตรวจความดันโลหิต ควรประเมินความเสี่ยงซ้ำทุก 3 ปี";
        icon = "../assets/img/dm/1.png"

    } else if (totalscore > 2 && totalscore <6) {
        risk = "ปานกลาง";
        risk12y = "ร้อยละ 5-10";
        DMdetect = "1/12";
        cons = "ออกกำลังกายสม่ำเสมอ ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม ตรวจความดันโลหิต ควรประเมินความเสี่ยงซ้ำทุก 1-3 ปี";
        icon = "../assets/img/dm/2.png"
       
    } else if (totalscore > 5 && totalscore <8) {
        risk = "สูง";
        risk12y = "ร้อยละ 11-20";
        DMdetect = "1/7";
        cons = "ออกกำลังกายสม่ำเสมอ ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม ตรวจความดันโลหิต ตรวจระดับน้ำตาลในเลือด ควรประเมินความเสี่ยงซ้ำทุก 1-3 ปี";
        icon = "../assets/img/dm/3.png"
        
    } else if (totalscore >=8) {
        risk = "สูงมาก";
        risk12y = "มากกว่าร้อยละ 20";
        DMdetect = "1/3-1/4";
        cons = "ควบคุมอาหารและออกกำลังกายสม่ำเสมอ ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม ตรวจความดันโลหิต ตรวจระดับน้ำตาลในเลือด ควรประเมินความเสี่ยงซ้ำทุก 1 ปี";
        icon = "../assets/img/dm/4.png"
        
    }
    if (name=="" || phone =="" || dob =="" || waistline=="" || weight==""){
        document.querySelector("#showdata").innerHTML
            = ``;
    } else {
        if (totalscore >= 0) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            `
            <h2><center>ผลการประเมิน</center></h2> 
            ระดับความเสี่ยง : <img src= ${icon} style="width: 300px; height: 100px;>
            <h1> <span id="PRE" style="color:black;font-weight:bold; font-size: 35px;"><br>
            ความเสี่ยงต่อเบาหวานใน 12 ปี : ${risk12y} <br>
            โอกาสเกิดเบาหวาน : ${DMdetect}  <br>
            ข้อแนะนำ : ${cons}<br>
            <a class="appointment-btn scrollto" href="https://wattanapat.co.th/healthcheckup/Reservation" > นัดหมายตรวจสุขภาพ</a> 
            `;
        } 
    } return risk;
};
    $(document).ready(function() {
        $("#btnSend").click(function() {

            let weight = document.querySelector("#weight").value;
            let name = document.querySelector("#name").value;
            let phone = document.querySelector("#phone").value;
            let height = document.querySelector("#height").value;
            let waistline = document.querySelector("#waistline").value;
            let dob =  document.querySelector("#dob").value;
            let email = document.querySelector("#email").value;
            console.log(waistline,weight,phone,name,dob)

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
                if( waistline == ""){
                    status = "N";
                }
            }

            if (status == ""){
                if( height == ""){
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
                  url: "savedm.php",
                  data:{ "name": name,
                      "phone" : phone,
                      "email" : email,
                      "dob" : dob,
                      "sex" : $("input[name=sex]:checked").val(),
                      "weight" :  $("input[name=weight]").val(),
                      "height" :  $("input[name=height]").val(),
                      "waistline" :  $("input[name=waistline]").val(),
                      "str" : $("input[name=str]:checked").val(),
                      "pressure" : $("input[name=pressure]:checked").val(),
                      "time" : getTimestamp(),
                      "risk" : calculate(),
                      "action" : "appdm"
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
               