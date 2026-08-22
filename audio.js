(()=>{
let ac,master,music,fx,started=false,muted=false,lastScore=0,lastState='play',lastX=90,lastTaken=0,lastDead=0,nextNote=0,noteIndex=0;
const melody=[220,277.18,329.63,415.3,329.63,277.18,246.94,329.63,369.99,277.18,220,246.94];
function boot(){if(started)return;started=true;ac=new (window.AudioContext||window.webkitAudioContext)();master=ac.createGain();music=ac.createGain();fx=ac.createGain();master.gain.value=.48;music.gain.value=.18;fx.gain.value=.7;music.connect(master);fx.connect(master);master.connect(ac.destination);nextNote=ac.currentTime+.05;wind();}
function tone(freq,dur=.12,type='sine',vol=.12,when=0,dest=fx,slide=0){if(!started||muted)return;let t=ac.currentTime+when,o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.setValueAtTime(freq,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,freq+slide),t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(dest);o.start(t);o.stop(t+dur+.03)}
function noise(dur=.2,vol=.04){if(!started||muted)return;let n=Math.floor(ac.sampleRate*dur),b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*(1-i/n);let s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();s.buffer=b;f.type='lowpass';f.frequency.value=700;g.gain.value=vol;s.connect(f);f.connect(g);g.connect(fx);s.start()}
function wind(){if(!started)return;let n=ac.sampleRate*2,b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=Math.random()*2-1;let s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();s.buffer=b;s.loop=true;f.type='lowpass';f.frequency.value=420;g.gain.value=.018;s.connect(f);f.connect(g);g.connect(music);s.start()}
function jump(){tone(260,.16,'triangle',.11,0,fx,180);noise(.07,.018)}
function shard(){tone(740,.16,'sine',.12);tone(1110,.28,'sine',.07,.055);tone(1480,.36,'sine',.035,.11)}
function stomp(){tone(120,.12,'square',.09,0,fx,-45);noise(.12,.055)}
function hurt(){tone(180,.25,'sawtooth',.08,0,fx,-110);tone(95,.32,'triangle',.07,.06)}
function win(){[261.63,329.63,392,523.25,659.25].forEach((n,i)=>tone(n,.75,'sine',.1,i*.13,music));}
function musicTick(){if(!started||muted||typeof state==='undefined'||state!=='play')return;while(nextNote<ac.currentTime+.15){let f=melody[noteIndex++%melody.length];tone(f,1.15,'sine',.045,nextNote-ac.currentTime,music);tone(f/2,1.4,'triangle',.025,nextNote-ac.currentTime,music);nextNote+=.58}}
addEventListener('keydown',e=>{boot();if(ac.state==='suspended')ac.resume();if(e.code==='KeyM'){muted=!muted;master.gain.setTargetAtTime(muted?0:.48,ac.currentTime,.03);return}if(['Space','ArrowUp','KeyW'].includes(e.code)&&typeof player!=='undefined'&&player.on)jump()},{capture:true});
function watch(){if(started&&typeof score!=='undefined'){let taken=stars.filter(s=>s.taken).length,dead=enemies.filter(e=>e.dead).length;if(taken>lastTaken)shard();if(dead>lastDead)stomp();if(typeof state!=='undefined'&&state==='win'&&lastState!=='win')win();if(typeof player!=='undefined'&&player.x<180&&lastX>400&&state==='play')hurt();lastScore=score;lastTaken=taken;lastDead=dead;lastState=state;lastX=player.x;musicTick()}requestAnimationFrame(watch)}
requestAnimationFrame(watch);
window.FirstLightAudio={boot,get muted(){return muted}};
})();