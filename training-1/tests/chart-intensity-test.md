# [:back:][back] $\color{#F08000}\textsf{FLOWCHART: INTENSITY TEST}$

With the 5 [movements] do\:

```mermaid
---
title: INTENSITY TEST COMPLETE FLOWCHART
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
    1["#128293;Do the<br>warm-up"]
    3["#128170;Choose a<br>movement"]
    4{"Is this your<br>first time in<br>the test?#9757;"}
    4Y{{"#128304;Your maximum<br>level for this<br>movement is 1"}}
    5["#128166;Perform the exercise<br>of your maximum level<br>for this movement"]
    6{"Were you able<br>to complete the<br>exercise?#127919;"}
    6Y{"Did you reach the<br>maximum level for<br>this movement?#11088;"}
    6YN{{"#129518;Your maximum level<br>has increased by one"}}
    6YN0["#128168;Rest 2<br>minutes"]
    6N{"Are there<br>any movements<br>left?#129461;"}
    6NY["#128168;Rest 1<br>minute"]
    6NY0(("Go to<br>the red<br>dot#128308;"))
    6NN["#128167;Do the<br>cool-down"]
    7(["#128682;End"])

    subgraph 2["Red dot #128308;"]
        direction TB
        point(( ))
    end

    0 --> 1 --> 2 --> 3 --> 4
    4 -- "YES" --> 4Y --> 5
    4 -- "NO " --> 5
    5 --> 6
    6 -- "YES" --> 6Y
    6 -- "NO " --> 6N
    6Y -- "YES" --> 6N
    6Y -- "NO " --> 6YN --> 6YN0 --> 5
    6N -- "YES" --> 6NY --> 6NY0
    6N -- "NO " --> 6NN --> 7
```

---

[![abs](../icons/six_pack_little.svg)](../training-1.md "Training 1")

<!-- predefined -->
[back]: intensity.md "Intensity test"

<!-- named -->
[movements]: ../movements/
