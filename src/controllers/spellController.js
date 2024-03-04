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
    
    async delete(req, res) {
        try {
            const { id } = req.params;

            await Spell.deleteOne({ _id: id })

            return res.status(200).json({
                message: 'item deleted',
                id
            })

        } catch (error) {
            return res.status(500).json({
                message: 'item was not create',
                error
            })
        }
    }
}