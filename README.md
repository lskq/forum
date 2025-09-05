# Forum

## About

This is a forum (technically a thread) written in TypeScript with React and
Next, deployed on Vercel, using Sanity for content management and Clerk for user
authentication. You can post plaintext messages anonymously or under the first
name attached to your user, and that's about it. This was done as a final
project for a module in fullstack development I jumped on without knowing any of
the prerequisites, so I definitely bit off more than I could chew here lol. It's
not very good.

## Bugs/Notes

- The post button is real jank. Pushing it doesn't disable input, so if you mash,
you'll end up posting multiple copies of the same comment. This *shouldn't* be
difficult to fix, but I'm clearly not very good at React, because my every
attempt at fixing it either hasn't worked or caused React to throw errors at me.
- There's no paging, so all the comments are dumped at once. This one was more
an issue of priorities (or so I'm going to tell myself, anyway)
- This whole thing probably shouldn't be exposed to the open internet? I have no
idea if any of it is secure, and I don't think letting anyone post anything
with no content filtering or moderation is a good idea. I'm definitely taking
the deployment down once I've had the project assessed.
- The styling is immaculate and I will not hear otherwise. It works in both
light mode and dark mode, on mobile and desktop, and it's accessible for
every type of color blindness!
