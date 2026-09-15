// Ambient celebratory background music generator & audio manager
class InvitationAudioManager {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.currentStep = 0;
    this.gainNode = null;
    this.customAudio = null;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
        this.gainNode = this.audioCtx.createGain();
        this.gainNode.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
        this.gainNode.connect(this.audioCtx.destination);
      }
    }
  }

  // Play a gentle, uplifting celebratory bell & harp note
  playPluck(freq, duration = 1.2, detune = 0) {
    if (!this.audioCtx || !this.gainNode) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const noteGain = this.audioCtx.createGain();

      osc.type = 'triangle'; // Soft, warm, bell-like harp tone
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      osc.detune.setValueAtTime(detune, this.audioCtx.currentTime);

      const now = this.audioCtx.currentTime;
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.28, now + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch (e) {
      console.warn("Audio note error:", e);
    }
  }

  // Play a soft chord
  playChord(freqs, duration = 2.0) {
    freqs.forEach((freq, idx) => {
      setTimeout(() => {
        this.playPluck(freq, duration, idx * 3);
      }, idx * 60);
    });
  }

  // Joyful, cheerful pentatonic / acoustic melody suited for Indonesian celebration
  startCelebratoryMelody() {
    try {
      this.initContext();
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      // Melodic notes in Hz (C Major / Pentatonic scale - bright, joyful, warm)
      const C4 = 261.63, D4 = 293.66, E4 = 329.63, F4 = 349.23, G4 = 392.00, A4 = 440.00, B4 = 493.88;
      const C5 = 523.25, D5 = 587.33, E5 = 659.25, F5 = 698.46, G5 = 783.99, A5 = 880.00, B5 = 987.77;

      // Sequence of uplifting phrases
      const melody = [
        { notes: [G4, C5, E5], type: 'chord', dur: 1.8 },
        { notes: [G5], type: 'single', dur: 0.8 },
        { notes: [E5], type: 'single', dur: 0.8 },
        { notes: [D5], type: 'single', dur: 0.8 },
        { notes: [C5, E5, G5], type: 'chord', dur: 2.0 },
        { notes: [A5], type: 'single', dur: 0.9 },
        { notes: [G5], type: 'single', dur: 1.2 },
        { notes: [E5], type: 'single', dur: 0.8 },
        { notes: [D5, G4, B4], type: 'chord', dur: 1.6 },
        { notes: [C5], type: 'single', dur: 0.9 },
        { notes: [D5], type: 'single', dur: 0.9 },
        { notes: [E5, G4, C4], type: 'chord', dur: 2.2 },
        { notes: [G5], type: 'single', dur: 0.8 },
        { notes: [A5], type: 'single', dur: 0.8 },
        { notes: [C5, E5, A5], type: 'chord', dur: 2.4 },
      ];

      this.currentStep = 0;
      const stepTime = 680; // ms per beat

      if (this.intervalId) clearInterval(this.intervalId);

      const tick = () => {
        if (!this.isPlaying) return;
        const item = melody[this.currentStep % melody.length];
        if (item.type === 'chord') {
          this.playChord(item.notes, item.dur);
        } else {
          item.notes.forEach(n => this.playPluck(n, item.dur));
        }
        this.currentStep++;
      };

      tick();
      this.intervalId = setInterval(tick, stepTime);
    } catch (e) {
      console.warn("Could not start celebratory melody:", e);
    }
  }

  play() {
    this.isPlaying = true;
    this.startCelebratoryMelody();
  }

  pause() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }
}

export const audioManager = new InvitationAudioManager();
