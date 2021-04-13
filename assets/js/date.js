function clock(){
    dt = new Date();
    days=dt.getDay();
    dates=dt.getDate();
    months=dt.getMonth();

    if(days==0){
        days="Sun"
    }
    else if(days==1){
        days="Mon";
    }
    else if(days==2){
        days="Tue";
    }
    else if(days==3){
        days="Wed";
    }
    else if(days==4){
        days="Thu";
    }
    else if(days==5){
        days="Fri";
    }
    else if(days==6){
        days="Sat";
    }

    if(months==0){
        months="Jan"
    }
    else if(months==1){
        months="Feb"
    }
    else if(months==2){
        months="Mar"
    }
    else if(months==3){
        months="Apr"
    }
    else if(months==4){
        months="May"
    }
    else if(months==5){
        months="Jun"
    }
    else if(months==6){
        months="Jul"
    }
    else if(months==7){
        months="Aug"
    }
    else if(months==8){
        months="Sep"
    }
    else if(months==9){
        months="Oct"
    }
    else if(months==10){
        months="Nov"
    }
    else if(months==11){
        months="Dec"
    }
    document.querySelectorAll('.date')[0].innerHTML=
    days + ", " + dates + " " + months;
}
setInterval(clock,1000);