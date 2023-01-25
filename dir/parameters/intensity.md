# $\textsf{\color{orange}{INTENSITY}}$

The amount of energy expended per exercise or its difficulty, which is measured from 1 to 5 and determines which exercise to perform for the [basic movements](../movements/movements.md)\.

## Test

To know the maximum intensity of each movement it is necessary to develop the following test:

### :fire: Warm-up

+ [ ] **`25 rep`** &emsp;|&emsp; Jumping Jack
+ [ ] **`25 rep`** &emsp;|&emsp; Mountain climber
+ [ ] **`25 rep`** &emsp;|&emsp; Reverse mountain climber
+ [ ] **`02 min`** &emsp;|&emsp; Skipping

### :sweat_drops: Work-out

For each movement, where MAX is the intensity reached \(see [table](#level)\), do the following:

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
    1(( ))
    2{First time?}
    3["#128304;MAX = 1"]
    4["#128166;Do at MAX"]
    5{"Done?#127919;"}
    51(["#128168;Rest: 1 min"])
    511(["#128682;End"])
    52{"MAX = 5?#11088;"}
    521{{"#10133;MAX = MAX + 1"}}
    522["#128168;Rest: 2 min"]
    

    subgraph "Movement\n#128170;"
        direction TB
        1
    end

    1 --> 2
    2 -- "NO " --> 4
    2 -- "YES" --> 3 --> 4
    4 --> 5
    5 -- "NO " --> 51 
    5 -- "YES" --> 52
    51 --> 511
    52 -- "YES" --> 51
    52 -- "NO " --> 521 --> 522 --> 4

```

### :snowflake: Cool-down

+ [ ] **`02 min`** &emsp;|&emsp; Jumping rope

## Level

|Movement /<br>Level|1     |2     |3     |4     |5     |
|:------------------|:----:|:----:|:----:|:----:|:----:|
|Abdominal          |30 rep|30 rep|25 rep|15 rep|10 rep|
|Pull-up            |[^pul]|10 rep|10 rep|08 rep|03 rep|
|Push-up            |30 rep|30 rep|30 rep|30 rep|10 rep|
|Squat              |30 rep|30 rep|30 rep|15 rep|10 rep|
|Vertical push-up   |45 sec|45 sec|10 rep|10 rep|10 rep|
> _Table with criteria to reach intensity levels._

[^pul]: 45 sec active hung; 20 sec isometric position\.

[![Man's abdominals](../../src/six_pack_little.svg)](../training.md "Training")
