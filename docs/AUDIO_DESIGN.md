# First Light — Audio Direction

The soundscape is generated entirely in the browser with the Web Audio API. No recorded audio files or external libraries are required.

## Intent

First Light should sound intimate, warm, mysterious, and slightly dreamlike rather than arcade-loud. Audio supports the enchanted visual direction without overpowering play.

## Layers

The ambience uses filtered procedural noise as a quiet wind bed. Music is a sparse repeating tonal motif built from sine and triangle oscillators. Effects are short synthesized gestures: an upward sweep for jumping, layered bell partials for light shards, a low transient for stomps, a falling dissonant gesture for damage/reset, and a rising chord when the beacon is reached.

## Interaction

Browsers require user interaction before audio playback, so the sound engine starts on the player's first key press. `M` toggles mute. Audio remains intentionally modest in level so repeated effects do not become fatiguing.

## Future expansion

If First Light grows beyond the prototype, recorded ambience, authored music stems, positional environmental sound, footsteps by surface type, and a proper mixer/settings menu would be natural next steps.