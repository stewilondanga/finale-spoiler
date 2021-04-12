var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var spoilers = {
  "june": ["Offred (June Osbourne)", "Alive", "Handmaid, Rebel, Book Editor (former)", "Taken away by Eyes after refusing to follow Aunt Lydia's orders to stone Janine."],
  "luke": ["Luke Bankole", "Alive", "Husband, Rebel, Office Worker (former)", "Escaped to Canada, living in an apartment with Erin and Moira."],
  "moira": ["Moira (aka Ruby (Jezebel's))", "Alive", "Handmaid (former), Prostitute (former), Rebel", "Escaped to Canada, living in an apartment with Luke and Erin."],
  "serena": ["Serena Joy Waterford", "Alive", "Wife", "Mad at Fred for his ambiguous relationship with Offred; watches in horror as Offred is taken away by the Eyes."],
  "fred": ["Fred Waterford", "Alive", "Commander", "Watches in horror as Offred is escorted away by the Eyes."],
  "lydia": ["Aunt Lydia", "Alive", "Aunt", "Announces and heads the execution of Janine by stoning; defied by the handmaids; threatens punishment."],
  "rita": ["Rita", "Alive", "Martha", "Watches in horror as Offred is taken away by the Eyes -- they embrace."],
  "nick": ["Nick Blaine", "Alive", "Driver, Eye", "Tells Offred to trust him right before she is taken away by the Eyes."],
  "emily": ["Ofglen (Emily), Ofsteven (after reassignment)", "Unknown", "Handmaind, Rebel", "Caught having an affair with her first Commander's Martha (who is executed), Gilead mutilates her and sends her back to a new household; Attempts to escape or wreak havoc in Gilead and runs over some Gilead Guardians; Taken away by the Guardians."],
  "janine": ["Ofwarren (Janine)", "Unknown", "Handmaid (former)", "Attempted to take her baby back from the Putnam household, threatening to jump off a bridge with it; Talked down by Offred -- she gives the baby back but still jumps, surviving the fall; Receives death sentence by stoning, but the handmaids refuse to go through with it; Unsure what happens after."],
  "alma": ["Ofrobert (Alma)", "Alive", "Handmaid, Rebel", "Refuses to stone Janine; Likely taken away by the Eyes, similar to Offred."],
  "lillie": ["Ofglen 2", "Unknown", "Handmaid", "Refuses to stone Janine, speaks out against Aunt Lydia, resulting in a soldier violently beating her."]
};

var people = Object.keys(spoilers);
/*
$("#spoil").on("click",function(){
  for(p in people){
    //console.log(people[p]);
    //console.log(spoilers[people[p]]);
    var newrow = "<tr id=" + p + "><td>"+spoilers[people[p]][0]+"</td><td>"+spoilers[people[p]][1]+"</td><td>"+spoilers[people[p]][2]+"</td><td>"+spoilers[people[p]][3];
    //console.log(newrow);
    $("#"+people[p]).parent().replaceWith(newrow);
  }
});
