window.addEventListener("load", main);

function main() {
	(function () {
	    var old = console.log;
	    var logger = document.getElementById('log');
	    console.log = function () {
	      for (var i = 0; i < arguments.length; i++) {
	        if (typeof arguments[i] == 'object') {
	            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
	        } else {
	            logger.innerHTML += arguments[i] + '<br />';
	        }
	      }
	    }
	})();


	code.addEventListener("input", () => {
		log.innerText = "";

		try {
			eval(code.value);
		} catch(error) {
			log.innerText = error;
		}
	});


	code.addEventListener("keydown", (event) => {
		if (event.key == "Tab") {
			event.preventDefault(); // Prevent the default Tab key behavior

            const textarea = event.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            // Use `document.execCommand` to make the change undoable
            const twoSpaces = "  ";
            const before = textarea.value.substring(0, start);
            const after = textarea.value.substring(end);

            // Replace the selected text with two spaces
            textarea.setRangeText(twoSpaces, start, end, "end");
		}

	});
};