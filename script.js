function removeSelectedOption() {
			const selectElement = document.getElementById("colorSelect");
			const selectedOption = selectElement.options[selectElement.selectedIndex];

			if (selectedOption) {
				selectElement.removeChild(selectedOption);
			}
		}