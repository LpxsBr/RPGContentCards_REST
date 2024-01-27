import { Spell } from "../database/models/speellModel.js"

export default new class SpellController {
    async create(req, res) {
      
        const spellBody = req.body

        try {
            const spell = await new Spell(spellBody)

            spell.save().then(() => console.log('meow'));

            return res.status(201).json({
                message: 'spell created with sucess',
                data: spell
            })

        } catch (error) {
            return res.status(500).json({
                message: 'spell was not create',
                error
            })
        }
    }

    async getAll(req, res){
        try {
            
            const spell = await Spell.find({})
            
            return res.status(201).json({
                message: 'collection with all spells returned',
                data: spell
            })

        } catch (error) {
            return res.status(500).json({
                message: 'spell was not create',
                error
            })
        }
    }
}