import { defineField } from "sanity";

// Equipment Schema
export default {
    name: 'equipment',
    title: 'Equipment',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'url',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'url' }],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'qty',
            title: 'Quantity',
            type: 'number',
            hidden: true,
        }),
        defineField({
            name: 'amount',
            title: 'Amount',
            type: 'number',
            initialValue: 0,
            hidden: true
        }),
        defineField({
            name: 'prices',
            title: 'Prices',
            type: 'object',
            validation: (Rule) => Rule.required(),
            fields: [
                defineField({ name: 'default', title: 'Default', type: 'number', initialValue: 0 }),
                defineField({ name: 'day', title: 'Day', type: 'number', initialValue: 0 }),
                defineField({ name: 'week', title: 'Week', type: 'number', initialValue: 0 }),
                defineField({ name: 'month', title: 'Month', type: 'number', initialValue: 0 }),
            ],
        }),
        defineField({
            name: 'meta',
            title: 'Meta',
            type: 'object',
            fields: [
                defineField({
                    name: 'brand',
                    title: 'Brand',
                    type: 'object',
                    //@ts-ignore
                    fields: [
                        defineField({
                            title: 'Equipment Brand',
                            name: 'brand',
                            type: 'reference',
                            to: [{ type: 'equipmentManufacturer' }],
                            options: {
                                filter: 'category == $category',
                                filterParams: { category: 'equipment' }
                            }
                        })
                    ]
                }),
                defineField({ name: 'weight', title: 'Weight', type: 'string' }),
                defineField({ name: 'usage', title: 'Usage', type: 'string' }),
                defineField({ name: 'model', title: 'Model', type: 'string' }),
                defineField({ name: 'year', title: 'Year', type: 'string' }),
                defineField({ name: 'type', title: 'Type', type: 'string' }),
            ],
        }),
    ],
};