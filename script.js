 let object1 = JSON.parse(localStorage.getItem("data"));
 console.log(object1)
 for(let i = 0; i < 12; i++){
     console.log(object1[`input${i}`])
 $(".container").append(`
    <div class = "row">
        <div class = "col-2 time-block hour">${i+9}:00</div>
        <textarea type="text" id='input${i}' class = "col-8 text-area description textarea">${object1[`input${i}`]||''}</textarea>
        <button type="button" id='save${i}' class = "col-2 saveBtn btn btn-light">Save</button>
    </div>
    `);
 };

 $('button').on("click", function(){
    let saves = $(this).attr("id").replace('save', 'input');
    let value = $(`#${saves}`).val().trim()
    object1[saves] = value;
    //console.log($(this).siblings('input').val().trim())
    localStorage.setItem("data", JSON.stringify(object1))
    console.log(localStorage.getItem("data"));
});

 