# First Light Platformer

Objective: build one immediately playable side-scrolling platform level with no dependencies.

The player runs left to right through a bright world, collects stars, bounces on roaming enemies, crosses gaps, and reaches a beacon at the end.

Core systems include left and right movement, jumping, gravity, solid platforms, a scrolling camera, collectibles, score, simple enemies, falling hazards, restart, win state, and one authored level.

Controls: Arrow keys or A and D move. Space, W, or Up jumps. R restarts.

Technical approach: one HTML5 Canvas game driven by requestAnimationFrame. The prototype stays dependency-free and uses simple original geometric artwork so the downloaded file can open directly in a browser.
