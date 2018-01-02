## Overview

Over the course of 6 months on this project I worked on a team of 5 — myself the Designer, 2 Developers, 1 Project Manager, and 1 QA — to redesign the Hudl iOS app.

I was first responsible for working with the team to understand the core problem, the desired outcome, and in turn the scope of the project. This started, like almost all projects at Hudl, with user research. 

Once we had a clear problem definition, I began design explorations, sketch sessions, and prototyping. From there, we decided on a direction and I began working with the developers to guide the implementation of the designs. 

Finally, I worked to ensure the roll-out was successful through beta testing, release coordination with our support team, and then ongoing monitoring of user feedback and real-world usage data.

<img src="https://placeholdit.co//i/1080x150">


---

# Case Study
## Background

This project began during a time of pretty rapid growth for Hudl — both in the size of the customer base, and the size of the company itself. 

This was also the time that mobile become more strategically important for our products. In the past, we were very web-focused, and the mobile side of our product was more complimentary. But the world was going mobile-first, and so were our customers. We needed to take a mobile app that was built in bits and pieces over time and try to create a better, more unified experience.

We were struggling to do this for a variety of reasons: The structure and design of the mobile app was very fragmented; customers were frustrated by inconsistencies and lack of parity between web and mobile; the experience was confusing and there was no clear entry point into the app; the app seemed unfinished and unpolished; and the design wasn’t scaling. On top of this, more product teams were building on mobile, but without a clear design direction, fragmentation was compounded.

Oh, and little did we know iOS 7 was around the corner, about to drop a huge visual-design paradigm shift in our laps.

## Research &amp; Discovery

Despite all of the struggles outlined above being the prevailing feelings within the company, it was still important to bring a critical perspective to validate them. To ask “Why?”,  “Is there a deeper problem here?”, and most importantly “What are our *customers* feeling?”. It was my job to ask these questions, and diving into last question in particular is where we always spent a majority of our time.

This is done by talking to our customers, understanding how they use our product, and how they need our product to work for them. How? We used a few tactics…

**Phone/Video Interviews**  
We set up dozens of phone calls with our users to ask them about their daily routines, how they use Hudl, what they use it for, how the mobile app fits into that workflow, the struggles they were having, the needs they had that we weren’t meeting, etc.

**Data Mining**  
We looked at usage data, what percentage of total usage is on mobile, what time mobile usage is most common, the error rates compared to the web, the usage across device type, etc.

**Field Visits**  
We also met with our users in their environments to understand how mobile fits into their operation, we had them demonstrate their usage and explain their frustrations, we took note of the situation, the lighting, the connection quality, the distractions, the time constraints, etc.

## Problem Definition

With this information, we could now confirm or challenge any of our initial assumptions and begin to clearly define the key problems and scope out which of them we could solve with this project. 

We identified a few major themes (confirming some of our initial hunches):

- **No feature parity with the web app.** Users wanted to use mobile all the time, instead they were forced to go stop until they got back to their desktop or lug around their laptop.
- **The app was fragmented and lacked cohesion.** Users were confused with no clear entry point into the app or ways to get around (which increased the perception of a lack of parity because users couldn’t find features even if they *were* there).
- **The initial video recording functionality was unreliable.** This often resulted in lost video, and users were obvioulsy frustrated by this. It also led to increased support overhead.
- **There were no team management features in app.** Users wanted to be able to manage their roster and message their team in-app, but we lacked that functionality.

## Core Problem

Ultimately we decided we needed to solidify the foundation of the app: the architecture, the navigation, the design, and the first-screen experience. Without this, we couldn’t solve the rest of the issues, this was the deepest problem that needed to be solved first.

And then iOS 7 was announced.

## Problem Re-Definition

With the announcement of iOS 7, we were now faced with a lot of visual design problems. We wanted to be a best-in-class application for our users (which was also a competitive advantage business wise). If iOS 7 launched and our app did not adapt to the new paradigm, this would be in jeopardy. As a result, we updated our problem definition and scope.

This was not an ideal project scope, but we felt we had to swallow this pill.

Now, along with creating a better app structure, navigation model, and first-screen experience to  increase engagement and showcase some of the hidden functionality of our app... we needed to also wrap that in a new visual design that fit the iOS platform post-iOS 7.

## Design Explorations
## Final Design Direction
## Before & After
## Results & Takeaways
## Related Projects

While working with the Mobile team on this project, I noticed some other problems with how we were operating. 

**Why worry about this kind of stuff? Because that's the kind of designer I want to be. It points back to something I care a lot about -- finding the deepest problem.** 

Despite being a product designer, sometimes the things most in need of design thinking are the systems in place that support the product design. That kind of holistic thinking leads to better products, even if you are redesigning a process instead of a UI. 

If we talk about how users care about experiences then we need to back this up. Our surface area as designers has to extend beyond the UI.

### Mobile Device Library

The first problem I noticed, and that our QA department also helped bring to light was our need for device coverage for app testing. Even back then there were a lot of devices and configurations to manage, so we needed a better system. 

The first step was to get the actual devices -- enough iPhones, iPod touches, and iPads to cover all our supported models and versions of iOS. 

As we did this, the next problem we ran into was keeping track of all of them along with their specs and installed iOS version. It was time for a spreadsheet.

We created an ID system that helped us immensely. We ended up with quite the device library, but it was necessary, and it provided the foundations for our much more sophisticated mobile device testing lab in use today across the company. We saved a ton of QA time and we also released better apps to our users because of this system. More bugs were found in less time across more device configurations that before.

[ screenshot ]

### Device Checkout App

### Improved Mobile Release Process