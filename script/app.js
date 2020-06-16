(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
		puzzlePieces = document.querySelectorAll(".puzzle-image"),
		dropZones = document.querySelectorAll(".drop-zone"),
		gameBoard = document.querySelector(".puzzle-board");

		let imageNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];



	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources,
		// and set the drop zone background
		imageNames.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.bgkey}.jpg`
		});

		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;
	}

	function allowDrag(event) {
		console.log('started dragging an image: this one - ', event.target.id);

		event.dataTransfer.setData("draggedImg",this.id);
	}

	function allowDragOver(event){
		event.preventDefault();
		console.log('dragged something over me!');
	}

	function allowDrop(event){

		if(event.target.childElementCount != 0 || event.target.clientWidth < 297)
		{
			let returnImage = event.dataTransfer.getData("draggedImg");

			console.log('one at a time')
			return 0;
		}
		else
		{
		console.log('dropped something on me');

		let droppedImage = event.dataTransfer.getData("draggedImg");


		event.target.appendChild(document.querySelector(`#${droppedImage}`));
	}


	}

	// add event handling here -> how is the user going to use our app?
	// what triggers do we need?

	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
		});

	// rewrite loop in old style
	// for (let zone in dropZones) {
	// 	zone.addEventListener('dragover', allowDragOver);
	// 	zone.addEventListener('drop', allowDrop);
	// }




	//research call, apply, and bind
	changeImageSet.call(puzzleButtons[0]);
})();
