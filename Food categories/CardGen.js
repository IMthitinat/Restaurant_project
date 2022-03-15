var cardDiv = document.getElementById('CardGen');
cardDiv.onload = Generate();

function Generate() {

    fetch('https://my-json-server.typicode.com/IMthitinat/RestaurantCart/db')

        .then((response) => {
            return response.json();
        })
        .then((json) => {
            result = json.datas;
            console.log(result);
            const row = 0;
            for (let i = 0; i < result.length; i++) {
           
                const cardBody = document.createElement("div");
                cardBody.setAttribute("class", "card");
                cardBody.setAttribute("style", "width: 18rem;");
                
                const img = document.createElement("img");
                img.setAttribute("class", "card-img-top");
                img.setAttribute("src", result[i].Image);

                const textName = document.createElement("h2");
                textName.setAttribute("class", "textName");
                textName.innerText = result[i].Name;

                //cardBody.appendChild(img);
                cardBody.appendChild(textName);


                cardDiv.appendChild(cardBody);
            }
        })
}

