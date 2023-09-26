alert("Olá! Seja bem-vindo!")

		document.addEventListener("DOMContentLoaded", function() {
			var dtElements = document.querySelectorAll(".dt-custom");

			dtElements.forEach(function(dtElement) {
				dtElement.addEventListener("click", function() {
					var ddElement = dtElement.closest("dt").nextElementSibling;
					var textBox = ddElement.querySelector(".text-box");
					if (textBox.style.display === "none") {
						textBox.style.display = "block";
					} else {
						textBox.style.display = "none";
					}
				});
			});
		});

		document.addEventListener("DOMContentLoaded", function() {
            const container = document.getElementById("leaf-container");
            const numLeaves = 3;

            for (let i = 0; i < numLeaves; i++) {
                const leaf = document.createElement("div");
                leaf.className = "leaf";

                // Defina uma posição aleatória para a folha
                const x = window.innerWidth - 490;
				const y = Math.random() * window.innerHeight - 200;

                leaf.style.left = `${x}px`;
                leaf.style.top = `${y}px`;

                container.appendChild(leaf);
            }
        });