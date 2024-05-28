 //const emitter=new EventEmitter();
// const sb1=emitter.subscribe("firstEvent",function cb1(){
//     return 5;
// });
// sb1.unsubscribe()
// emitter.subscribe("firstEvent",function cb2(){
//     return 6;
// });
// emitter.emit("firstEvent");

//solution
class EventEmitter{
    constructor(){
        this.events={};
    }
    subscribe(eventName,callback){
        if(!this.events[eventName]){
            this.events[eventName]=[]
        }
        this.events[eventName].push(callback);
        return{
            unsubscribe:()=>{
                this.events[eventName].filter((cb)=>cb!==callback);
            }
        };
    }

    emit(eventName,args=[]){
        if(!this.events[eventName]){
            return[];
        }
        return this.events[eventName].map(callback=>callback(...args))
    }
}
//example1
// const emitter=new EventEmitter();
// console.log(emitter.emit("firstEvent"));//no callback are subscribed
// emitter.subscribe("firstEvent",function cb1(){
//     return 5;
// });

// emitter.subscribe("firstEvent",function cb2(){
//     return 6;
// });
// console.log(emitter.emit("firstEvent"));

//example2
// const emitter=new EventEmitter();
// const sub=emitter.subscribe("firstEvent",(...args)=>args.join(","))
// console.log(emitter.emit("firstEvent",[1,2,3]));//no callback are subscribed
// sub.unsubscribe();//undefined
// console.log(emitter.emit("firstEvent",[4,5,6]));
// console.log(emitter.emit("firstEvent",[1,2,3]));//no callback are subscribed
// sub.unsubscribe();//undefined
// console.log(emitter.emit("firstEvent",[4,5,6]));

//example3
// const emitter = new EventEmitter();
// const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
// console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
// sub.unsubscribe(); // undefined
// console.log(emitter.emit("firstEvent", [4, 5, 6]));

//example 4
const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
sub1.unsubscribe(); // undefined
console.log(emitter.emit("firstEvent", [5])); // [7]
 
