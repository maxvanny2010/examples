//console.log("Express");
document.addEventListener('DOMContentLoaded', () => {
    const successMessage = document.getElementById('message')
    const errorMessage = document.getElementById('messageError');
    const element = successMessage || errorMessage
    if (element) {
        setTimeout(() => {
            element.style.display = 'none';
        }, 2000);
    }
})

document.addEventListener('click', ({target}) => {
    if (target.dataset.type === 'remove') {
        const id = target.dataset.id;
        remove(id).then(() => {
            removeNoteNode(target, id)
            updateMessage('removed')
        });
    }
    if (target.dataset.type === 'edit') {
        const $task = target.closest('li')
        const id = target.dataset.id
        const title = $task.querySelector('span').innerText;
        const initialHtml = $task.innerHTML

        $task.innerHTML = `
      <input type="text" value="${title}">
      <div>
        <button class="btn btn-success" data-type="save">Save</button>
        <button class="btn btn-danger" data-type="cancel">Cancel</button>
      </div>
    `
        const taskListener = ({target}) => {
            if (target.dataset.type === 'cancel') {
                $task.innerHTML = initialHtml
                $task.removeEventListener('click', taskListener)
            }
            if (target.dataset.type === 'save') {
                const title = $task.querySelector('input').value
                edit({id, title}).then(() => {
                    $task.innerHTML = initialHtml
                    $task.querySelector('span').innerText = title
                    $task.querySelector('[data-type=edit]').dataset.title = title
                    $task.removeEventListener('click', taskListener)
                    updateMessage('edited')
                })
            }
        }

        $task.addEventListener('click', taskListener)
    }
})


async function remove(id) {
    return await fetch(`${id}`, {method: 'DELETE'})
}

async function edit(newNote) {
    return await fetch(`${newNote.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
            id: newNote.id,
            title: newNote.title
        })
    }).then(response => response.json())
}

function updateNote(id, newTitle) {
    const nodeList =
        document.querySelector(`[data-id="${id}"]`).closest('li');
    nodeList.firstChild.textContent = newTitle;
    console.log('Note edited successfully.')
}

function removeNoteNode(target, id) {
    target.closest('li').remove();
    console.log('removed id', id)
}

function updateMessage(message) {
    let nodeAlert = document.querySelector('#message');
    if (!nodeAlert) {
        nodeAlert = document.createElement('div');
        nodeAlert.id = 'message';
        nodeAlert.className = 'alert alert-success';
        document.querySelector('.container').prepend(nodeAlert);
    }
    nodeAlert.textContent = `Note has been ${message}`;
    nodeAlert.style.display = 'block';

    setTimeout(() => {
        nodeAlert.style.display = 'none';
    }, 2000);
}