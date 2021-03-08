const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/knowledge_stats', {useNewUrlParser: true, useUnifiedTopology: true})//Pode dar erro
    .catch(e => {
        const msg = 'ERRO! Não foi possivel contectar com o MongoDB'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' })
// kitty.save().then(() => console.log('meow'))