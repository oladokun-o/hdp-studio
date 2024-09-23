import { defineField } from "sanity";

// Haulage Schema
export default {
    name: 'haulage',
    title: 'Haulage',
    type: 'document',
    fields: [

        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        // defineField({
        //     name: 'gallery',
        //     title: 'Gallery',
        //     type: 'array',
        //     of: [{ type: 'url' }],
        // }),
        defineField({
            name: 'qty',
            title: 'Quantity',
            type: 'number',
            hidden: true,
            initialValue: 0,
        }),
        defineField({
            name: 'step',
            title: 'Step (Quantity)',
            type: 'number',
            initialValue: 1,
            description: 'Step for quantity of product',
        }),
        // min and max quantity
        defineField({
            name: 'minQty',
            title: 'Minimum Quantity',
            type: 'number',
            initialValue: 1,
            description: 'Minimum quantity of product',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'maxQty',
            title: 'Maximum Quantity (optional)',
            type: 'number',
            initialValue: 100,
            description: 'Maximum quantity of product',
        }),
        defineField({
            name: 'amount',
            title: 'Amount',
            type: 'number',
            hidden: true,
            initialValue: 0,
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required(),
            initialValue: 0
        }),
        defineField({
            name: 'meta',
            title: 'Meta',
            type: 'object',
            fields: [
                defineField({ name: 'weight', title: 'Weight', type: 'string' }),
                defineField({
                    name: 'type',
                    title: 'Type', 
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Haulage', value: 'haulage' },
                        ]
                    }
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
    ],
};