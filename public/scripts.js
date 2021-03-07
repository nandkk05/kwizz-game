const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 3,
            questions: [
                
                {
                    question: "How many moons does Mars have?",
                    answers: {a: '1', b: '2', c:'4', d:'5'},
                    correctAnswer: 'b'
                },
                {
                    question: "Hey you",
                    answers: {a: 'Bags', b: 'Cat', c:'Dog', d:'Gef'},
                    correctAnswer: 'b'
                },
                {
                    question: "Last Question",
                    answers: {a: 'Bags', b: 'Cat', c:'Dog', d:'Gef'},
                    correctAnswer: 'd'
                }
            ]
        }
    },
    methods: {
        answered(e){
            this.selectedAnswer = e.target.value
            if (this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion(){
            this.index++
            this.selectedAnswer = ''
        },
        showResults(){
            this.index++
        },
        resetQuiz(){
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
})

app.mount('#app')
