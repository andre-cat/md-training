# [![abs](icons/six_pack.svg)](#)  $\color{#F08000}\textsf{TRAINING 1}$

## Plan

`TYPE: CALISTHENICS`

The training 1 plan is oriented to avoid specialization, comfort and energy efficiency and aims to develop the physical qualities of **endurance**, **strength**, **power** and **flexibility** over 11 schedules\.

To achieve this, it is proposed to execute a different training module \(focused on a particular physical quality\) every 2 schedules and to finish with a mixed module of 4 schedules and a rest schedule\.

```mermaid
---
title: TRAINING 1 FLOWCHART
---

%%{
    init: {
        "fontFamily": "lucida console",
        "flowchart": {
            "htmlLabels": true,
            "curve": "linear"
        }
    }
}%%

flowchart LR
    A([ENDURANCE])
    B[STRENGTH]
    C[POWER]
    D[MIXED]
    E[REST]

    A --2 sche--> B
    B --2 sche--> C
    C --2 sche--> D
    D --4 sche--> E
    E --1 sche--> A
```

## Parameters

The nature of the modules differs in the following factors\:

+ **`LOAD:`** \(or intensity [<sup>\[How is it measured?\]</sup>][intensity test]\) the number of difficulty of the exercises\. **MAX** for the maximum intensity\.
+ **`REPS:`** \(repetitions[^rep] or volume\) the number of times one completes an exercise\.
+ **`REST:`** Days of rest that _should_ be taken per muscle group \(**upper body** and **lower body**\)\.
+ **`SCHE:`** \(or schedules\) number of schedules to be completed by training\.
+ **`TIME:`** \(or time of break\) a tuple formed by the rest between sets and the rest between exercises in seconds[^sec] or minutes[^min]\.
+ **`VELO:`** \(or velocity\) speed of execution of the exercises\.

## Schedule

Each module lasts for the completion of the following schedule 2 or more times\.

|D1   |D2      |D3         |D4   |D5      |D6         |D7         |D8                       |D9      |
|:---:|:------:|:---------:|:---:|:------:|:---------:|:---------:|:-----------------------:|:------:|
|:leg:|:muscle:|:palm_tree:|:leg:|:muscle:|:palm_tree:|:stopwatch:|:triangular_flag_on_post:|:shield:|

Each emoji specifies a different workout day\:

|DAY             |EMOJI                    |
|:---------------|:-----------------------:|
|Challenge day   |:triangular_flag_on_post:|
|Core day        |:shield:                 |
|Flexibility day |:octopus:                |
|HIIT day        |:stopwatch:              |
|Lower body day  |:leg:                    |
|Rest day        |:palm_tree:              |
|Upper body day  |:muscle:                 |

> **Note**  
> Since nowhere in the schedule is the [flexibility] day specified, it is recommended to incorporate a session every [HIIT][h] day\:
>
> |:stopwatch::octopus:|
> |--------------------|

## Sequence

A workout session \(or day\) always consists of the same sequence\: first, warm-up; second, workout; third, cool-down\. Graphically\:

> ### :one::fire: &rarr; :two::sweat_drops: &rarr; :three::snowflake: &#8203;
>
>> _Sequence of all workout sessions._

## Notes

+ The following nomenclature is used to express the number of sets and repetitions\.

For repetition exercises:
> **\[repetitions\]**  
> or  
> **\[sets\]** &times; **\[repetitions\]**  
> or  
> **\[sets\]** &times; **\[minimum repetitions\] \- \[maximum repetitions\]**  

For time exercises:  
> **\[time\]**  
> or  
> **\[sets\]** &times; **\[time\]**  
> or  
> **\[sets\]** &times; **\[minimum time\] \- \[maximum time\]**  

+ When no exercise in workout is a time exercise, the word ~~rep~~ is deleted\.
+ The last exercises with italic emphasis are always _optional_\.

## [Modules]

> **Warning**  
> Each time at the beginning of this 11-week training, the [intensity test] must be performed\.

See [here][soon] the first module\.

## [Movements]

The 5 basic movements from which the other exercises of the program are derived\.

## [Tests]

Several tests and challenges\.

---

## [:back:][back] [:soon:][soon]

[^min]: Abbreviated as "min"\.

[^rep]: Abbreviated as "rep"\.

[^sec]: Abbreviated as "sec"\.

<!-- predefined -->
[back]: ../home.md "Home"
[soon]: modules/endurance.md "Endurance module"

<!-- glossary -->
[h]: ../glossary.md#h "H"

<!-- named -->
[flexibility]: modules/flexibility.md "Flexibility module"
[intensity test]: tests/intensity.md "Intensity test"
[modules]: modules/modules.md "Modules"
[movements]: movements/movements.md "Movements"
[tests]: tests/tests.md "Tests"
