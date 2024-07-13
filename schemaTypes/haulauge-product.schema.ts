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