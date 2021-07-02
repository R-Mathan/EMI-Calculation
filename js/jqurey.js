let amt =  $( "#Eamount" );
let per =  $( "#per" );

$("#btn").click(function(){
    let check1 = $.isNumeric(amt.val());
    let check2 = $.isNumeric(per.val());

    if(amt.val() === ''){
        alert("Please Enter the Amount");
        $(".month").val("");

    }
    else if( per.val() === ''){
        alert("Please Enter the Percentage");
        $(".month").val("");       
    }
    else{

        if(check1 == false){
            alert("Please Enter the Valid Number in Amount");
            $(".month").val("");
        }
        else if(check2 == false){
            alert("Please Enter the Valid Number in Percentage");
            $(".month").val("");
        }
        else if((check1 == true) && (check2 == true)){
            let a = per.val()/100;
            let b = a * amt.val();
            let c = parseFloat(b) + parseFloat(amt.val());
            let d = parseFloat(c) / 12;
            $(".month").val(d);
        }
    }

});

$("#reset").click(function() {
    $("input").val("");
});
