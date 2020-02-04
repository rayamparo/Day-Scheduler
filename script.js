
    let object1 = JSON.parse(localStorage.getItem("data")) || {};
    let currentTime= new Date()
    let currentHour = currentTime.getHours()
    $("#currentDay").html(currentTime);
    
    for (let i = 9; i < 22; i++) {
         $(".container").append(`
            <div class = "row">
                <div class = "col-2 time-block hour">${i}:00</div>
                <textarea type="text" id='input${i}' class = "col-8 text-area 
                description textarea ${i<currentHour?'past' : i===currentHour? 'present': 'future'}">
                ${object1[`input${i}`]||''}</textarea>
                <button type="button" id='save${i}' class = "col-2 saveBtn btn btn-light">Save</button>
            </div>
            `);
    };
    $('button').on("click", function () {
        let saves = $(this).attr("id").replace('save', 'input');
        let value = $(`#${saves}`).val().trim()
        object1[saves] = value;
        localStorage.setItem("data", JSON.stringify(object1))
    });

