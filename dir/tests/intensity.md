# [:back:][back] $\textsf{\color{orange}{INTENSITY TEST}}$

> ## Intensity
>
> The amount of energy expended per exercise or its difficulty, which is measured from 1 to 5 and and determine which of the 5 exercises to perform for each basic movement\.
>
> **Warning**  
> Know the [5 movements][move] before taking the test\!

## Test

### :fire: Warm-up

+ [ ] **`25 rep`** &emsp;|&emsp; Jumping Jack
+ [ ] **`25 rep`** &emsp;|&emsp; Mountain climber
+ [ ] **`25 rep`** &emsp;|&emsp; Reverse mountain climber
+ [ ] **`02 min`** &emsp;|&emsp; Skipping

### :sweat_drops: Work-out

For each movement, where MAX is the intensity reached \(see [table](#level)\), do the following\:

```mermaid
---
title: INTENSITY TEST
---

%%{
    init: {
        "fontFamily": "lucida console",
        "flowchart": {
            "htmlLabels": true,
            "curve": "StepAfter"
        }
    }
}%%

flowchart TB
    0(["#127937;Start"])
    1{{"#128170;Set move"}}
    2{"First time?&#49;&#65039;&#8419;"}
    2Y["#128304;MAX = 1"]
    3["#128166;Do at MAX"]
    4{"Done?#127919;"}
    4Y{"MAX = 5?#11088;"}
    4YN{{"#129518;MAX = MAX + 1"}}
    4YN0["#128168;Rest: 2 min"]
    4N["#128168;Rest: 1 min"]
    5(["#128682;End"])

    0 --> 1 --> 2
    2 -- "YES" --> 2Y --> 3
    2 -- "NO " --> 3
    3 --> 4
    4 -- "YES" --> 4Y
    4 -- "NO " --> 4N
    4Y -- "YES" --> 4N
    4N --> 5
    4Y -- "NO " --> 4YN --> 4YN0 --> 3
```

<sub>Click [here](../tests/chart-intensity.md "Complete intensity test") to see the complete chart\.</sub>

### :snowflake: Cool-down

+ [ ] **`02 min`** &emsp;|&emsp; Jumping rope

## Level

|Movement \/<br>Level     |1     |2     |3     |4     |5     |
|:------------------------|:----:|:----:|:----:|:----:|:----:|
|Abdominal                |30 rep|30 rep|25 rep|15 rep|10 rep|
|Pull-up                  |[^pul]|10 rep|10 rep|08 rep|03 rep|
|Push-up                  |30 rep|30 rep|30 rep|30 rep|10 rep|
|Squat                    |30 rep|30 rep|30 rep|15 rep|10 rep|
|Vertical push-up         |45 sec|45 sec|10 rep|10 rep|10 rep|
> _Table with criteria to reach intensity levels._

[^pul]: 45 sec active hung; 20 sec isometric position\.

[![Man's abdominals](../../src/six_pack_little.svg)](../training.md "Home")

[back]: tests.md "Tests"
[move]: ../movements/movements.md "Movements"
