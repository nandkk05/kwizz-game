const app = Vue.createApp({
    data() {
        return {
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
                    question: "Hey you",
                    answers: {a: 'Bags', b: 'Cat', c:'Dog', d:'Gef'},
                    correctAnswer: 'b'
                }
            ]
        }
    }
})

app.mount('#app')
