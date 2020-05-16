window.addEventListener("load", function(){


    function getid(id){
       return document.getElementById(id);
    }
    let form1 = document.form1;
    let form2 = document.form2;
    let main = getid("main");
    let btn = getid("btn");
    let number = 0;
    let fail = getid("fail");
    let ok = getid("ok");
    let cancel_img = getid("cancel");
    let cancel_text = getid("cancel-text");
    let text = getid("3-1");
    let answerBlock = getid("answer-block");

    
    
    
    let arr = [
     form1.question1,
     form1.question2,
     form2.question4,
     form2.question5,
     form2.question6,
     form2.question7,
     form2.question8,
     form2.question9,
     form2.question10,
     form2.question11,
     form2.question12,
     form2.question13,
     form2.question14,
     form2.question15
    ]
    
    
    
    
    
   
    
    
    text.addEventListener("change", function(){
        if(text.value > 200 || text.value < 40){
            text.value = 0;
        }
        if(text.value != 0){
            ok.style.display = "inline-block";
            cancel_img.style.display = "none";
            cancel_text.style.visibility = "hidden";
        }
        if(text.value == 0){
            cancel_img.style.display = "inline-block";
            ok.style.display = "none";
            cancel_text.style.visibility = "visible";
        }
        
    });
    
    
    

    btn.onclick = function(){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].value != false){
                number = 0;
                
            }
            else{
                number = 1;
                break
            }
        }
       if(number == 0 && (text.value != 0 && text.value != false && text.value != undefined)){
           main.style.display = "none";
           answerBlock.style.display = "block";
           







           
           
        }
        else{
            fail.style.visibility = "visible";
        }
        
    }

});    