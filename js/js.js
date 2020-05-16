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
    let points = 0;
    let answer = getid("answer");
    let answer2 = getid("answer2");
    let anwser_text = "";
    let recommendations = "";

    
    
    
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
           answer_generation();
           

        }
        else{
            fail.style.visibility = "visible";
        }
        
    }

    document.getElementById("reload").onclick = function(){
        location.reload();
    }



    let answer_generation = function(){
        if(form1.question1.value == 1){
            men();
            
           
        }
        else if(form1.question1.value == 2){
            woman();
        }

        for(let j = 2; j < arr.length; j++){
            points += +arr[j].value;
        }

        if(points >= 65){
            answer.innerHTML = "Ви ведете здоровий образ життя. Висновки та рекомендації:";
            console.log(points);
        }
        else if(points >=47 && points < 65){
            answer.innerHTML = "Вцілому не погано, але варто дещо змінити. Висновки та рекомендації:";
            console.log(points);
        }
        else if(points >=30 && points < 47){
            answer.innerHTML = "Ви ведете нездоровий образ життя. Висновки та рекомендації:";
            console.log(points);
        }
        else if(points < 30){
            answer.innerHTML = "Ваш образ життя є небезпечним для вашого здоров’я. Висновки та рекомендації:";
            console.log(points);
        }
        rec();
        answer2.innerHTML = recommendations;
       
    }


    let rec = function(){
        if(form2.question4.value == 5){
            recommendations += " Куріння призводить до хвороб, що впливає на серце і легені, добре що ви не курите. Алкоголь також дуже негативно впливаэ на здоров'я, вживати його потрібно як найменше.";
        }
        else if(form2.question4.value < 5){
            recommendations += " Куріння призводить до хвороб, що впливають на серце і легені, рекомендуємо відмовитися від цієї негативної звички. Алкоголь також дуже негативно впливаэ на здоров'я, вживати його потрібно як найменше.";
        }


        if(form2.question6.value > 4){
            recommendations += " Регулярне заняття спортом робить серце і судини людини більш витривалими.";
        }
        else if(form2.question6.value <= 4){
            recommendations += " Вам потрібно більше займатись спортом. Регулярне заняття спортом робить серце і судини людини більш витривалими.";
        }

        if(form2.question7.value == 5){
            recommendations += " Вживання цукру у великих кількостях погано впливає на  весь організм  і може привести появи цукрового діабету.";
        }
        else if(form2.question7.value == 3){
            recommendations += " Вживання цукру у великих кількостях погано впливає на  весь організм  і може привести появи цукрового діабету. Рекомендуємо зменьшити його вживання";
        }
        else if(form2.question7.value == 2){
            recommendations += " Вживання цукру у великих кількостях погано впливає на  весь організм  і може привести появи цукрового діабету. Вам потрібно зменьшити його вживання";
        }


        if(form2.question8.value >= 3){
            recommendations += " Споживання фастфуду в нормі. Фастфуд дуже калорійний через високий вміст жирів і цукру. Велика кількість порожніх калорій веде до ожиріння і проблем травної системи.";
        }
        else if(form2.question8.value < 3){
            recommendations += " Зменьшите споживання фастфуду. Фастфуд дуже калорійний через високий вміст жирів і цукру. Велика кількість порожніх калорій веде до ожиріння і проблем травної системи.";
        }


        if(form2.question9.value == 5){
            recommendations += " Вживання в їжу надмірної кількості солі провокує зміни імунної системи в кишечнику, які тягнуть за собою деградацію когнітивних функцій людини. Підвищений  рівень стресу впливає на всі системи організму і може призвести до поганих наслідків.";
        }
        else if(form2.question9.value < 5){
            recommendations += " Вживання в їжу надмірної кількості солі провокує зміни імунної системи в кишечнику, які тягнуть за собою деградацію когнітивних функцій людини. Не додавайте її без потреби. Підвищений  рівень стресу впливає на всі системи організму і може призвести до поганих наслідків.";
        }
        

        if(form2.question11.value == 5){
            recommendations += " Здоровий сон дуже важливий для нормального функціонування організму людини. Потрібно обов’язково проходити плановий огляд, так як це допоможе завчасно виявити деякі види  захворювання.";
        }
        else if(form2.question11.value == 2){
            recommendations += " Спіть більше. Здоровий сон дуже важливий для нормального функціонування організму людини. Потрібно обов’язково проходити плановий огляд, так як це допоможе завчасно виявити деякі види  захворювання.";
        }


        if(form2.question13.value >= 4){
            recommendations += " Щоденне споживання води в нормі. Без потрібної кількості води в організмі, він не зможе нормально функціонувати.";
        }
        else if(form2.question13.value < 4){
            recommendations += " Пийте більше води. Без потрібної кількості води в організмі, він не зможе нормально функціонувати.";
        }


        if(form2.question14.value >= 4){
            recommendations += " Фрукти і овочі містять в собі багато вітаміну С та інших не менш корисних речовин, їх потрібно їсти не меньше 400г в день. Після кожного часу роботи рекомендується робити десяти хвилинну перерву, яку зручно суміщати з провітрюванням. За будь-яких умов безперервна робота за комп’ютером для дорослої людини не повинна перевищувати двох годин";
        }
        
        else if(form2.question14.value < 4){
            recommendations += " Їжте більше фруктів на овочей. Фрукти і овочі містять в собі багато вітаміну С та інших не менш корисних речовин, їх потрібно їсти не меньше 400г в день. Після кожного часу роботи рекомендується робити десяти хвилинну перерву, яку зручно суміщати з провітрюванням. За будь-яких умов безперервна робота за комп’ютером для дорослої людини не повинна перевищувати двох годин";
        }
        
    }


    let men = function(){
        if(form1.question2.value == 1 && text.value < 44){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 1 && text.value > 57){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 1 && (text.value <= 57 && text.value >= 44)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 2 && text.value < 54){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 2 && text.value > 64){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 2 && (text.value <= 64 && text.value >= 54)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 3 && text.value < 56){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 3 && text.value > 66){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 3 && (text.value <= 66 && text.value >= 56)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 4 && text.value < 61){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 4 && text.value > 69){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 4 && (text.value <= 69 && text.value >= 61)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 5 && text.value < 65){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 5 && text.value > 73){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 5 && (text.value <= 73 && text.value >= 65)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 6 && text.value < 68){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 6 && text.value > 75){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 6 && (text.value <= 75 && text.value >= 68)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 7 && text.value < 70){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 7 && text.value > 82){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 7 && (text.value <= 82 && text.value >= 70)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 8 && text.value < 76){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 8 && text.value > 86){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 8 && (text.value <= 86 && text.value >= 76)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }



        
    }
    

    let woman = function(){
        if(form1.question2.value == 1 && text.value < 44){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 1 && text.value > 55){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 1 && (text.value <= 55 && text.value >= 44)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 2 && text.value < 49){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 2 && text.value > 57){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 2 && (text.value <= 57 && text.value >= 49)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 3 && text.value < 51){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 3 && text.value > 61){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 3 && (text.value <= 61 && text.value >= 51)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 4 && text.value < 55){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 4 && text.value > 65){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 4 && (text.value <= 65 && text.value >= 55)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 5 && text.value < 60){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 5 && text.value > 69){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 5 && (text.value <= 69 && text.value >= 60)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 6 && text.value < 63){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 6 && text.value > 72){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 6 && (text.value <= 72 && text.value >= 63)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 7 && text.value < 66){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 7 && text.value > 75){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 7 && (text.value <= 75 && text.value >= 66)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }


        if(form1.question2.value == 8 && text.value < 69){
            points += +8;
            recommendations += " Ваша вага низжче ніж потрібно.";
        }
        else if(form1.question2.value == 8 && text.value > 78){
            points += +8;
            recommendations += " Ваша вага більше ніж потрібно.";
        }
        else if(form1.question2.value == 8 && (text.value <= 78 && text.value >= 69)){
            points += +15;
            recommendations += " Ваша вага в нормі.";
            
        }

    }
});    