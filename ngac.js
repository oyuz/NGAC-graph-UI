class NgacDoc {

	#drawMode;

	constructor() {
		this.#drawMode = false;
	}

	// Delete selected graph element
	deleteElement() {
		cy.$(':selected').remove();
	}

	// Add graph node
	addNode() {
		let inputName = window.prompt("Enter name: ");
		cy.add({
		    group: 'nodes',
		    data: { name: inputName },
			});
	}

	// Control NGAC constraints before allowing placed edge (incomplete)
	controlEdge(sourceID, targetID) {

	  let privilege = window.prompt("Enter access privilege: ");

	  // Identify newly added edge
	  var newEdge = cy.edges(
	    '[source = "' + sourceID + '"]' +
	    '[target = "' + targetID + '"]' +
	    '[!name]'  // Find the edge without a name, this will be the new one
	  );

		// TODO: Delete placed edge if constraints aren't met

	  newEdge.data('name', privilege);
		newEdge.addClass('edgelabel');

	}

	// Toggles button classes and coloring for draw- and pan mode
	displayDrawMode(bool) {
		if (this.#drawMode == false && bool == true) {
			this.#drawMode = true;
			$('#draw-on').toggleClass('drawon');
			$('#draw-off').toggleClass('drawoff');
			return true; // Overlay fix to extension bug
		} else if (this.#drawMode == true && bool == false) {
			this.#drawMode = false;
			$('#draw-on').toggleClass('drawon');
			$('#draw-off').toggleClass('drawoff');
			return true; // Overlay fix to extension bug
		}
	}
}
