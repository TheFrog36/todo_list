const toDo1 = new ExpiringToDo ("bolletta luce", ToDo.PRIORITY_LEVEL.medio,["pagamento"], new Date('2022-07-04'));
const toDo2 = new ExpiringToDo ("scadenza patente", ToDo.PRIORITY_LEVEL.basso, ['rinnovo','macchina'], new Date('2027-05-04'));
const toDo3 = new ExpiringToDo ("abbonamento xbox" , ToDo.PRIORITY_LEVEL.alto,['xbox','varie','futile'], new Date('2022-05-07'));
const toDo4 = new ToDo ('latte', ToDo.PRIORITY_LEVEL.moltoAlto, ['spesa']);
const toDo5 = new MultiToDo('scadenze', ToDo.PRIORITY_LEVEL.medio, ['vario'], [toDo1, toDo2, toDo3, toDo4]);
const toDo6 = new ExpiringToDo('test', ToDo.PRIORITY_LEVEL.medio, ['test'])
const toDo7 = new ExpiringToDo('yoyo')

const listToDo = [toDo1, toDo2, toDo3]


console.log(ToDo.getHumanDate(toDo1._deadLine))

function displayToDo(arrayTask) {
    const container = document.getElementById('todo-container'); 
    for(let i = 0; i < arrayTask.length; i ++){
        const divGenerale = document.createElement('div'); 
        divGenerale.className = "task-div";  
        const divGriglia = document.createElement('div'); 
        divGriglia.className = "task-griglia"; 
        const titolo = document.createElement('div'); 
        titolo.appendChild(document.createTextNode(arrayTask[i].name))
        titolo.className = "titolo-div";  
        const divTagsFlex = document.createElement('div'); 
        divTagsFlex.className = "flex-tags-div"; 
        for (const j of arrayTask[i].tags) {
            const divTag = document.createElement('div');
            divTag.className = "tag-div" 
            const tagText = document.createTextNode(j); 
            divTag.appendChild(tagText)
            divTagsFlex.appendChild(divTag);
        }
        const checkboxDiv = document.createElement('div')
        checkboxDiv.className = 'checkbox-div'
        const checkBox = document.createElement('input')
        checkBox.type = "checkbox"
        checkBox.className = 'task-completed-check'
        checkBox.id = 'checkbox' + i
        const checkboxLabel = document.createElement('label')
        checkboxLabel.className = 'task-completed-label'
        checkboxLabel.htmlFor = 'checkbox' + i
        const checkboxLabelDiv = document.createElement('div')
        checkboxLabelDiv.className = 'checkbox-label-div'
        checkboxLabel.appendChild(checkboxLabelDiv)
        checkboxDiv.append(checkBox, checkboxLabel)
        const creationDateDiv = document.createElement('div')
        creationDateDiv.className = 'creation-date-div'
        creationDateDiv.appendChild(document.createTextNode(ToDo.getHumanDate(arrayTask[i].creationDate)))
        const expirationDateDiv = document.createElement('div')
        expirationDateDiv.className = 'expiration-date-div'
        expirationDateDiv.appendChild(document.createTextNode(ToDo.getHumanDate(arrayTask[i]._deadLine)))
        divGriglia.append(titolo, divTagsFlex, checkboxDiv, creationDateDiv, expirationDateDiv)
        divGenerale.appendChild(divGriglia)
        container.appendChild(divGenerale);
    }

} 

displayToDo(listToDo);





