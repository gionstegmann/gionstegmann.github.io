---
title: "The French Executive"
description: "How I Vibe Coded My Sleep Schedule Back to Normal (And Built My First Android App in 24 Hours)"
pubDate: 2025-12-08
tags: ["vibe coding", "android app", "personal project"]
---

I recently came back from a big six-month motorcycle trip to zero job and zero schedule. Naturally, it took zero effort for my circadian rhythm to drift off a cliff.

5 AM bedtime, 2 PM wake up.

I was getting my sleep hours in, but I was missing out on actual life.

I’ve always been a bit of a night owl. I made this work in college and I know plenty of others who do too (shoutout to my old flatmates, a couple who lived in a blissfully synchronized 3 AM bubble), but I actually want to do stuff during the day.

Waking up at 2 PM means missing 2/3 of the "real" day. The one where you see your friends, family, and the sun. (I'm seriously lacking vitamin D). But then you show up to the pub at 7 PM having been awake for what feels like nothing. Your friends are winding down and you have a couple of cold ones, but you feel guilty because you still gotta work. Or you choose not to have those drinks and leave earlier than everyone.

Either way, you're missing out. You come home, you open up your laptop, you're a bit tipsy.

It is fun occasionally. It is *not* sustainable.

So, I decided to build a rehabilitation program for my circadian rhythm, ~~with blackjack and hookers~~ with Antigravity and Gemini... and booze.

## Liquid Creativity

The other day, I was at a restaurant with my family, celebrating my sister's and brother's birthdays. I came home at around midnight, but for me, of course, it felt like I had just finished lunch. I was wired. Ready to tackle the second half of my *day*.

I had a bit of wine, so I felt like one of those French executives who smash a glass of red for lunch and then go run a conglomerate. I understood then why the French are so... let's call it *creative*. It's no joke.

I had a boost of that specific, liquid creativity and thought: *Why not try to learn Android development right now?*

I simultaneously had the idea that I could build an app to fix my sleep schedule. Not sure which came first. *"L'œuf ou la poule"* as the French say (The egg or the hen). Either way, I felt the spirit of Steve Ballmer brewing in my veins, and I opened up my laptop.

## The Idea

**DawnShift** is a simple concept: it progressively shifts your wake-up time back to societal norms over a set period. You enter your current wake-up time (e.g., 2 PM), your target time (e.g., 8 AM), and the number of days you want to transition. The app calculates the daily shift and handles the alarms automatically.

Sounds simple, right? I mean there's probably a Haskell function that does it in one line. But this is Android, baby. And for someone whose coding experience was limited to theoretical uni classes, Python scripts, bash, and using a browser when a GUI was needed, this felt like hell.

## The Setup: Antigravity + Gemini 3.0 Pro

This was a whole bunch of firsts for me. My first Android app, my first time fully vibe coding, my first time seeing Kotlin code, and my first time using Google's new Antigravity + Gemini 3.0 Pro.

I didn't want to go through the old-school tutorial hell of watching a 27-video playlist on YouTube. Those were good times, but I wanted to build this thing while the French Executive energy was still flowing.

## The "Aha!" Moment

I used Claude to brainstorm the idea and write me a mega-prompt, then I pasted that into Antigravity.

This is where "vibe coding" clicked for me. I’ve had these "wow" moments exactly twice before:
1. When GPT-3 first came out and I prompted it to rewrite a song with Trump's mannerisms.
2. When I used Dall-E 1 to generate a photo of a Boar having a beer in an inflatable boat going down the Limmat river in Zurich.

This was the third time.

My previous LLM-assisted coding experience was basic. The old ChatGPT copy-paste shenanigans and copilot auto-completion. You prompt into an LLM, it vomits code. You copy-paste it, it breaks, you try again, it loses context, it forgets what it was doing, you cry.

But this time, Antigravity started writing an **outline**. It made a To-Do list of what it was going to do, and then started executing it bit by bit—exactly how a human dev would break down a huge task.

I could actually follow along.
* *Okay, it's building the UI.*
* *Now it's adding the alarm logic.*
* *Now it's fixing the data persistence.*

It did the first 80% of the work in a couple of prompts. I ran the emulator in Android Studio, and to my shock, I had a working prototype. *"SACRÉ BLEU!"* I exclaimed.

### The 80/20 Rule

Again This was my first time using any Cursor-like tools, so my workflow wasn't some fancy multi-agent swarm. It was just me, vibing with the prompt box.

Since the heavy lifting was done, I could just direct the last 20%:
* *"Okay, let's take care of the snooze functionality."*
* *"This looks ugly, let's fix the UI."*
* *"The alarm didn't go off in this specific scenario. Fix it."*

Did it write any slop? For sure. I felt like it generated a lot of unnecessary code, and I didn't verify all of it.

But I didn't have to. Tonight, I'm the French Executive, remember? I do abstractions, ideas, philosophies, and grand positioning. Don't even mention *concrete execution* to me. That's Gemini's job.

## Shipped (Before The Hangover)

I went from "idea on a tipsy walk home" to "fully functional Android App" in less than a day.

When I woke up (late, obviously), I expected to find a folder full of broken broken spaghetti code. Instead, I opened Android Studio, hit run again, and the thing actually worked. It set the alarms. It calculated the shift, UI wasn't broken. It looked clean.

I didn't just have a prototype; I had a usable tool that I’m now using to fix the very problem that led to its creation.

## The Side Project Paradox

In a professional setting, I thrive on the pressure. I love the grit. There is a specific satisfaction in hunting down a problem or optimizing a system when the stakes are high.

But on a personal side project? My time and energy are limited resources.

I want to spend my "grit budget" on solving interesting logic puzzles and crafting great ideas. Not on debugging Gradle config files for three hours. The former is creative problem solving; the latter is just administrative torture.

Often, side projects die not because the idea is hard, but because the setup is boring. You get stuck doing plumbing instead of architecture.

**Vibe coding changed that equation.**

It didn't remove the effort, it shifted the focus. Which meant more time and energy could be spent where it mattered. The French Executive would be proud.

## Try It Out

If you’re a student whose schedule drifted during the holidays, or a traveler fighting jet lag, give the app a shot. And if you’ve been on the fence about trying "vibe coding" tools—take this as your sign.

**Repo:** [Link to the GitHub](https://github.com/gionstegmann/DawnShift)