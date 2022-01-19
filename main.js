$('.calculate').on('click',function(){
    var no=$('#days').val()
    var bon=$('#bonus').val()
    var r=$('#rate').val()
    var t=$('#tax').val()

    var amt=no*r
    var amt2=(bon/100)*amt
    var amt3=amt+amt2

    var amt4=(t/100)*amt3
    var amt5=amt3-amt4

    $(".op").append('The salary for ',$('#firstName').val(),' ', $('#lastName').val(),' is ',amt5)
})