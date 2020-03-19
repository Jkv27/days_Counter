//calender call
$('#datepicker1').datepicker({
    uiLibrary: 'bootstrap4'
    });

 $('#datepicker2').datepicker({
        uiLibrary: 'bootstrap4'
        });

            

 function dayDiff() {
             const date1 = new Date($("#datepicker1").val());
             const date2 = new Date($("#datepicker2").val());
             const timeDiff = date2.getTime() - date1.getTime();
                
             const milliSecondsInOneSecond = 1000;
             const secondsInOneHour = 3600;
             const hoursInOneDay = 24;

             const dayDiff = timeDiff / (milliSecondsInOneSecond * secondsInOneHour * hoursInOneDay);
             let inputTag = document.getElementById("result");
             
             if(isNaN(dayDiff)){
                inputTag.value = "select dates";

             }
             else{
                inputTag.value = dayDiff + "days";
            

             }
               
             

             


     }
           
           