const { Post } = require("../models");

const postData = [
{
title: "Apple identifies issues causing overheating in the iPhone 15",
post_text: "Apple has acknowledged that some iPhone 15 models are overheating, and is working on a software update to address the issue.",
user_id: 1,
created_at: "2023-10-01 12:45:32",
updated_at: "2023-10-01 12:45:32"
},
{
title: "EU examines Nvidia-dominated AI chip market's alleged abuses",
post_text: "The European Union is investigating whether Nvidia's acquisition of chipmaker Arm could lead to anti-competitive practices in the AI chip market.",
user_id: 2,
created_at: "2023-09-30 18:00:00",
updated_at: "2023-09-30 18:00:00"
},
{
title: "Intel hails 'landmark' as high-volume EUV production begins at Irish plant",
post_text: "Intel has begun high-volume production of chips using extreme ultraviolet (EUV) lithography at its plant in Ireland. This is a major milestone for Intel, as EUV is essential for producing smaller and more powerful chips.",
user_id: 3,
created_at: "2023-09-29 23:59:59",
updated_at: "2023-09-29 23:59:59"
},
{
title: "Why is France raiding a graphics card company?",
post_text: "French authorities are raiding the offices of graphics card maker Nvidia as part of an investigation into alleged price fixing.",
user_id: 4,
created_at: "2023-09-28 23:00:00",
updated_at: "2023-09-28 23:00:00"
},
{
title: "China to waive security checks for some data exports",
post_text: "China has announced that it will waive security checks for some data exports, in an effort to boost the country's tech sector.",
user_id: 5,
created_at: "2023-09-27 22:00:00",
updated_at: "2023-09-27 22:00:00"
},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;