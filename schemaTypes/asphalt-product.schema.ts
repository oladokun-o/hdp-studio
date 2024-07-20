import { defineField } from 'sanity'

// AsphaltProduct Schema
export default {
    name: 'asphaltProduct',
    title: 'Asphalt Product',
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
            name: 'brand',
            title: 'Brand',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'brand' }] }],
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
            name: 'price',
            title: 'Price',
            type: 'number',
            initialValue: undefined,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'amount',
            title: 'Amount',
            type: 'number',
            hidden: true,
            initialValue: 0,
        }),
        defineField({
            name: 'qty',
            title: 'Quantity',
            type: 'number',
            hidden: true,
            initialValue: 0,
        }),
        defineField({
            name: 'meta',
            title: 'Meta',
            type: 'object',
            fields: [
                defineField({ name: 'weight', title: 'Weight', type: 'string' }),
                defineField({ name: 'usage', title: 'Usage', type: 'string' }),
                defineField({ name: 'type', title: 'Type', type: 'string' }),
            ],
        }),
        
    ],
};