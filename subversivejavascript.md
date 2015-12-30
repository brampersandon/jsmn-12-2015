### Intro

First, the boring stuff. I'm Brandon, I'm an intern and student at the U of M.

My work is a weird hybrid of internal communications and web programming. Most
recently, I'm embedded with the Identity Management team at the U, focusing
on breathing new life into old, but mission-critical apps.

That's what I'm here to talk about today.

# SUBVERSIVE JAVASCRIPT
## Test, Update, and Supplant Old Apps with JS

Here's the deal. In my short time in the business, I've found two sources of
frustration among programmers who've been in an organization for more than a few
months:

1. Senior technical people who like the current arrangements
2. Senior administrators who like not spending money on things that "work"

But you, my friend. You are a person who can *see* an issue with this app.
You know it can be better. And you *can* fix it, without alienating these
probably otherwise-awesome-but-sometimes-frustrating people.

I can hear the groans. This is not going to be ["JavaScript for Millennials."]()
Or at least I hope it isn't. Feel free to call me out if it is. But it won't be.

These steps are probably best undertaken when someone *recognizes* a flaw in
the application -- even a simple one. Because it's substantial work to
modify a monolith. You've got to take it apart first.

## Testing

The first thing I do when I start working on an app, is ask your business analyst
(or the original developer) if *test scripts* exist, whether manual or automated.

If there are automated tests, congrats, you've won the lottery! If there are
manual scripts, that's fine -- we can work with them using [Cucumber.js](https://cucumber.io).

> There are other Cucumber implementations, and if you're a Ruby or Java person
first, perhaps you'd prefer those, and that's okay!

You might've heard of this thing called **Behavior-Driven Development**. It's
pretty cool. It can be similar to what an analyst calls a *functional test*, and
 it's a useful way to make sure your app doesn't regress when changed.
That's what frameworks like Cucumber, and UI testing helpers like
[Casper](http://casperjs.org) are for.

Now you (or a coworker) can make changes to the app, while remaining reasonably
confident that your changes aren't going to break yours! And your administrator
is happy, because they can go to the execs, and say "hey, we're making this change,
but we know the following things aren't going to break."

It's not everything, but it's way better than nothing.

<!-- TODO: Cucumber w/ Casper example -->

## Updating

So, now you're pretty confident that your app isn't going to explode when you
change it. Now's the time to *get your UI as far away from Perl/JSP/etc. as possible*.

> I don't hate JSPs, I don't hate Perl. These are awesome tools, but they force your
interface to be tied up with your backend, which can be costly and confusing to your
UX developer, and lock everybody into places they don't want to be :(

"Hey, wait!" you say. "Isn't that just building an API around my backend?"

Yeah. Pretty much. It may seem expensive, but so is turning over Tomcat
every time you want to make a change in CSS. And that's the way you can justify
it to execs.

There are drawbacks to this, including the potential for other people to access
your API. There are ways around this, but they're *WAY* out of scope for this talk.

I've updated old Perl apps in the past with Backbone, but you can use whatever the heck
you want to -- even jQuery templates, if you wish!

<!-- TODO: Using Express to APIify an LPD queue or DB example -->
<!-- TODO: Backbone-hitting-a-REST-API example -->

Backbone has other problems, like SEO, etc. Your needs vary, as do mine. Do the
thing that works well for you!

There's a good paper in [SmashingMag](http://www.smashingmagazine.com/2015/12/reimagining-single-page-applications-progressive-enhancement/)
about ways to fix this.

## Supplanting

Once you have an API available, it's easy as pie to get this thing rolling.

When the app becomes ripe for a rewrite, the only thing left will be the backend.

(assuming the rest of this was done right) :)

So, you can pick to write the server side in whatever you want. Just make sure
it's RESTful or SOAPful or whatever your front end wants.

<!-- TODO: Course search example -->

## fin
