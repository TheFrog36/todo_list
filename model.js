class ToDo {
    constructor(name, priority = TYPE. basso, tags = []){
        this.name = name;
        this.priority = priority;
        this._creationDate = new Date().getTime();
        this.tags = tags;
    }

    static TYPE = {
        basso: {order: 0, name:'basso', color:'green'},
        medio: {order: 1, name:'medio', color:'yellow'},
        alto: {order: 2, name:'alto', color:'orange'},
        moltoAlto: {order: 3, name:'moltoAlto', color:'red'},
    }

    get creationDate(){
        return new Date(this._creationDate)
    }
    
    toString(){
        return 'name: ' + this.name + '\n' +
               'prority: ' + this.priority.order + '\n' +
               'creationDate: ' + this.creationDate + '\n' +
               'tags: ' + this.tags + '\n';
    }
}

class MultiToDo extends ToDo{
    constructor(name, priority, tags, subToDo= []){
        super(name, priority, tags)
        this.subToDo = subToDo
        this.actual_priority = this.getPriority()
    }
    
    getPriority(){    //Restituisce la priorità più alta tra this.priority e le priorità di subToDo
        if(this.priority.order === 3) return 3;
        const array_highest_priority = this.subToDo.reduce((p,c) => p.priority.order > c.priority.order ? p:c)
        return array_highest_priority.priority.order > this.priority.order ? array_highest_priority.priority.order : this.priority.order
    }

    toString(){    //Stampo i dati di MultiToDo e i nomi e priorità di subToDo
        const to_do_string = super.toString();
        let my_string = 'actual priority: ' + this.actual_priority + '\n';
         for (const iterator of this.subToDo) {
            my_string += 'task name: ' + iterator.name + ' priority: ' + iterator.priority.order + '\n';
        }
        return to_do_string + my_string
    }

    toStringOP(){    //Stampo tutto
        const to_do_string = super.toString();
        return to_do_string + 'actual priority: ' + this.actual_priority + '\n' + this.subToDo.toString();
    }
}

class ExpiringToDo extends ToDo{
    constructor(name, priority, tags, deadLine = new Date().getTime() + 1000*60*60*24){
        super(name, priority, tags);
        this._deadLine = deadLine;
        this.time_left = this.timeLeft();
        this.actual_priority = this.getPriority();
    }

    get deadLine(){    //imposta la data di scadenza come numero
        const date = new Date(this._deadLine);
        return date;
    }
    
    set deadLine(value){    // restituisce la data di scadenza nel formato normale
        const time = value.getTime();
        this._deadLine = time;     
    }

    toString(){    //stampa i vari dati  
        return super.toString() +
               'dead line; ' + this.deadLine + '\n' +
               'actual priority:' + this.actual_priority + '\n';
    }

    timeLeft(){    //restituisce il tempo rimanente prima della data di scadenza
        const time_difference = this._deadLine - this._creationDate;
        const days_left = Math.floor(time_difference /(1000*60*60*24));
        const hours_left = Math.floor((time_difference % 1000*60*60*24)/(1000*60*60)) ;
        const minutes_left = Math.floor((time_difference %1000*60*60) / (1000*60));
        return 'giorni: ' + days_left + '\n' +   
               'ore: ' + hours_left + '\n' +
               'minuti: ' + minutes_left;
    }
    getPriority(){    //Restituisce la priorità in base ai giorni rimanenti                     
        const time_difference = this._deadLine - this._creationDate - 1;
        if(time_difference < 0) return "EXPIRED";
        const days_left = Math.floor(time_difference /(1000*60*60*24));
        const calculated_priority = 3-days_left
        return calculated_priority > this.priority.order ? calculated_priority : this.priority.order;
    }
}