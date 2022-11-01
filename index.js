const form = document.querySelector('form');
const noteContent = document.getElementById('noteContent');
const noteList = document.getElementById('noteList');
const myModal = document.getElementById('myModal');
let value = 1;

const divRow = document.createElement('div');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const detail = document.createElement('button');
	const noteTitle = document.createElement('h3');
	const note = document.createElement('p');
	const divCol = document.createElement('div');
	const innerDiv = document.createElement('div');

	if (noteContent.value == '') {
		console.log('xxxx');
	} else {
		noteList.append(divRow);
		divRow.append(divCol);
		divCol.append(innerDiv);
		innerDiv.append(noteTitle);
		innerDiv.append(note);
		innerDiv.append(detail);

		//Set Attribute
		divRow.setAttribute('class', 'row');
		divCol.setAttribute('class', 'col-md-4');
		divCol.setAttribute('id', `note-col-${value}`);
		note.setAttribute('id', `about-note-${value}`);
		detail.setAttribute('class', value);

		//Contents
		noteTitle.innerText = `Note ${value}`;
		note.innerText = noteContent.value;
		detail.innerText = "View Detail";

		//Styles
		divCol.style.padding = "8px";
		innerDiv.style.padding = "10px";
		innerDiv.style.border = "1px solid #CCCCCC";
		innerDiv.style.borderRadius = "3px"
		innerDiv.style.margin = "1.5%";
		note.style.fontSize = "18px";
		note.style.height = "230px";
		note.style.overflow = "hidden";
		detail.style.backgroundColor = "#0079FF";
		detail.style.color = "#FFFFFF";
		detail.style.border = "none";
		detail.style.padding = "5px 10px";
		detail.style.borderRadius = "3px";

		noteContent.value = '';
		value++;
	}

	detail.addEventListener('click', (e) => {
		myModal.style.display = 'block';

		const modalText = document.createElement('p');
		document.querySelector('.modal-contents').append(modalText);
		modalText.innerText = document.getElementById(`about-note-${e.currentTarget.getAttribute('class')}`).textContent

		document.querySelector('.close').addEventListener('click', (evt) => {
			myModal.style.display = 'none';
			document.querySelector('.modal-contents').removeChild(modalText);
		});
	});

});

/*
document.querySelector('modal-contents').append
#modal-off {
	position: absolute;
	left: 17%;
	top: 40%;
	z-index: 9999;
	text-align: center;
}

*/