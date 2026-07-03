---
date: "June 2026"
tag: "Note"
title: "On voice interactions and evals"
---

Spent most of this week chasing what looked like a voice-agent bug and it turned out to be pacing. People pause to think mid-sentence, and the agent kept jumping in like it was their turn. Voice interactions look easy, but naturalness is complex, making sure turn detection, endpointing delays work seemlessly, across all ways of speaking, else it's a huge experience degrade.
Spent some time evaluating eval vendors to help automate these evaluations.

On evals itself - learnt that spotting failiure modes are tricky, while traditional methods work well, going through traces, maintaining a log, categorizing them and coming up with metrics, the real challenge is in scaling these processes. Sure, LLM as a judge works, online evals are a thing, but these again take away the ability to identify new failiure modes. 

What's important is establishing a cadence, one thing that'll not easily get automated is understanding the user's conversations through human judgement, doing that yourself at an interval and add it to your failiure modes log, and build new metrics around it as needed.