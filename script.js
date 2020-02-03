 
 $(document).ready(function(){
    let object1 = JSON.parse(localStorage.getItem("data"));
    //console.log(object1);
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    $("#currentDay").html(currentTime);
    for(let i = 0; i < 24; i++){
      // console.log(object1[`input${i}`])
      if(i === currentHour){
       $("textarea").removeClass("future")
   }
   else if(i < currentHour){
       $("textarea").removeClass("future present")
   }
   
   
   let row = $("<div>").addClass("row");
   let iDiv = $("<div>").addClass("col-2 time-block hour");
   iDiv.text(`${i+1}:00`);
   row.append(iDiv);
   let textarea = $("<textarea>").addClass("col-8 text-area description textarea past present future");
   textarea.attr("type", "text");
   textarea.attr("id", `input${i}`);
   if(object1[`input${i}`] === null) {
       textarea.text('');
   }
   else {
       textarea.text(object1[`input${i}`]);
   }
   row.append(textarea);
   let button = $("<button>").addClass("col-2 saveBtn btn btn-light");
   button.attr("id", `save${i}`);
   button.text("Save");
   row.append(button);
   
   $(".container").append(row);
   //  $(".container").append(`
   //     <div class = "row">
   //         <div class = "col-2 time-block hour">${i+1}:00</div>
   //         <textarea type="text" id='input${i}' class = "col-8 text-area description textarea ">${object1[`input${i}`]||''}</textarea>
   //         <button type="button" id='save${i}' class = "col-2 saveBtn btn btn-light">Save</button>
   //     </div>
   //     `);
   }; 
   
   
   
   
    $('button').on("click", function(){
       let saves = $(this).attr("id").replace('save', 'input');
       let value = $(`#${saves}`).val().trim()
       object1[saves] = value;
       //console.log($(this).siblings('input').val().trim())
       localStorage.setItem("data", JSON.stringify(object1))
      // console.log(localStorage.getItem("data"));
   });
   
    });
   
