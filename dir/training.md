# ![Man's abdominals](../src/six_pack.svg) $\textsf{\color{orange}{TRAINING}}$

## Plan

The training plan is oriented to avoid specialization, comfort and energy efficiency and aims to develop the physical qualities of **endurance**, **strength**, **power** and **flexibility** over 10 schedules\.

To achieve this, it is proposed to execute a different training \(focused on a particular physical quality\) every 2 schedules and to finish with a mixed training of 4 schedules\.

```mermaid
---
title: TRAINING PLAN FLOWCHART
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
    E(FLEXIBILITY)

    A --2 sche--> B
    B --2 sche--> C
    C --2 sche--> D
    D --4 sche--> A

```

## Parameters

The nature of the trainings differs in the following factors:

+ **`LOAD:`** \(or intensity\) the number of [difficulty of the exercises](parameters/intensity.md#workout "How it is measured?")\. **MAX** for the maximum intensity\.
+ **`REPS:`** \(repetitions[^rep] or volume\) the number of times one completes an exercise\.
+ **`REST:`** Days of rest that _should_ be taken per muscle group \(**upper body** and **lower body**\)\.
+ **`SCHE:`** \(or schedules\) number of schedules to be completed by training\.
+ **`TIME:`** \(or time of break\) a tuple formed by the rest between sets and the rest between exercises in seconds[^sec] or minutes[^min]\.
+ **`VELO:`** \(or velocity\) speed of execution of the exercises\.

## Schedule

Each training lasts for the completion of the following schedule 2 or more times\.

|D1   |D2      |D3         |D4   |D5      |D6         |D7         |D8                       |D9      |
|:---:|:------:|:---------:|:---:|:------:|:---------:|:---------:|:-----------------------:|:------:|
|:leg:|:muscle:|:palm_tree:|:leg:|:muscle:|:palm_tree:|:stopwatch:|:triangular_flag_on_post:|:shield:|

Each emoji specifies a different workout day:

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
> Since nowhere in the plan is the [flexibility training](trainings/flexibility.md) specified, it is recommended to incorporate a session every [HIIT][abcd] day:
>
> |:stopwatch::octopus:|
> |--------------------|

## Sequence

A workout session always consists of the same sequence: first, warm-up; second, workout; third, cool-down\. Graphically:

> ### :one::fire: &rarr; :two::sweat_drops: &rarr; :three::snowflake: &#8203;
>
>> _Sequence of all workout sessions._

## Notes

+ The following nomenclature is used to express the number of sets and repetitions\.

> **\[sets\]** &times; **\[minimum repetitions\] - \[maximum repetitions\]**  
> or  
> **\[sets\]** &times; **\[time in seconds or minutes\]**.

+ When no exercise in training is a time exercise, the word ~~rep~~ is deleted
+ The last exercises are always _optional_\.

## Trainings

1. ### [**`Endurance`**](trainings/endurance.md)

    > load $\scriptsize{\textsf{\color{red}{LOW ↓}}}$  
    > reps $\scriptsize{\textsf{\color{lime}{HIG ↑}}}$  
    > rest $\scriptsize{\textsf{\color{red}{LOW ↓}}}$  
    > time $\scriptsize{\textsf{\color{red}{LOW ↓}}}$  
    > velo $\scriptsize{\textsf{\color{orange}{MED •}}}$

2. ### [**`Strength`**](trainings/strength.md)

    > load $\scriptsize{\textsf{\color{lime}{HIG ↑}}}$  
    > reps $\scriptsize{\textsf{\color{red}{LOW ↓}}}$  
    > rest $\scriptsize{\textsf{\color{lime}{HIG ↑}}}$  
    > time $\scriptsize{\textsf{\color{lime}{HIG ↑}}}$  
    > velo $\scriptsize{\textsf{\color{red}{LOW ↓}}}$

3. ### [**`Power`**](trainings/power.md)

    > load $\scriptsize{\textsf{\color{orange}{MED •}}}$  
    > reps $\scriptsize{\textsf{\color{orange}{MED •}}}$  
    > rest $\scriptsize{\textsf{\color{orange}{MED •}}}$  
    > time $\scriptsize{\textsf{\color{orange}{MED •}}}$  
    > velo $\scriptsize{\textsf{\color{lime}{HIG ↑}}}$

4. ### [**`Mixed`**](none.md)

    > A mix of endurance, strength and power trainings\.

---

## [:back:][back] [:twisted_rightwards_arrows:][tree] [:capital_abcd:][abcd]

[^min]: Abbreviated as "min"\.

[^rep]: Abbreviated as "rep"\.

[^sec]: Abbreviated as "sec"\.

[abcd]: glossary.md "Glossary"
[back]: ../README.md "ReadMe"
[tree]: index.md "Index"
