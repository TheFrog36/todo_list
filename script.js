const toDo1 = new ExpiringToDo ("bolletta luce", ToDo.TYPE.medio,"pagamento", new Date('2022-05-04'))
const toDo2 = new ExpiringToDo ("scadenza patente", ToDo.TYPE.basso, 'rinnovo', new Date('2027-05-04'))
const toDo3 = new ExpiringToDo ("abbonamneto xbox" , toDo.TYPE.alto,'xbox', new Date('2022-05-04'))
const toDo4 = new ToDo ('latte', ToDo.TYPE.moltoAlto, 'spesa')

const toDo5 = new MultiToDo('scadenze', ToDo.TYPE.medio, 'vario', [toDo1, toDo2, toDo3])