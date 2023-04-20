const nameDiv= document.getElementById("name");
const vehicleDiv= document.getElementById("vehicle")
const genderDiv= document.getElementById("gender")
const hobbyDiv= document.getElementById("hobby")
const isMarriedDiv= document.getElementById("isMarried")


fetch('./finalsprint.json')
    .then(response => response.json())
    .then(data =>{
        data.forEach(person => {
            console.log(person);
            getName(person);
            getGender(person);
            getHobby(person);
            getVehicle(person);
            getisMarried(person);
          });
        })  

                
    .catch((error) => {
        console.error(error);
    });

    
      function getName(person) {
        nameDiv.innerText = `${person.name}`;
      }


      function getGender(person){
        genderDiv.innerText = `${person.gender}`;
      }

      function getHobby(person){
        hobbyDiv.innerText =  `their favorite ${person.hobby(person)}.`;
      }

      function getVehicle(person){
        vehicleDiv.innerText = `they drive a ${person.vehicle(person)}.`;
      }

      function getisMarried(person){
        isMarriedDiv.innerText =  `are you ${person.isMarried(person)}.`;


    
    