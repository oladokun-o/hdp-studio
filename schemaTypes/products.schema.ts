import { defineField } from 'sanity'

// AsphaltProduct Schema
export default {
    name: 'asphaltProduct',
    title: 'Products',
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
            // validation: (Rule) => Rule.required(),
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
            initialValue: undefined,
        }),
        defineField({
            name: 'qty',
            title: 'Quantity (you can set the quantity here)',
            type: 'number',
            hidden: true,
            initialValue: 1,
            description: 'Quantity of product',
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
            name: 'meta',
            title: 'Meta',
            type: 'object',
            fields: [
                defineField({ name: 'weight', title: 'Weight', type: 'string' }),
                defineField({ name: 'usage', title: 'Usage', type: 'string' }),
                defineField({ name: 'type', title: 'Type', type: 'string' }),
            ],
        }),
        defineField({
            name: 'popular',
            title: 'Popular',
            type: 'boolean',
            description: 'Mark this product as popular',
            initialValue: false,
        }),
    ],
};