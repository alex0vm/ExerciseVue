var app = new Vue({
    el: '#app',
    
    data () {
      return {
        courses:[],
        title:"",
        time:0,
      }
    },
    
    computed: {
      totalTime(){
          temp = 0;
          this.courses.forEach(i => {
            temp += parseInt(i.tiempo);
            
          });
           return temp;
  
      }
    },
    
    methods: {
      addCourse(){
        let curso = {nombre:this.title, tiempo:this.time}
        this.courses.push(curso);
        this.title="";
        this.time=0.0;
      }
    }
  })