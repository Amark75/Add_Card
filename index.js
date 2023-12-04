const cardContainer = document.getElementById("card-container");
        const addCardButton = document.getElementById("add-card-button");

        addCardButton.addEventListener("click", () => {
            const card = document.createElement("div");
            card.classList.add("card");
            const randomQuery = Math.random();
            card.innerHTML = `
                <button class="remove-card-button">Remove</button>
             

                <div class="media">
                    <img src="https://source.unsplash.com/300x180/?nature,wildlife&${randomQuery}" >
                </div>

               <div class="message">
                   Click me to write something:
                </div>
                <input type="text" class="user-input" placeholder="Enter text..." style="display: none;">
                <button class="save-button" style="display: none;">Save</button>
                <button class="edit-button" style="display: none;">Edit</button>
            `;

            const removeButton = card.querySelector(".remove-card-button");
            removeButton.addEventListener("click", () => {
                cardContainer.removeChild(card);
            });

             const userInput = card.querySelector(".user-input");
            const saveButton = card.querySelector(".save-button");
            const editButton = card.querySelector(".edit-button");

            card.querySelector(".message").addEventListener("click", () => {
                userInput.style.display = "block";
                saveButton.style.display = "block";
                editButton.style.display = "none";
                userInput.value = card.querySelector(".message").textContent;
            });

            userInput.addEventListener("keyup", (event) => {
                if (event.key === "Enter") {
                    saveMessage();
                }
            });

            saveButton.addEventListener("click", () => {
                saveMessage();
            });

            function saveMessage() {
                const message = card.querySelector(".message");
                const inputField = card.querySelector(".user-input");
                message.textContent = inputField.value;
                inputField.style.display = "none";
                saveButton.style.display = "none";
                editButton.style.display = "block";
            }

            cardContainer.appendChild(card);
        });