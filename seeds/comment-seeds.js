const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Texas could really use something like this!',
        post_id: 2,
        user_id: 1,
        created_at: '2023-10-01 12:45:32',
        updated_at: '2023-10-01 12:45:32'
        },
        {
        comment_text: 'Putting Designers out of work since 2013.',
        post_id: 1,
        user_id: 5,
        created_at: '2023-10-01 12:45:32',
        updated_at: '2023-10-01 12:45:32'
        },
        {
        comment_text: 'Will these be cheaper than Teslas?',
        post_id: 4,
        user_id: 3,
        created_at: '2023-10-01 12:45:32',
        updated_at: '2023-10-01 12:45:32'
        },
        {
        comment_text: 'Best not to exercise at all -- for safety.',
        post_id: 3,
        user_id: 2,
        created_at: '2023-10-01 12:45:32',
        updated_at: '2023-10-01 12:45:32'
        },
        {
        comment_text: 'So many jpgs!',
        post_id: 5,
        user_id: 1,
        created_at: '2023-10-01 12:45:32',
        updated_at: '2023-10-01 12:45:32'
        },
        {
        comment_text: 'This is why I use facebook.',
        post_id: 6,
        user_id: 4,
        created_at: '2023-10-01 12:45:32',
        updated_at: '2023-10-01 12:45:32'
        },
        {
        comment_text: 'Im concerned about the potential for Nvidia to abuse its dominant position in the AI chip market.',
        post_id: 3,
        user_id: 6,
        created_at: '2023-10-01 12:45:32',
        updated_at: '2023-10-01 12:45:32'
        },
        {
        comment_text: 'Im excited to see Intel begin high-volume production of chips using EUV lithography. This is a major milestone for the company and for the entire tech industry.',
        post_id: 4,
        user_id: 7,
        created_at: '2023-10-01 12:45:32',
        updated_at: '2023-10-01 12:45:32'
        },
        {
        comment_text: 'Im glad to see that the EU is investigating potential anti-competitive practices in the AI chip market. Its important to ensure that everyone has access to fair and competitive markets.',
        post_id: 3,
        user_id: 8,
        created_at: '2023-10-01 12:45:32',
        updated_at: '2023-11-29 21:27:00'
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;