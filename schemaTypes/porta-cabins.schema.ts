import { defineField } from "sanity";

// Haulage Schema
export default {
  name: 'cabins',
  title: 'Porta Cabins',
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
    defineField({
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [{ type: 'url' }],
    }),
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
      initialValue: 0,
      hidden: true
    }),
    defineField({
      name: 'prices',
      title: 'Prices',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({name: 'default', title: 'Default', type: 'number', initialValue: 0}),
        defineField({name: 'day', title: 'Day', type: 'number', initialValue: 0}),
        defineField({name: 'week', title: 'Week', type: 'number', initialValue: 0}),
        defineField({name: 'month', title: 'Month', type: 'number', initialValue: 0}),
      ],
    }),
    defineField({
      name: 'meta',
      title: 'Meta',
      type: 'object',
      fields: [
        defineField({name: 'type', title: 'Type', type: 'string'}),
        defineField({name: 'weight', title: 'Weight', type: 'string'}),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
}