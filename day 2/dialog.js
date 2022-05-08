$(".f").dialog({
    modal:true,
    autoOpen :false,
    buttons: {
        ok:function(){

            var Name = $(".name").val()
            var pass =$(".password").val()
            $(".index").dialog("open")
            
            $(".index").text(`name = ${Name}`)
            $(".index").append(`<p> password = ${pass} </p>`)
           //$(".index").text(`password = ${pass}`)
          
           
          $(".f").dialog("close")


        },
        cancel: function(){

            $(".f").dialog("close")
        }
    
        
    }
    
}
)
 $("#o").click(function(){

    $(".f").dialog("open")
 })
 $(".index").dialog({
    modal:true,
    autoOpen:false,
    ok:function(){

        $(".index").dialog("close")
    }
})
// $("#c").click(function(){
//     $(".f").dialog("close")
// })
