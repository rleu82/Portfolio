export default {
    // Computer Name
    name: 'tech',
    // visible title
    title: 'Tech Stack',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Tech Stack',
            type: 'string',
            description: 'Name of Tech Used',
        },
    ],
    preview: {
        select: {
            name: 'name',
        },
        prepare: (selection) => {
            const {name} = selection;
            console.log(name)
            return {
            title: name,
        }
    },
}
}