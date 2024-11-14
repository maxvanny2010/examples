document.addEventListener('DOMContentLoaded', () => {
	const successMessage = document.getElementById('message')
	if (successMessage) {
		setTimeout(() => {
			successMessage.style.display = 'none';
		}, 2000);
	}
})

document.addEventListener('click', ({target}) => {
	if (target.dataset.type === 'remove') {
		const id = target.dataset.id;
		remove(id).then(() => {
			removeNoteNode(target, id)
			updateMessageAlert('removed')
		});
	}
	if (target.dataset.type === 'edit') {
		const id = target.dataset.id
		const title = target.closest('li').firstChild.textContent.trim()
		const newTitle = prompt("Enter new note title: ", title)
		if (newTitle) {
			edit(id, newTitle).then((response) => {
				if (response.message) {
					updateNote(id, response.message)
					updateMessageAlert('edited')
				}
			})
		}
	}
})

async function remove(id) {
	return await fetch(`${id}`, {method: 'DELETE'})
}
function removeNoteNode(target, id) {
	target.closest('li').remove();
	console.log(' removed id', id)
}

async function edit(id, title) {
	return await fetch(`${id}`, {
		method: 'PUT',
		headers: {'Content-Type': 'application/json; charset=UTF-8'},
		body: JSON.stringify({
			id,
			title
		})
	}).then(response => response.json())
}

function updateNote(id, newTitle) {
	const nodeList =
		document.querySelector(`[data-id="${id}"]`).closest('li');
	nodeList.firstChild.textContent = newTitle;
	console.log('Note edited successfully.')
}

function updateMessageAlert(message) {
	const nodeAlert = document.querySelector('#message');
	nodeAlert.textContent = `Note has been ${message}`;
	nodeAlert.style.display = 'block';

	setTimeout(() => {
		nodeAlert.style.display = 'none';
	}, 2000);
}