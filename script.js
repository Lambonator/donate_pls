document.addEventListener("DOMContentLoaded", () => {
	// Texty, které budou lítat na pozadí
	const texts = [
		"Kolik máš projektů za sebou, tolikrát si člověkem",
		"Světlo mi dává sílu",
		"za Hordu život položím",
		"Za kladivo zhouby",
		"Mrazivý smutek hladoví",
		"Nabito a odjištěno",
		"Zase práce?",
		",Jsem vzhůru. Nespím!",
		"Vy že jste král? Vás teda volit nebudu",
		"Mám to hotové",
	];

	const container = document.body;

	// Generování pohybujících se textů na pozadí
	for (let i = 0; i < texts.length; i++) {
		const textElement = document.createElement("div");
		textElement.classList.add("floating-text");
		textElement.textContent = texts[i];

		// Nastavení náhodného font-size pro každý text
		textElement.style.fontSize = `${Math.random() * 30 + 20}px`; // Náhodná velikost textu
		textElement.style.top = `${Math.random() * 100}vh`; // Pozice na ose Y
		textElement.style.left = `${Math.random() * 100}vw`; // Pozice na ose X

		// Nastavení náhodného zpoždění pro každý text
		const delay = Math.random() * 5; // Náhodné zpoždění od 0s do 5s
		textElement.style.animationDelay = `${delay}s`; // Nastavení zpoždění animace

		// Přidání do těla dokumentu
		container.appendChild(textElement);
	}

	// Začneme animace pro texty
	const text1 = document.querySelector(".text2");
	const text2 = document.querySelector(".text");

	// Reset opacity před spuštěním animace
	text1.style.opacity = "0";
	text2.style.opacity = "0";

	// Animace pro texty
	setTimeout(() => {
		text1.style.opacity = "1";
	}, 1000); // První text se objeví po 1s

	setTimeout(() => {
		text2.style.opacity = "1";
	}, 3000); // Druhý text se objeví po 3s
});
