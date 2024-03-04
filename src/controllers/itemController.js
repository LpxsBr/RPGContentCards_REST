import { Item } from "../database/models/itemModel.js"

export default new class ItemController {
    async create(req, res) {

        const itemBody = req.body

        try {
            const item = await new Item(itemBody)

            item.save().then(() => console.log('meow'));

            return res.status(201).json({
                message: 'item created with sucess',
                data: item
            })

        } catch (error) {
            return res.status(500).json({
                message: 'item was not create',
                error
            })
        }
    }

    async getAll(req, res) {
        try {

            const item = await Item.find({})

            return res.status(201).json({
                message: 'collection with all items returned',
                data: item
            })

        } catch (error) {
            return res.status(500).json({
                message: 'item was not create',
                error
            })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            await Item.deleteOne({ _id: id })

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