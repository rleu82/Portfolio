export default {
    // Computer Name
    name: 'blog',
    // visible title
    title: 'Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'post',
            title: 'Post Title',
            type: 'string',
        },
        {
            name: 'timeStamp',
            title: 'Time Stamp',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Now'
            },
        },
        {
            name: 'postContent',
            title: 'Post Content',
            type: 'text',
            description: 'What do you want to write?'
        },
    ],
    preview: {
        select: {
            name: 'post',
        },
        prepare: (selection) => {
            const {name} = selection
            return {
            title: name,
        }
    },
}
}