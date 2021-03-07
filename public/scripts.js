const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 5,
            questions: [
                
                {
                    question: "The playing area of Golf is known as …",
                    answers: {a: 'Arena', b: 'Court', c:'Ring', d:'Course'},
                    correctAnswer: 'd'
                },
                {
                    question: "Tata Institute of Fundamental Research is located in …",
                    answers: {a: 'New Delhi', b: 'Gulberg', c:'Mumbai', d:'Lucknow'},
                    correctAnswer: 'c'
                },
                {
                    question: "Nuclear Fuel Complex is located in …",
                    answers: {a: 'Mumbai', b: 'Udhagamandalam', c:'Hyderabad', d:'Kolkata'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which one of the following oceans has the longest coastline?",
                    answers: {a: 'Atlantic', b: 'Pacific', c:'Indian', d:'Arctic'},
                    correctAnswer: 'a'
                },
                {
                    question: "Sheesh Mahal is located in …………",
                    answers: {a: 'Chennai', b: 'Agra', c:'Jammu & Kashmir', d:'Lucknow'},
                    correctAnswer: 'b'
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
