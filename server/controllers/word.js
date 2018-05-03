const Word = require('../models').Word;

module.exports = {
    createWord(req, res){
        return Word
            .create({
                word: req.body.word,
                wordType: req.body.wordType,
                definition: req.body.definition
            })
            .then(words => res.status(200).send(words))
            .catch(error => res.status(400).send(error));
    },
    retrieveWord(req, res){
        return Word
            .findById(req.params.id)
            .then(words => {
                if(!words){
                    return res.status(404).send({
                        message: 'word not found'
                    })
                }
            return res.status(200).send(words)
            })
            .catch(error => res.status(400).send(error));
    }
}