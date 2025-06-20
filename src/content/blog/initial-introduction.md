---
title: "Initial Introduction"
description: "The first blog post: an introduction to what I'm aiming towards and how you can help."
pubDate: "June 1 2025"
heroImage: "/images/blog-placeholder-3.jpg"
author: alexgshijan
---

Hi there, my name is Alex George Shijan.  
I'll go into more depth about who I am on the [About](/blog/about) page, but briefly: I’m a Syro-Malabar Catholic from the Eparchy of Great Britain. I have some basic web development skills, and I want to use them in service of our Church and community.

When I was beginning my deeper faith journey, one thing I noticed was how difficult it was to find accessible, reliable resources specifically about the Syro-Malabar Church — its history, liturgy, spirituality, and traditions.  
There were plenty of general Catholic resources, but very little that helped me understand and appreciate my own Church's unique identity as a Mar Thoma Nazrani.  
That gap is partly what inspired me to start *BooksWithSyro*.

I want to build a document archive — something akin to the Malankara Library — dedicated specifically to the Syro-Malabar Church. My hope is to create a resource that helps strengthen our community, ensuring that our Mar Thoma Nazrani heritage thrives not just in spirit, but in the words, traditions, and documents we pass on to future generations.

## Current Progress and Future Plans

So far, I’ve set up a frontend (this website) and configured a D2 bucket to store files. I'm currently limited to working with 10GB buckets to avoid any excess costs. Having said that my system is modular enough that it can work off of multiple R2 buckets. I still need to find if Cloudflare charges based off of each individual bucket or all buckets together. If it is the former then I could stack this system ad infinitum, if it's the latter then this will fall apart as soon as I go over 10GB. The rate for 1GB (beyond the 10GB limit) is 0.15$ per month. Realistically if I can get some crowd funding going, it wouldn't be an issue.
The next step is to build a system for managing uploads (restricted to myself and specific admin accounts). The idea is to create a workflow where a file is:

- ~~Uploaded~~ Completed
- ~~Metadata is added (category, description, tags/keywords)~~ Completed, though I still need to actually put this to use. Currently the "Category" serves no function.
- ~~Watermarked (if necessary)~~ Concluded that this was uneccesary
- ~~Stored securely in the bucket~~ Completed
- ~~Referenced through an updated JSON index~~ Decided that working with a D1 SQL database was a bit more within my scope as something that I had experience with working with on an actual large scale application

I'm also exploring the possibility of automating metadata tagging using AI or OCR — something worth experimenting with.

After that, I’ll focus on developing a proper search index and ~~setting up a browsable library, organized neatly by category or topic.~~ (Completed)

## How You Can Help

This is still in its early stages, but if you’d like to support the project, here are some ways you can help:

- Suggest documents, traditions, or resources you think should be archived
- Share the project with others who might find it useful
- Pray for the success of this little initiative!

In the future, once the archive is more developed, I may open up more ways for the community to contribute directly — stay tuned.

## Upcoming Milestones

- ~~Launching the upload and metadata management system~~ Completed
- ~~Uploading the first batch of documents~~ Completed  
- Developing basic search functionality  
- Opening a feedback form for improvements  
