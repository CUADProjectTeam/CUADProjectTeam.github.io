# Updating and Maintaing Our Website

If you're reading this right now, it's safe to assume you've been assigned
to maintain this website.

Lucky you! :moyai:

Most of the work would entail keeping the members tab current and up-to-date, 
along with moving graduated members to the Alumni section of the website. 
Below are the main things you'll have to keep updated, and how to go about it.

Read over the whole thing, and if you still have questions ask your lead.

## Getting Started

Make sure to clone this git repo to your machine to work on it, or do whatever
else you would do in order to edit this from your machine. If you don't know
what this means, ask the CS Leads.

When you commit, you must commit to the staging branch or a personal branch. Do NOT commit directly
to master. Commit to staging, open a PR and have the CS Leads look at it first.
As a matter of fact, only the CS Leads should ever merge a PR to master. 
If you don't know what this means, ask the CS Leads. 

If you are working with multiple people, feel free to create your own
branches to work independently, and then make PRs to merge to staging. 

***MAKE YOUR COMMIT MESSAGES DETAILED.*** I (and many others) will throw
a massive fit if you make a large commit to staging with little to no
message explaining what you did (I'm looking at you, commit [b582f0f](https://github.com/CUAerialRobotics/CUAerialRobotics.github.io/commit/b582f0f30a11ba71021ae584dd7ef26a850c210f)) 
This horrendous commit from our old repo is a perfect example of what ***NOT*** to do. 

Make the commit messages you write in the following format:
```
Main Change/Overall Theme

- More details about the changes
- Use as many of these as you deem necessary
```

We prefer overly-detailed to under-detailed. While there is an art to it,
do the best you can in providing enough information while not inundating
the reader. For more specifics the reader can look at the code changes 
themselves. 

## Adding Members to the Website

To add members to the website, all you have to do is add their photos to the correct directory,
```images/Member-Profile-Pictures/Current``` and then update *members.json*, the most basic
part of the json is a person card, it looks like this
```json
{
    "name": "The Person's Name",
    "picture": "The link to their image, or the empty string if no image exists",
    "major": "The person's major, or Undecided",
    "linkedin": "The link to the person's linked in. It MUST have the https:// but if you just copy paste from their profile then it will"
}
```
Also, if the person doesn't have a linkedin, you can just put the empty string and it will omit the link

The members section is a list of json team objects, these objects are like this
```json
{
    "team": "The Name of the team",
    "members": [
        {
            "name": "Name1",
            "picture": "images/profile.jpg",
            "major": "Major1",
            "linkedin": "https://linkedin.com/link"
        },
        {
            "name": "Name2",
            "picture": "images/profile.jpg",
            "major": "Major2",
            "linkedin": ""
        }
    ]
},
```
Where members is a list of all the people on the subteam.
Finally, the alumni section is just a list of all the people.

So to add new members to the site, just create a person json object as described above and then put it in the list of members for the subteam
they are on. If more subteams are created (or merged), then you can add/remove a team json object and make sure the people all go to the right
place.

A default image will need to be added and the path specified in the default_image_path const in team.html

## Moving Graduates to the Alumni Section

Graduation is a bittersweet time for many. A pivotal chapter in your life
comes to a close, _and it is no longer acceptable to be drunk in public._ 

Despite any pleas and appeals, we are an undergraduate organization. 
While people doing their MEng are welcome to stick around and help, as far
as we are concerned they are alumni and need to be moved to that section
of the website for the sake of book-keeping.

This is a relatively simple task. The alumni section is verbatim copied
from the members section on the main site. This is done intentionally. 
If the way members are presented on the main site changes, this must
change too. 

For starters, move the member's image from
```images/Member-Profile-Pictures/Current```
to
```images/Member-Profile-Pictures/Alumni```

**Rest to be Written** - Instructions go here

### CUAD History Lesson

Feel free to skip ahead if this is boring to you.
The section of alumni is missing a lot of people. 

A bit of CUAD history here:

Before we became a project team, we were a club known as ARC:
Aerial Robotics at Cornell.
Depending on when you read this, this is either a very recent memory or
new information. In 2020, the club essentially went dormant due to a variety
of factors, including COVID and a lack of members as many had graduated. 

Enter the 2020 Lead Staff. 

They essentially took this club, pulled it out of its grave, and made it what
it is today. All their efforts have culminated here, with you reading this
verbose and overly-complicated readme. They'd be so proud... :sob:

However, as a result of this, a lot of the information on members from around
the founding of the club in 2017 until around 2023 is very incomplete and
scattered. While sure, the images are still accessible thanks to Git
providing great version control in our old repo, some data is still missing. 

On the website, there is a note telling alumni not present to 
contact us to be featured. That's where you come in!

## Adding "new" Alumni

If an alumni has requested to be featured on the website, make sure they have
sent the following information to our email:
- Picture
- Name
- Major
- Subteam
- Year of Graduation
- LinkedIn (for alums this is optional)
- Any additional titles (lead, etc.)

If any info is missing feel free to email them back asking for this info.

These requests to be added to the website can be taken at face value, 
but if you really want to check you can check the slack or the campusgroups.
Very few people ever properly leave those, so it's very likely information 
is still there. Either way, the world isn't out to get you. Unless it's 
obviously fake or conflicts with data we have, it's safe to take these
requests at face value. 

To move people to the alumni section, you should just have to move their object from the subteam
they were a part of to the alumni section.

Do your best to put Alumni in order of graduation year, and if they can then
further be sorted by team even better. But, just by graduation year is fine.

## To-Do

- [ ] Insert Member Data following member photoshoot
- [ ] Insert Alumni information
- [ ] Fix link to application
- [ ] Placeholder projects.html? (What do we do with this?)
- [ ] Fix parallax scrolling
- [ ] Add default member photo for missing images

Of course, make sure to check in with your lead to see if anything else needs
to be accomplished with the website. 

## Potential Reset/Redo of Website 

It stands to reason that you, the webmaster, might want to start over with the website.
JT and I are not front-end specific, and you might have a better way of
going about this. 

You must discuss this with both the CS and Business subteam leads, and they **MUST** agree
to you choosing to reset the website. 

If this option is chosen, it's important to know that the main features of this
website must remain the same. While I hope the presentation is changed, the 
bulk of the _information_ should remiain the same:

- Who we are
- What we do
- Subteam info
- Members and Alumni, with redirects to LinkedIn so people can get a sense of 
what our members do currently/post-grad. 

As stated earlier, this decision would be made only after much deliberation
and discussion. Should it come to pass, we believe in you, young grasshopper.

### Acknowledgements

I'd like to give a special thank you to the 2021-2023 lead staff for inspiring
my deep passion for Aerial Robotics, for always being so warm and
welcoming, and for providing some unforgettable nights in the form 
of team socials. 

I'd also like to thank the leads I'm working with now in 2023-2024 for being so
diligent and for sharing the same passion I have. 

Thanks to JT for implementing this new website extremely quickly. He did
a brilliant job and this website is far cleaner than our previous one.

To the future leads of this team - thank you for keeping our dream alive.

And to you, the poor sucker in charge of this website - Thank you for 
all of your efforts and hard work. 

### Author

Website designed by JT Klenke.

Readme written by Santiago Blaumann.
Instructions for adding members and alumns by JT Klenke.

Last modified 7/28/23 by JT Klenke