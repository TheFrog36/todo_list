class ToDo {
    constructor(name, prority = TYPE.basso, tags = []){
        this.name = name
        this.prority = prority
        this._creationDate = new Date().getTime //??
        this.tags = tags
    }

    static TYPE = {
        basso: 0,
        medio: 1,
        alto: 2,
        moltoAlto: 3
    }

    //name
    //prority TYPE bassa = 0 media = 1 alta = 2 molto alta = 3  default = basso
    //creation date (as a number) create a getter defualt = now (sempre default)
    //tags array di stringhe defaut = 'none'
    //costruttore
        //solo il nome è obbligatorio
}

class MultiToDo extends ToDo{
    constructor(name, prority, tags, subToDo= []){
        super(name, prority, tags)
        this.subToDo = subToDo
    }
    //subToDos [ToDoBase1, ToDoBase2, ToDoBase3, ToDoBase4]
    //getPriority = gives max priority within his subtodos
    getPrority(){
        
    }
}

class ExpiringToDo extends ToDo{
    constructor(name, prority, tags, deadLine){
        super(name, prority, tags)
        this._deadLine = deadLine
    }
    //deadLine default = tomorrow
    //getPriority = maxPriority between it and max-priority - day left
}