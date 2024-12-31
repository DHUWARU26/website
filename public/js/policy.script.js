$(document).ready((e)=>{
    e.preventDefault

    $.get("pages/policy/privacy.policy/privacy.policy.txt", function(data) {
        let fileDom = $(data);

        $("#privacy-policy").html(fileDom)
        
    });

    $.get("pages/policy/terms/terms.conditions.txt", function(data) {
        let fileDom = $(data);

        $("#terms-policy").html(fileDom)
        
    });

    $.get("pages/policy/disclaimer/disclaimer.txt", function(data) {
        let fileDom = $(data);

        $("#disclaimer-policy").html(fileDom)
        
    });
    
})