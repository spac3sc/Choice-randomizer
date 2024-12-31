const submitButton = document.getElementById('subnt');
const pick_random = document.getElementById("pick_random");
let count = 1;

const min = 1;
let max = 1;
let random;
let added_count;

submitButton.onclick = function(){
    if (document.getElementById('choice').value == ""){
        alert("Please enter a choice");
    }
    else{
    let choice = document.getElementById('choice').value;
    console.log(choice);
    let new_choice_p = document.createElement('p');
    new_choice_p.textContent = choice;

    

    let entered_choices = document.getElementById('entered_choices');
    entered_choices.appendChild(new_choice_p);
    added_count = count++;
    new_choice_p.id = "choice" + added_count;
    new_choice_p.className = "choices";
    console.log(new_choice_p.id);
    document.getElementById('choice').value = "";

    }
}

pick_random.onclick = function(){
    let max = added_count;
    let random = Math.floor(Math.random() * max) + min;
        alert(document.getElementById("choice" + random).textContent);
    }


