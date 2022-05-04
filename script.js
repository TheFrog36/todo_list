const toDo1 = new ExpiringToDo ("bolletta luce", ToDo.TYPE.medio,"pagamento", new Date('2022-07-04'));
const toDo2 = new ExpiringToDo ("scadenza patente", ToDo.TYPE.basso, 'rinnovo', new Date('2027-05-04'));
const toDo3 = new ExpiringToDo ("abbonamento xbox" , ToDo.TYPE.alto,'xbox', new Date('2022-05-07'));
const toDo4 = new ToDo ('latte', ToDo.TYPE.moltoAlto, 'spesa');
const toDo5 = new MultiToDo('scadenze', ToDo.TYPE.medio, 'vario', [toDo1, toDo2, toDo3]);


console.log(toDo1.timeLeft());
console.log(toDo1.toString());
console.log(toDo5.toString());
console.log(toDo5.toStringOP());

