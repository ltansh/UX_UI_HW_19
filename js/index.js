console.log("Your index.js file is loaded correctly!");

$("#ux").on("hover", function(){
    $("#ux").toggleClass(".displayImg");
    if ($("#ux").hasClass(".displayImg")) {
        ($(".displayImg").removeClass(".displayImg").addClass(".hiddenImg"));
    }
    else {($(".searchBar").css("height", "0vh"));
        ($("#searchForm").css("opacity", "0"));
        ($(".searchIcon").removeClass("fa-times").addClass("fa-search"));
    }
  })
