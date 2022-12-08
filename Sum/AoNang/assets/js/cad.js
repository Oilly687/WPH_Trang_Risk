
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

function calculate10() {
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let smk = document.querySelector('input[name="smk"]:checked').value;
    let dm = document.querySelector('input[name="dm"]:checked').value;
    let age = ageCalculator();
    
    let cholesterol = document.querySelector("#cholesterol").value;
    let dob =  document.querySelector('input[name="dob"]').value;
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let sbp = document.querySelector("#SBP").value;
    let risk = "";


    if(cholesterol != ""){
        //อายุ 70  160-200
        if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงมาก";

        //อายุ 70  200-240
        }else  if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
        //อายุ 70  240-280

        if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 

        //อายุ 70  280-320
        if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูงมาก";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
        //อายุ 70  >320
        if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูงอันตราย";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else



        //อายุ 70 ไม่สูบบุหรี่
        if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูง";

        //อายุ 70  200-240
        }else  if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูง";
        }else 
        
        //อายุ 70  240-280

        if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงมาก";
        }else 

        //อายุ 70  280-320
        if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
        //อายุ 70  >320
        if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else

        //-------------------------------------------------------------------------------อายุ 60 ไม่เป็นเบาหวาน-----------------------------------------------------------------------------//

        
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงมาก";

        
        }else  if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
       

        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 

        
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูงมาก";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
        
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูงอันตราย";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else


        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูง";

       
        }else  if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูง";
        }else 
        
        

        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงมาก";
        }else 

       
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
        
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&&age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูงมาก";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else

        //-----------------------------------------------------------------------------อายุ 50 ---------------------------------------------------------------------------------------------//

        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูง";

        
        }else 
         if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงมาก";
        }else 
        
       

        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 

        
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูงมาก";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
        
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูงอันตราย";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else


        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="ปานกลาง";

       
        }else  if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูง";
        }else 
        
        

        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูง";
        }else 

       
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
        
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูงมาก";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else

        //-------------------------------------------------------------------------------------อายุ 40 ปี เพศชาย ----------------------------------------------------------------------------//



        if(sex=="ชาย"&& age < 50  && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูง";

        
        }else  if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงมาก";
        }else 
        
       

        if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 

        
        if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
        
        if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูงอันตราย";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else


        if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="ปานกลาง";

       
        }else  if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="ปานกลาง";
        }else 
        
        

        if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูง";
        }else 

       
        if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else 
        
        
        if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
            risk="ปานกลาง";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
            risk="สูง";
        }else 
        if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
            risk="สูงอันตราย";
        }else

        //----------------------------------------------------------------------------ผู้หญิง----------------------------------------------------------------------------------------------//

            //อายุ 70  160-200
        if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
    
            //อายุ 70  200-240
            }else  if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            //อายุ 70  240-280
    
            if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            //อายุ 70  280-320
            if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            //อายุ 70  >320
            if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "สูง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงมาก";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
    
    
            //อายุ 70 ไม่สูบบุหรี่
            if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูง";
    
            //อายุ 70  200-240
            }else  if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงมาก";
            }else 
            
            //อายุ 70  240-280
    
            if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            //อายุ 70  280-320
            if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            //อายุ 70  >320
            if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
            //-------------------------------------------------------------------------------อายุ 60 ไม่เป็นเบาหวาน-----------------------------------------------------------------------------//
    
            
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
    
            
            }else  if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
           
    
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "สูง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงมาก";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
    
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูง";
    
           
            }else  if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงมาก";
            }else 
            
            
    
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
           
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="หญิง"&&age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
            //-----------------------------------------------------------------------------อายุ 50 ---------------------------------------------------------------------------------------------//
    
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงมาก";
    
            
            }else  if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
           
    
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
    
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูง";
    
           
            }else  if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงมาก";
            }else 
            
            
    
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
           
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
            //-------------------------------------------------------------------------------------อายุ 40 ปี เพศหญิง ----------------------------------------------------------------------------//
    
    
    
            if(sex=="หญิง"&& age < 50  && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงมาก";
    
            
            }else  if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
           
    
            if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            
            if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
    
            if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="ปานกลาง";
    
           
            }else  if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูง";
            }else 
            
            
    
            if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
           
            if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
            //------------------------------------------------------------------เป็นเบาหวาน-----------------------------------------------------------------------------------------------//
            
            if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
    
            //อายุ 70  200-240
            }else  if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            //อายุ 70  240-280
    
            if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "สูง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            //อายุ 70  280-320
            if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "สูง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            //อายุ 70  >320
            if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
    
    
            //อายุ 70 ไม่สูบบุหรี่
            if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
    
            //อายุ 70  200-240
            }else  if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            //อายุ 70  240-280
    
            if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            //อายุ 70  280-320
            if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            //อายุ 70  >320
            if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "สูง";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
            //-------------------------------------------------------------------------------อายุ 60 ไม่เป็นเบาหวาน-----------------------------------------------------------------------------//
    
            
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
    
            
            }else  if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
           
    
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "สูง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
    
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงมาก";
    
           
            }else  if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
    
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
           
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="ชาย"&&age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
            //-----------------------------------------------------------------------------อายุ 50 ---------------------------------------------------------------------------------------------//
    
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
    
            
            }else 
             if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
           
    
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงมาก";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "สูง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
    
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูง";
    
           
            }else  if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงมาก";
            }else 
            
            
    
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
           
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ปานกลาง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
            //-------------------------------------------------------------------------------------อายุ 40 ปี เพศชาย ----------------------------------------------------------------------------//
    
    
    
            if(sex=="ชาย"&& age < 50  && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
    
            
            }else  if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
           
    
            if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
            
            if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "สูง";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
    
            if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูง";
    
           
            }else  if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงมาก";
            }else 
            
            
    
            if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="ปานกลาง";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
    
           
            if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else 
            
            
            if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                risk = "ต่ำ";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                risk="สูง";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                risk="สูงอันตราย";
            }else 
            if(sex=="ชาย"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                risk="สูงอันตราย";
            }else
    
            //----------------------------------------------------------------------------ผู้หญิง----------------------------------------------------------------------------------------------//
    
                //อายุ 70  160-200
            if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
        
                //อายุ 70  200-240
                }else  if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                //อายุ 70  240-280
        
                if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
        
                //อายุ 70  280-320
                if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                //อายุ 70  >320
                if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else
        
        
        
                //อายุ 70 ไม่สูบบุหรี่
                if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
        
                //อายุ 70  200-240
                }else  if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                //อายุ 70  240-280
        
                if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
        
                //อายุ 70  280-320
                if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                //อายุ 70  >320
                if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูง";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else
        
                //-------------------------------------------------------------------------------อายุ 60 เป็นเบาหวาน-----------------------------------------------------------------------------//
        
                
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
        
                
                }else  if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
               
        
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
        
                
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else
        
        
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงมาก";
        
               
                }else  if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                
        
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
        
               
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูง";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&&age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 60 && age <70 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else
        
                //-----------------------------------------------------------------------------อายุ 50 ---------------------------------------------------------------------------------------------//
        
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
        
                
                }else  if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
               
        
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
        
                
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else
        
        
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงมาก";
        
               
                }else  if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                
        
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
        
               
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูง";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age >= 50 && age <60 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else
        
                //-------------------------------------------------------------------------------------อายุ 40 ปี เพศหญิง ----------------------------------------------------------------------------//
        
        
        
                if(sex=="หญิง"&& age < 50  && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
        
                
                }else  if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
               
        
                if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
        
                
                if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ปานกลาง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                
                if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else
        
        
                if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol < 200  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงมาก";
        
               
                }else  if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol >= 200 && cholesterol <= 240   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                
        
                if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="ปานกลาง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงมาก";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 240 && cholesterol <= 280   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
        
               
                if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "ต่ำ";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 280 && cholesterol <= 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }else 
                
                
                if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
                    risk = "สูง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160){
                    risk="สูง";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180){
                    risk="สูงอันตราย";
                }else 
                if(sex=="หญิง"&& age < 50 && cholesterol > 320   && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180){
                    risk="สูงอันตราย";
                }   
     }else{

        if(sex=="ชาย"&& age >= 70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูง";
        }else
        if(sex=="ชาย"&& age >= 70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูง";
        }else
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age < 50  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ต่ำ";
        }else
        if(sex=="ชาย"&& age < 50  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูง";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "สูง";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age >= 70  && smk=="ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูงมาก";
        }else
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูง";
        }else
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age < 50  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="ชาย"&& age < 50  && smk=="ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age >= 70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูง";
        }else
        if(sex=="หญิง"&& age >= 70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูง";
        }else
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age < 50  && smk=="ไม่ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age < 50  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age < 50  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ต่ำ";
        }else
        if(sex=="หญิง"&& age < 50  && smk=="ไม่ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงมาก";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "สูง";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age >= 70  && smk=="ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "สูง";
        }else 
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูง";
        }else
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age < 50  && smk=="ใช่" && dm=="ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age < 50  && smk=="ใช่" && dm=="ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age < 50  && smk=="ใช่" && dm=="ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="หญิง"&& age < 50  && smk=="ใช่" && dm=="ใช่" && sbp >= 180 ){
            risk = "สูงมาก";
        }else
        //----------------------------------------------------------------------------ไม่เป็นเบาหวาน-------------------------------------------------------------------------------------//
        if(sex=="ชาย"&& age >= 70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="ชาย"&& age >= 70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูง";
        }else
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูง";
        }else
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ต่ำ";
        }else
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูง";
        }else
        if(sex=="ชาย"&& age < 50  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ต่ำ";
        }else
        if(sex=="ชาย"&& age < 50  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="ชาย"&& age >= 70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูง";
        }else
        if(sex=="ชาย"&& age >= 70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="ชาย"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="ชาย"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="ชาย"&& age < 50  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="ชาย"&& age < 50  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ต่ำ";
        }else
        if(sex=="ชาย"&& age < 50  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูงมาก";
        }else
        if(sex=="หญิง"&& age >= 70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="หญิง"&& age >= 70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูง";
        }else
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูง";
        }else
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ต่ำ";
        }else
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูง";
        }else
        if(sex=="หญิง"&& age < 50  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age < 50  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age < 50  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ต่ำ";
        }else
        if(sex=="หญิง"&& age < 50  && smk=="ไม่ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="หญิง"&& age >= 70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูง";
        }else
        if(sex=="หญิง"&& age >= 70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ปานกลาง";
        }else 
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "สูง";
        }else
        if(sex=="หญิง"&& age >= 60 && age <70  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ปานกลาง";
        }else
        if(sex=="หญิง"&& age >= 50 && age <60  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูงอันตราย";
        }else
        if(sex=="หญิง"&& age < 50  && smk=="ใช่" && dm=="ไม่ใช่" && sbp < 140 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age < 50  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 140 && sbp < 160 ){
            risk = "ต่ำ";
        }else 
        if(sex=="หญิง"&& age < 50  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 160 && sbp < 180 ){
            risk = "ต่ำ";
        }else
        if(sex=="หญิง"&& age < 50  && smk=="ใช่" && dm=="ไม่ใช่" && sbp >= 180 ){
            risk = "สูง";
        }
     }

     if(risk=="ต่ำ"){
         icon = "../assets/img/cad/1.png";
     }else
     if(risk=="ปานกลาง"){
        icon = "../assets/img/cad/2.png";
     }else
     if(risk=="สูง"){
        icon = "../assets/img/cad/3.png";
     }else
     if(risk=="สูงมาก"){
        icon = "../assets/img/cad/4.png";
     }else
     if(risk=="สูงอันตราย"){
        icon = "../assets/img/cad/5.png";
     }
     

   
    if (name=="" || phone =="" || dob =="" || sbp ==""){
        document.querySelector("#showdata").innerHTML
            = ``;
    } else {
         {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            `
            <h2><center>ผลการประเมิน</center></h2> 
            ระดับความเสี่ยง : ${risk} <br>
            <img src= ${icon} style="width: 250px; height: 100px;>
            <span id="PRE" style="color:black;font-weight:bold; font-size: 35px;"><br>
            <a class="appointment-btn scrollto" href="https://aonanghospital.com/th/appointment.html" > นัดพบแพทย์</a> 
            `;
        } 
    } return risk;
};
    $(document).ready(function() {
        $("#btnSend").click(function() {

            let name = document.querySelector("#name").value;
            let phone = document.querySelector("#phone").value;
            let sbp = document.querySelector("#SBP").value;
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
                if( sbp == ""){
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
                  url: "savecad.php",
                  dataType: "json",
                  data:{ "name": $("input[name=name]").val(),
                      "phone" : $("input[name=phone]").val(),
                      "email" : $("input[name=email]").val(),
                      "dob" : $("input[name=dob]").val(),
                      "sex" : $("input[name=sex]:checked").val(),
                      "sbp" :  $("input[name=SBP]").val(),
                      "cholesterol" :  $("input[name=cholesterol]").val(),
                      "dm" : $("input[name=dm]:checked").val(),
                      "smk" : $("input[name=smk]:checked").val(),
                      "time" : getTimestamp(),
                      "risk" : calculate10(),
                      "action" : "appcad"
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
                   